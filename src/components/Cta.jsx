import React from "react";

const redirectSvg = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12L12 6M12 6V11.25M12 6H6.75" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Cta = () => {
  return (
    <div>
      <section className="team-two">
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box" />
            <h2 className="section-title__title title-animation">
              Available Opportunities
              <br />
            </h2>
          </div>
          <div className="team-two__inner">
            <ul className="team-two__list list-unstyled">
              <li className="hover-item wow fadeInLeft" data-wow-delay="100ms">
                <div className="team-two__single position-relative rounded-4 overflow-hidden">
                  {/* Redirect Icon with Bootstrap classes instead of inline CSS */}
                  <a href="#car-repair-form" className="position-absolute top-0 end-0 mt-4 me-2 bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{width: "36px", height: "36px", border: "3px solid #fff", zIndex: 2}}>
                    {redirectSvg}
                  </a>
                  <div
                    className="team-two__shape-1"
                    // style={{ backgroundImage: "url(/shapes/shape0.jpg)" }}
                  />
                  <div className="team-two__name-box">
                    <h3>
                      <a href="team-details.html">Adelaide City</a>
                    </h3>
                  </div>
                  <p className="team-two__text">
                    Position your business in the heart of Adelaide's bustling
                    CBD, a prime location with high foot traffic and a diverse
                    customer base seeking quality mobile solutions.
                    <br />
                  </p>
                </div>
                <div className="hover-item__box">
                  <img
                    src="/images/team/team-2-1.jpg"
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
                  <a href="#car-repair-form" className="position-absolute top-0 end-0 mt-4 me-2 bg-warning rounded-circle d-flex align-items-center justify-content-center" style={{width: "36px", height: "36px", border: "3px solid #fff", zIndex: 2}}>
                    {redirectSvg}
                  </a>
                  <div
                    className="team-two__shape-1"
                    // style={{ backgroundImage: "url(/shapes/shape0.jpg)" }}
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
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cta;