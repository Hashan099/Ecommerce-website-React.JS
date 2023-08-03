import React from "react";
import { Container, Typography } from "@mui/material";
import "./AboutUs.scss";
import Contact from "../../components/Contact/Contact";


const AboutUs = () => {
  return (
    <>
    <Container className="about-container">
     
      <img class = "contimg" src ="/img/products-banner.jpg" alt="CELENE Clothing" />

      <Typography variant="body1">
     ** Welcome to CELENE Clothing, your premier destination for high-quality, stylish garments for men, women, and children. With over two decades of experience in the fashion industry, we take great pride in offering exceptional clothing options to our esteemed customers. **
      </Typography>

      <Typography variant="body1">
      ** Our brand's journey began over 20 years ago, driven by a deep passion for craftsmanship and an unwavering commitment to excellence. Since our inception, we have worked tirelessly to curate a collection that embodies our core values of superior quality, meticulous attention to detail, and cutting-edge fashion. Each and every piece in our collection is thoughtfully designed and expertly crafted using the finest materials available. We believe that true luxury lies in the perfect fusion of exceptional craftsmanship, premium fabrics, and impeccable fit. From the precision of our stitching to the selection of buttons, zippers, and embellishments, we leave no stone unturned to ensure that each garment meets the highest standards of quality. **
      </Typography>

      <Typography variant="body1">
      ** We are committed to sustainability and embrace eco-friendly practices throughout our operations. From utilizing sustainable materials to implementing environmentally conscious manufacturing processes, we strive to minimize our ecological footprint. We believe that fashion can be both beautiful and responsible, and we constantly seek innovative ways to achieve this balance. At CELENE Clothing, we don't just offer clothes; we create an experience. When you choose us, you can expect personalized attention from our friendly and knowledgeable team. We are passionate about assisting you in finding the perfect outfit for every occasion, whether it's a relaxed weekend outing, a formal event, or a special celebration. **
      </Typography>

      <Typography variant="body1">
      ** We are incredibly grateful for our loyal customer base, whose unwavering support has been integral to our success. Your trust in CELENE Clothing is a testament to our commitment to delivering outstanding products and exceptional customer service. Thank you for choosing CELENE Clothing. We invite you to explore our exquisite collection and discover the perfect blend of style, quality, and comfort that will elevate your wardrobe to new heights. Join us on this fashion journey and experience the essence of true craftsmanship with every garment you wear. **
      </Typography>
    </Container>

     <Contact />
     </>
  );
  
};

export default AboutUs;
