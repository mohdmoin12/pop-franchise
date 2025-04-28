import React from "react";

const Cta = () => {
  return (
    <div>
      <section className="team-two">
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box">
              {/* <span className="section-title__tagline">Our Team</span> */}
            </div>
            <h2 className="section-title__title title-animation">
              Available Opportunities
              <br />
              {/* Member Ever */}
            </h2>
          </div>
          <div className="team-two__inner">
            <ul className="team-two__list list-unstyled">
              <li className="hover-item wow fadeInLeft" data-wow-delay="100ms">
                <div className="team-two__single">
                  <div
                    className="team-two__shape-1"
                    style={{
                      backgroundImage: "url(/shapes/shape0.jpg)",
                    }}
                  />
                  <div className="team-two__name-box">
                    <h3>
                      <a href="team-details.html">Adelaide City</a>
                    </h3>
                    {/* <p className="text-black">Nursing Assistant</p> */}
                  </div>
                  <p className="team-two__text">
                    Position your business in the heart of Adelaide's bustling
                    CBD, a prime location with high foot traffic and a diverse
                    customer base seeking quality mobile solutions.
                    <br />
                    {/* vehicle. From oil changes Car service is essential for
                    maintaining */}
                  </p>
                </div>
                <div className="hover-item__box">
                  <img
                    src="/images/team/team-2-1.jpg"
                    alt="Image"
                    className="hover-item__box-img"
                  />
                  <div className="team-two__arrow">
                    <a href="team-details.html">
                      <span className="icon-arrow-up-right" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="hover-item wow fadeInRight" data-wow-delay="200ms">
                <div className="team-two__single">
                  <div
                    className="team-two__shape-1"
                    style={{
                      backgroundImage: "url(/shapes/shape0.jpg)",
                    }}
                  />
                  <div className="team-two__name-box">
                    <h3>
                      <a href="team-details.html">Parabanks</a>
                    </h3>
                    {/* <p className="text-black ">Medical Assistant</p> */}
                  </div>
                  <p className="team-two__text">
                    Establish your franchise in the thriving Parabanks Shopping
                    Centre, a central retail hub in Salisbury known for its
                    strong community engagement and consistent shopper turnout.
                    <br />
                    {/* vehicle. From oil changes Car service is essential for
                    maintaining */}
                  </p>
                </div>
                {/* <div className="hover-item__box">
                  <img
                    src="assets/images/team/team-2-2.jpg"
                    alt="Image"
                    className="hover-item__box-img"
                  />
                  <div className="team-two__arrow">
                    <a href="team-details.html">
                      <span className="icon-arrow-up-right" />
                    </a>
                  </div>
                </div> */}
              </li>
              {/* <li className="hover-item wow fadeInLeft" data-wow-delay="300ms">
                <div className="team-two__single">
                  <div
                    className="team-two__shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/team-two-shape-1.png)",
                    }}
                  />
                  <div className="team-two__name-box">
                    <h3>
                      <a href="team-details.html">Cameron Williamson</a>
                    </h3>
                    <p>Marketing Coordinator</p>
                  </div>
                  <p className="team-two__text">
                    Car service is essential for maintaining the performance and
                    longevity of your
                    <br />
                    vehicle. From oil changes Car service is essential for
                    maintaining
                  </p>
                </div>
                <div className="hover-item__box">
                  <img
                    src="assets/images/team/team-2-3.jpg"
                    alt="Image"
                    className="hover-item__box-img"
                  />
                  <div className="team-two__arrow">
                    <a href="team-details.html">
                      <span className="icon-arrow-up-right" />
                    </a>
                  </div>
                </div>
              </li> */}
              {/* <li className="hover-item wow fadeInRight" data-wow-delay="400ms">
                <div className="team-two__single">
                  <div
                    className="team-two__shape-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/team-two-shape-1.png)",
                    }}
                  />
                  <div className="team-two__name-box">
                    <h3>
                      <a href="team-details.html">Dianne Russell</a>
                    </h3>
                    <p>President of Sales</p>
                  </div>
                  <p className="team-two__text">
                    Car service is essential for maintaining the performance and
                    longevity of your
                    <br />
                    vehicle. From oil changes Car service is essential for
                    maintaining
                  </p>
                </div>
                <div className="hover-item__box">
                  <img
                    src="assets/images/team/team-2-4.jpg"
                    alt="Image"
                    className="hover-item__box-img"
                  />
                  <div className="team-two__arrow">
                    <a href="team-details.html">
                      <span className="icon-arrow-up-right" />
                    </a>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cta;
