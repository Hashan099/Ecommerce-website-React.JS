import React, { useState } from 'react';
import './FAQsPage.scss';

const FAQsPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How can I place an order on Celene Clothing?",
      answer: "To place an order, simply follow these steps:\n\n1. Browse our website and add the desired items to your shopping cart.\n2. Click on the cart icon at the top-right corner of the page to proceed to checkout.\n3. Enter your shipping and payment information.\n4. Review your order details and confirm the purchase."
    },
    {
      question: "What payment methods are accepted on Celene Clothing?",
      answer: "We accept various payment methods, including credit/debit cards, PayPal, and other secure online payment options. Rest assured that all payment transactions are encrypted and secure."
    },
    {
      question: "How can I track my order status?",
      answer: "Once your order is confirmed and shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status of your shipment on the carrier's website."
    },
    {
      question: "What is Celene Clothing's return and exchange policy?",
      answer: "We want you to be completely satisfied with your purchase. If you're not happy with an item, you can initiate a return or exchange within 30 days of receiving your order. Please contact our Support team using the contact us page for further inquiries."
    },
    {
      question: "Does Celene Clothing offer Free shipping?",
      answer: "Yes, we provide Free shipping for every Order. Our customers do not have to worry about Shipping, only worry about Shopping!"
    },
    {
      question: "How can I contact Celene Clothing's customer support?",
      answer: "For any inquiries, issues, or assistance, you can reach out to our friendly customer support team through the Contact Us page. We strive to respond promptly and provide the best possible support."
    },
    {
      question: "Are my personal and payment details safe on Celene Clothing's website?",
      answer: "Absolutely! We take data security seriously and use industry-standard encryption protocols to protect your personal and payment information. Your privacy and security are our top priorities."
    },
    {
      question: "Can I cancel an order after it has been placed?",
      answer: "If you wish to cancel your order, please contact our customer support as soon as possible. We'll do our best to accommodate your request, but keep in mind that if the order has already been processed and shipped, cancellation might not be possible."
    },
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <div className="faq-item" key={index}>
          <h3 onClick={() => handleToggle(index)}>{faq.question}</h3>
          {activeIndex === index && (
            <p>
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQsPage;
