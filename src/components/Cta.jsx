import React from "react";

const redirectSvg = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12L12 6M12 6V11.25M12 6H6.75" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Cta = () => {
  return (
    <div id="opportunities-section">
      <section className="team-two">
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box" />
            <h2 className="section-title__title title-animation">
              Steps
              <br />
            </h2>
          </div>
          <div className="team-two__inner">
            <ul className="team-two__list list-unstyled">
              <li className="hover-item wow fadeInLeft" data-wow-delay="100ms">
                <div className="team-two__single position-relative rounded-4 overflow-hidden">
                  {/* Redirect Icon with Bootstrap classes instead of inline CSS */}
                  {/* <a href="#car-repair-form" className="position-absolute top-0 end-0 mt-4 me-2 bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{width: "36px", height: "36px", border: "3px solid #fff", zIndex: 2}}>
                    {redirectSvg}
                  </a> */}
                  <div
                    className="team-two__shape-1"
                    // style={{ backgroundImage: "url(/shapes/shape0.jpg)" }}
                  />
                  <div className="team-two__name-box">
                    <h3>
                      <a href="team-details.html">Apply Online</a>
                    </h3>
                  </div>
                  <p className="team-two__text">
                  Submit a simple application form with your details and business interests.
                    <br />
                  </p>
                </div>
                <div className="hover-item__box">
                  <img
                    src="/team/team-2-1.jpg"
                    alt="Image"
                    className="hover-item__box-img"
                  />
                  <div className="team-two__arrow">
                    <a href="#car-repair-form">
                      <span className="icon-arrow-up-right" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="hover-item wow fadeInRight" data-wow-delay="200ms">
                <div className="team-two__single position-relative rounded-4 overflow-hidden">
                  {/* Redirect Icon with Bootstrap classes instead of inline CSS */}
                  {/* <a href="#car-repair-form" className="position-absolute top-0 end-0 mt-4 me-2 bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{width: "36px", height: "36px", border: "3px solid #fff", zIndex: 2}}>
                    {redirectSvg}
                  </a> */}
                  <div
                    className="team-two__shape-1"
                    // style={{ backgroundImage: "url(/shapes/shape0.jpg)" }}
                  />
                  <div className="team-two__name-box">
                    <h3>
                      <a href="team-details.html">Initial Consultation</a>
                    </h3>
                  </div>
                  <p className="team-two__text">
                  Our franchise team will contact you for an introduction and answer any initial questions.
                    <br />
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="team-two__inner">
            <ul className="team-two__list list-unstyled">
              <li className="hover-item wow fadeInLeft" data-wow-delay="100ms">
                <div className="team-two__single position-relative rounded-4 overflow-hidden">
                  {/* Redirect Icon with Bootstrap classes instead of inline CSS */}
                  {/* <a href="#car-repair-form" className="position-absolute top-0 end-0 mt-4 me-2 bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{width: "36px", height: "36px", border: "3px solid #fff", zIndex: 2}}>
                    {redirectSvg}
                  </a> */}
                  <div
                    className="team-two__shape-1"
                    // style={{ backgroundImage: "url(/shapes/shape0.jpg)" }}
                  />
                  <div className="team-two__name-box">
                    <h3>
                      <a href="team-details.html">Review & Discovery</a>
                    </h3>
                  </div>
                  <p className="team-two__text">
                  Receive our Franchise Information Pack. We’ll discuss your goals, ideal locations, and investment details.
 
                    <br />
                  </p>
                </div>
                <div className="hover-item__box">
                  <img
                    src="/team/team-2-1.jpg"
                    alt="Image"
                    className="hover-item__box-img"
                  />
                  <div className="team-two__arrow">
                    <a href="#car-repair-form">
                      <span className="icon-arrow-up-right" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="hover-item wow fadeInRight" data-wow-delay="200ms">
                <div className="team-two__single position-relative rounded-4 overflow-hidden">
                  {/* Redirect Icon with Bootstrap classes instead of inline CSS */}
                  {/* <a href="#car-repair-form" className="position-absolute top-0 end-0 mt-4 me-2 bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{width: "36px", height: "36px", border: "3px solid #fff", zIndex: 2}}>
                    {redirectSvg}
                  </a> */}
                  <div
                    className="team-two__shape-1"
                    // style={{ backgroundImage: "url(/shapes/shape0.jpg)" }}
                  />
                  <div className="team-two__name-box">
                    <h3>
                      <a href="team-details.html">Approval & Agreement</a>
                    </h3>
                  </div>
                  <p className="team-two__text">
                  Once approved, you’ll sign the Franchise Agreement and begin the onboarding process.
                    <br />
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="team-two__inner">
            <ul className="team-two__list list-unstyled">
              <li className="hover-item wow fadeInLeft" data-wow-delay="100ms">
                <div className="team-two__single position-relative rounded-4 overflow-hidden">
                  {/* Redirect Icon with Bootstrap classes instead of inline CSS */}
                  {/* <a href="#car-repair-form" className="position-absolute top-0 end-0 mt-4 me-2 bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{width: "36px", height: "36px", border: "3px solid #fff", zIndex: 2}}>
                    {redirectSvg}
                  </a> */}
                  <div
                    className="team-two__shape-1"
                    // style={{ backgroundImage: "url(/shapes/shape0.jpg)" }}
                  />
                  <div className="team-two__name-box">
                    <h3>
                      <a href="team-details.html">Training & Setup</a>
                    </h3>
                  </div>
                  <p className="team-two__text">
                  You’ll undergo hands-on training covering sales, repairs, inventory, operations, and customer service. We also support with site fit-out and inventory setup.
                    <br />
                  </p>
                </div>
                <div className="hover-item__box">
                  <img
                    src="/team/team-2-1.jpg"
                    alt="Image"
                    className="hover-item__box-img"
                  />
                  <div className="team-two__arrow">
                    <a href="#car-repair-form">
                      <span className="icon-arrow-up-right" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="hover-item wow fadeInRight" data-wow-delay="200ms">
                <div className="team-two__single position-relative rounded-4 overflow-hidden">
                  {/* Redirect Icon with Bootstrap classes instead of inline CSS */}
                  {/* <a href="#car-repair-form" className="position-absolute top-0 end-0 mt-4 me-2 bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{width: "36px", height: "36px", border: "3px solid #fff", zIndex: 2}}>
                    {redirectSvg}
                  </a> */}
                  <div
                    className="team-two__shape-1"
                    // style={{ backgroundImage: "url(/shapes/shape0.jpg)" }}
                  />
                  <div className="team-two__name-box">
                    <h3>
                      <a href="team-details.html">Launch Your Store</a>
                    </h3>
                  </div>
                  <p className="team-two__text">
                  Open your doors with confidence—backed by national marketing, launch promotions, and continuous support.
                    <br />
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="team-two__inner">
            <ul className="team-two__list list-unstyled">
              <li className="hover-item wow fadeInLeft" data-wow-delay="100ms">
                <div className="team-two__single position-relative rounded-4 overflow-hidden">
                  {/* Redirect Icon with Bootstrap classes instead of inline CSS */}
                  {/* <a href="#car-repair-form" className="position-absolute top-0 end-0 mt-4 me-2 bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{width: "36px", height: "36px", border: "3px solid #fff", zIndex: 2}}>
                    {redirectSvg}
                  </a> */}
                  <div
                    className="team-two__shape-1"
                    // style={{ backgroundImage: "url(/shapes/shape0.jpg)" }}
                  />
                  <div className="team-two__name-box">
                    <h3>
                      <a href="team-details.html">Grow With Us</a>
                    </h3>
                  </div>
                  <p className="team-two__text">
                  We’re committed to your success with ongoing mentoring, updates, and opportunities to expand your footprint.
                    <br />
                  </p>
                </div>
                <div className="hover-item__box">
                  <img
                    src="/team/team-2-1.jpg"
                    alt="Image"
                    className="hover-item__box-img"
                  />
                  <div className="team-two__arrow">
                    <a href="#car-repair-form">
                      <span className="icon-arrow-up-right" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="hover-item wow fadeInRight" data-wow-delay="200ms">
                {/* <div className="team-two__single position-relative rounded-4 overflow-hidden">
                 
                  <a href="#car-repair-form" className="position-absolute top-0 end-0 mt-4 me-2 bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{width: "36px", height: "36px", border: "3px solid #fff", zIndex: 2}}>
                    {redirectSvg}
                  </a>
                  <div
                    className="team-two__shape-1"
                 
                  />
                  <div className="team-two__name-box">
                    <h3>
                      <a href="team-details.html">Parabanks</a>
                    </h3>
                  </div>
                  <p className="team-two__text">
                    Establish your franchise in the thriving Parabanks Shopping
                    Centre, a central retail hub in Salisbury known for its
                    strong community engagement and consistent shopper turnout.
                    <br />
                  </p>
                </div> */}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cta;