import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
// import "../styles/FAQ.css";

const faqs = [
  {
    id: 1,
    question:
      "What kind of experience do I need to become a Pop Phones franchisee?",
    answer:
      " No prior experience in the mobile industry is required! We’re looking for driven individuals with a strong work ethic, good people skills, and a passion for retail. We provide full training and ongoing support. ",
  },
  {
    id: 2,
    question: "How much does it cost to start a Pop Phones franchise? ",
    answer:
      "Startup costs vary depending on location, store size, and fit-out needs. We’ll provide a detailed cost breakdown after your initial application. Expect an investment range starting from AUD $XXX.",
  },
  {
    id: 3,
    question: "What support do I receive as a franchisee?",
    answer:
      "1.Full store setup & training,2. Inventory and supplier management,3.Local and national marketing support,4.POS & tech integration,5.Ongoing business mentoring & operational guidance ",
  },
  {
    id: 4,
    question: "Do I have to find my own location?",
    answer:
      "We assist with site selection based on performance data, local demographics, and commercial viability. Final approval is a collaborative process to ensure long-term success.  ",
  },
  {
    id: 5,
    question: "How long does it take to open a store?",
    answer:
      "From approval to opening, the process typically takes 8–12 weeks, depending on the site and fit-out schedule.  ",
  },
  {
    id: 6,
    question: "Can I own multiple stores?",
    answer:
      "Yes! Many of our franchisees scale to multi-store ownership. We support ambitious partners ready to grow within our network  ",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-one">
      <div className="container">
        <div className="section-title text-center sec-title-animation animation-style1">
          <div className="section-title__tagline-box">
            <span className="text-black">FAQs</span>
          </div>
          <h2 className="text-black">
            Got Questions? We've <br />
            Got Answers
          </h2>
        </div>

        <div className="faq-one__inner-content">
          <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`accrodion ${activeIndex === index ? "active" : ""}`}
              >
                <div
                  className="accrodion-title"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="faq-one__accrodion-title-co">
                    {`0${index + 1}.`}
                  </div>
                  <h4>{faq.question}</h4>
                  <div className="icon">
                    <ChevronDown className="toggle-btn" />
                  </div>
                </div>
                {activeIndex === index && (
                  <div className="accrodion-content">
                    <div className="inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
