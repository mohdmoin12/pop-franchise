import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
// import "../styles/FAQ.css";

const faqs = [
  {
    id: 1,
    question: "How long does a typical repair take?",
    answer:
      " Most repairs, such as screen and battery replacements, can be completed within 30-60 minutes. More complex issues may take longer, but we always aim for a quick turnaround.    ",
  },
  {
    id: 2,
    question: "Do you offer a warranty on repairs? ",
    answer:
      "Absolutely! We provide a warranty on all repairs, covering defects in parts and workmanship. Warranty periods vary based on the repair type",
  },
  {
    id: 3,
    question: "What if my phone has multiple issues?",
    answer:
      "No problem! Our technicians can diagnose all issues and offer repairs at the best price. ",
  },
  {
    id: 4,
    question: "What should I do if my phone has water damage?",
    answer:
      "Turn it off immediately and do not charge it. Bring it to us as soon as possible for professional drying and repair to prevent further damage.  ",
  },
  {
    id: 5,
    question: "Do I need an appointment for a repair?",
    answer:
      "While walk-ins are welcome, we recommend booking an appointment online to ensure faster service.  ",
  },
  {
    id: 6,
    question: "Do you repair all phone brands?",
    answer:
      "Yes! We repair iPhones, Samsung, Google Pixel, OnePlus, and many other brands.    ",
  },
  {
    id: 7,
    question: "How can I track my repair status?",
    answer:
      "You’ll receive real-time updates via SMS or email. You can also contact us anytime for a status update.   ",
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
            <span className="section-title__tagline">FAQs</span>
          </div>
          <h2
            className="section-title__title title-animation"
            style={{ color: "white" }}
          >
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
