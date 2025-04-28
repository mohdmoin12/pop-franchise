import React from "react";

const Gallery = () => {
  return (
    <div>
      <section className="gallery-one">
        <div className="container">
          <div className="gallery-one__top">
            <div className="row">
              <div className="col-xl-7">
                <div className="gallery-one__top-left">
                  <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-boxx">
                      <span className="text-black">Our Stores in Action</span>
                    </div>
                    <h2 className="text-black text-start">
                      Step inside the world of Pop Phones!
                      <br />
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="text-black">
                  <p>
                    From vibrant store designs to happy customers and expert
                    repairs, our gallery showcases the energy, professionalism,
                    and community spirit that define every Pop Phones location.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery-one__bottom">
            <div className="row masonary-layout">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="gallery-one__single">
                  <div className="gallery-one__img-box">
                    <div className="gallery-one__img">
                      <img src="/resources/g1.jpeg" alt="" />
                    </div>
                    <div className="gallery-one__icon">
                      <a className="img-popup" href="/resources/g1.jpeg">
                        <span className="icon-arrow-up-right-two" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="gallery-one__single">
                  <div className="gallery-one__img-box">
                    <div className="gallery-one__img">
                      <img src="/resources/g2.jpg" alt="" />
                    </div>
                    <div className="gallery-one__icon">
                      <a className="img-popup" href="/resources/g2.jpg">
                        <span className="icon-arrow-up-right-two" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="gallery-one__single">
                  <div className="gallery-one__img-box">
                    <div className="gallery-one__img">
                      <img src="/resources/g2.jpg" alt="" />
                    </div>
                    <div className="gallery-one__icon">
                      <a className="img-popup" href="/resources/g2.jpg">
                        <span className="icon-arrow-up-right-two" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="gallery-one__single">
                  <div className="gallery-one__img-box">
                    <div className="gallery-one__img">
                      <img src="/resources/g4.jpg" alt="" />
                    </div>
                    <div className="gallery-one__icon">
                      <a className="img-popup" href="/resources/g4.jpg">
                        <span className="icon-arrow-up-right-two" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="500ms"
              >
                <div className="gallery-one__single">
                  <div className="gallery-one__img-box">
                    <div className="gallery-one__img">
                      <img src="/resources/g3.jpg" alt="" />
                    </div>
                    <div className="gallery-one__icon">
                      <a className="img-popup" href="/resources/g3.jpg">
                        <span className="icon-arrow-up-right-two" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="gallery-one__single">
                  <div className="gallery-one__img-box">
                    <div className="gallery-one__img">
                      <img src="/resources/g3.jpg" alt="" />
                    </div>
                    <div className="gallery-one__icon">
                      <a className="img-popup" href="/resources/g3.jpg">
                        <span className="icon-arrow-up-right-two" />
                      </a>
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

export default Gallery;
