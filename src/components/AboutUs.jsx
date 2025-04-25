import React, { useState } from "react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("#consulting");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
    <section className="about-one">
  <div className="container">
    <div className="row">
      <div className="col-xl-6">
        <div className="about-one__left">
          <div className="section-title text-left sec-title-animation animation-style2">
            <div className="section-title__tagline-box">
              <span className="section-title__tagline">AboUt Us</span>
            </div>
            <h2 className="section-title__title title-animation sec-heading">
            What We Offer
            </h2>
          </div>
          <p className="about-one__text-1 sec-heading">
           
With 18 successful stores across Australia and counting, Pop Phones has become a trusted name in mobile devices, accessories, repairs, and unbeatable customer service
            <br />
            Now, we're offering franchise opportunities to passionate entrepreneurs ready to join our journey and bring Pop Phones to even more communities.
          </p>
          <ul className="list-unstyled about-one__points sec-heading">
            <li>
              <div className="icon">
                <span className="icon-double-arrow-right" />
              </div>
              <div className="text sec-heading">
                <p>Mobile Phones (New & Pre-Owned)</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <span className="icon-double-arrow-right" />
              </div>
              <div className="text">
                <p>Accessories (Chargers, Cases, Screen Protectors & more)</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <span className="icon-double-arrow-right" />
              </div>
              <div className="text">
                <p>Repairs & Tech Services</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <span className="icon-double-arrow-right" />
              </div>
              <div className="text">
                <p>Buy-Back & Trade-In Programs</p>
              </div>
            </li>
            <li>
              <div className="icon">
                <span className="icon-double-arrow-right" />
              </div>
              <div className="text">
                <p>Friendly, Knowledgeable Customer Service</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="col-xl-6 wow slideInRight"
        data-wow-delay="100ms"
        data-wow-duration="2500ms"
      >
        <div className="about-one__right">
          <div className="about-one__img-box">
            <div className="about-one__img-shape-1 float-bob-y-2" />
            <div className="about-one__img-shape-2 float-bob-x-2" />
            <div className="about-one__img">
              <img src="/gallery/gallery-4-2.jpg" alt="" />
              <div className="about-one__content-box">
                <div className="about-one__content-icon">
                  <span className="icon-auto-machanic-shop" />
                </div>
                <h4 className="about-one__content-title">Auto Mechanic Shop</h4>
                <p className="about-one__content-text">
                  Car service is essential for maintaining the performance and
                  longevity Car service is essential maintaining
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default AboutUs;
