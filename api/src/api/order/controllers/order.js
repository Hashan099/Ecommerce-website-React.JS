// @ts-nocheck
// order.controller.js

const { createCoreController } = require("@strapi/strapi").factories;
const stripe = require("stripe")(process.env.STRIPE_KEY); 

const sizePriceIncrements = {
  S: -100,
  M: 0,
  L: 150,
  XL: 300,
};

const customImageURL = "https://i.imgur.com/E9pHCV6.jpg";
const successURL = `${process.env.CLIENT_URL}/success`;
const failureURL = `${process.env.CLIENT_URL}/failure`;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;
    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          const updatedPrice = item.price + sizePriceIncrements[product.size];

          return {
            price_data: {
              currency: "lkr",
              product_data: {
                name: `${item.title} (${product.size})`,
                images: [customImageURL],
              },
              unit_amount: Math.round(updatedPrice * 100), 
            },
            quantity: product.quantity,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: {
          allowed_countries: ['LK'],
        },
        payment_method_types: ["card"],
        mode: "payment",
        success_url: successURL, 
        cancel_url: process.env.CLIENT_URL + "?success=false",
        line_items: lineItems,
      });

      await strapi.service("api::order.order").create({
        data: { products, stripeId: session.id },
      });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return { error };
    }
  },
}));
