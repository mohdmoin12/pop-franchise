import React from "react";

const Services = () => {
  return (
    <div>
      <section className="services-one">
        <div className="services-one__inner">
          <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">Latest Service</span>
              </div>
              <h2 className="section-title__title title-animation">
                Your Trusted Car Provider <br />
                Keeping Your Vehicle
              </h2>
            </div>
            <div className="row">
              {/*Services One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-broken-car" />
                    <div className="services-one__icon-shape-1" />
                    <div className="services-one__icon-shape-2" />
                  </div>
                  <h3 className="services-one__title sec text-white">
                    <a href="careful-car-service-station.html "
                    className="text-white">
                      Transformation Advising
                    </a>
                  </h3>
                  <p className="services-one__text sec-heading">
                    Car service is essential for maintaining the performance and
                    longevity of your vehicle. From oil changes Car service
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
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-brake-disc" />
                    <div className="services-one__icon-shape-1" />
                    <div className="services-one__icon-shape-2" />
                  </div>
                  <h3 className="services-one__title sec text-white">
                    <a
                      href="easy-drive-maintenance.html"
                      className="text-white"
                    >
                      Easy Drive Maintenance
                    </a>
                  </h3>

                  <p className="services-one__text sec-heading">
                    Car service is essential for maintaining the performance and
                    longevity of your vehicle. From oil changes Car service
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
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-chassis" />
                    <div className="services-one__icon-shape-1" />
                    <div className="services-one__icon-shape-2" />
                  </div>
                  <h3 className="services-one__title sec text-white">
                    <a href="elite-auto-services.html"
                    className="text-white">Elite Auto Services</a>
                  </h3>
                  <p className="services-one__text sec-heading">
                    Car service is essential for maintaining the performance and
                    longevity of your vehicle. From oil changes Car service
                  </p>
                  <div className="services-one__single-shape-1" />
                  <div className="services-one__single-shape-2" />
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
