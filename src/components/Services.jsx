import React from "react";

const Services = () => {
  return (
    <div id="services-section">
      <section className="services-one">
        <div className="services-one__inner">
          <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
              <div className="section-title__tagline-box">
                <span className="text-black">Why Us? </span>
              </div>
              <h2 className="text-black">
                Why Franchise with Pop Phones? <br />
              </h2>
            </div>
            <div className="row">
              {/*Services One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="services-one__single h-100">
                  <div className="services-one__icon">
                    <span className="icon-broken-car" />
                    <div className="services-one__icon-shape-1" />
                    <div className="services-one__icon-shape-2" />
                  </div>
                  <h3 className="services-one__title sec text-white">
                    <a href="careful-car-service-station.html"
                      className="text-black">
                      Established Brand
                    </a>
                  </h3>
                  <p className="services-one__text sec-heading">
                    Leverage the reputation of a well-known, customer-loved brand in the mobile industry.
                  </p>
                  <div className="services-one__single-shape-1" />
                  <div className="services-one__single-shape-2" />
                </div>
              </div>
              {/*Services One Single End*/}
              {/*Services One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="services-one__single h-100">
                  <div className="services-one__icon">
                    <span className="icon-brake-disc" />
                    <div className="services-one__icon-shape-1" />
                    <div className="services-one__icon-shape-2" />
                  </div>
                  <h3 className="services-one__title sec text-white">
                    <a
                      href="easy-drive-maintenance.html"
                      className="text-black"
                    >
                      Proven Business Model
                    </a>
                  </h3>

                  <p className="services-one__text sec-heading">
                    With over 18 locations thriving across Australia, our system is built for success.
                  </p>
                  <div className="services-one__single-shape-1" />
                  <div className="services-one__single-shape-2" />
                </div>
              </div>
              {/*Services One Single End*/}
              {/*Services One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="services-one__single h-100">
                  <div className="services-one__icon">
                    <span className="icon-chassis" />
                    <div className="services-one__icon-shape-1" />
                    <div className="services-one__icon-shape-2" />
                  </div>
                  <h3 className="services-one__title sec text-white">
                    <a href="elite-auto-services.html"
                      className="text-black">High-Demand Industry</a>
                  </h3>
                  <p className="services-one__text sec-heading">
                    Stay ahead in a booming market of smartphones, accessories, and tech repairs.
                  </p>
                  <div className="services-one__single-shape-1" />
                  <div className="services-one__single-shape-2" />
                </div>
              </div>
              <div className="d-flex justify-content-center w-100 mt-4">
                <div
                  className="col-xl-4 col-lg-4 wow fadeInLeft mx-2"
                  data-wow-delay="300ms"
                >
                  <div className="services-one__single h-100">
                    <div className="services-one__icon">
                      <span className="icon-chassis" />
                      <div className="services-one__icon-shape-1" />
                      <div className="services-one__icon-shape-2" />
                    </div>
                    <h3 className="services-one__title sec text-white">
                      <a href="elite-auto-services.html"
                        className="text-black">Full Training & Ongoing Support</a>
                    </h3>
                    <p className="services-one__text sec-heading">
                      From store setup to daily operations, our expert team is with you every step of the way.
                    </p>
                    <div className="services-one__single-shape-1" />
                    <div className="services-one__single-shape-2" />
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 wow fadeInRight mx-2"
                  data-wow-delay="300ms"
                >
                  <div className="services-one__single h-100">
                    <div className="services-one__icon">
                      <span className="icon-chassis" />
                      <div className="services-one__icon-shape-1" />
                      <div className="services-one__icon-shape-2" />
                    </div>
                    <h3 className="services-one__title sec text-white">
                      <a href="elite-auto-services.html"
                        className="text-black">Marketing & Digital Support</a>
                    </h3>
                    <p className="services-one__text sec-heading">
                      Benefit from national-level promotions, a powerful online presence, and data-driven marketing strategies.
                    </p>
                    <div className="services-one__single-shape-1" />
                    <div className="services-one__single-shape-2" />
                  </div>
                </div>
              </div>
              {/*Services One Single End*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;