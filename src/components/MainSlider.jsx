import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// Import Bootstrap CSS if not already imported in your main file
// import 'bootstrap/dist/css/bootstrap.min.css';

const MainSlider = () => {
  return (
    <section className="main-slider">
      <div className="main-slider__wrap">
        <OwlCarousel
          className="owl-theme main-slider__carousel"
          margin={10}
          nav={false} 
          autoplayTimeout={3500}
          items={1}
          dots={false}
        >
          {/* Slide 1 */}
          <div className="item">
            <div className="main-slider__shape-1">
              {/* Bootstrap responsive classes for shape */}
              <div className="d-none d-lg-block">
                {/* <img src="/shapes/main-slider-shape-1.png" alt="" className="img-fluid" /> */}
              </div>
            </div>
            <div className="container">
              <div className="main-slider__content row align-items-center">
                {/* Left Side Text - Bootstrap responsive grid */}
                <div className="main-slider__text-content col-12 col-md-6 mb-4 mb-md-0">
                  <h2 className="main-slider__title">
                    OWN A<br />
                    <span className="highlight">POP PHONES</span>
                    <br />
                    FRANCHISE
                  </h2>

                  <p className="main-slider__text d-none d-sm-block">
                    Be Part of One of Australia's Fastest Growing
                    <br className="d-none d-lg-block" />
                    Mobile Phone & Accessories Brands
                  </p>
                  <p className="main-slider__text d-block d-sm-none">
                    Be Part of One of Australia's Fastest Growing
                    Mobile Phone & Accessories Brands
                  </p>
                  <div className="main-slider__btn-and-video-box d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                    <div className="main-slider__btn-box me-sm-3 mb-3 mb-sm-0">
                      <a href="contact.html" className="thm-btn btn btn-primary">
                        Join POP Phones
                        <span className="icon-arrow-up-right ms-2" />
                      </a>
                    </div>
                    <div className="main-slider__video-link">
                      <a
                        href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                        className="video-popup"
                      >
                        <div className="main-slider__video-icon">
                          <span className="icon-video" />
                          <i className="ripple" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Right Side Image - Bootstrap responsive grid */}
                <div className="main-slider__img col-12 col-md-6 text-center text-md-end">
                  <img
                    src="/resources/mainimage.png"
                    alt="Slide 1"
                    className="float-bob-y img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 - Commented out in original, but updating with Bootstrap classes */}
          {/* <div className="item">
            <div className="main-slider__shape-1">
              <div className="d-none d-lg-block">
                <img src="/shapes/main-slider-shape-1.png" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="container">
              <div className="main-slider__content row align-items-center">
                <div className="main-slider__text-content col-12 col-md-6 mb-4 mb-md-0">
                  <h2 className="main-slider__title">
                    <br />
                    h
                    <br />
                    <span>h</span>
                  </h2>
                  <p className="main-slider__text d-none d-sm-block">
                    Car service is essential for maintaining the performance and
                    <br className="d-none d-lg-block" />
                    longevity of your vehicle. From oil changes Car service
                  </p>
                  <p className="main-slider__text d-block d-sm-none">
                    Car service is essential for maintaining the performance and
                    longevity of your vehicle. From oil changes Car service
                  </p>
                  <div className="main-slider__btn-and-video-box d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                    <div className="main-slider__btn-box me-sm-3 mb-3 mb-sm-0">
                      <a href="contact.html" className="thm-btn btn btn-primary">
                        Get Started
                        <span className="icon-arrow-up-right ms-2" />
                      </a>
                    </div>
                    <div className="main-slider__video-link">
                      <a
                        href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                        className="video-popup"
                      >
                        <div className="main-slider__video-icon">
                          <span className="icon-video" />
                          <i className="ripple" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="main-slider__img col-12 col-md-6 text-center text-md-end">
                  <img
                    src="/resources/main-slider-img-2.jpg"
                    alt="Slide 2"
                    className="float-bob-y img-fluid"
                  />
                </div>
              </div>
            </div>
          </div> */}

          {/* Slide 3 - Commented out in original, but updating with Bootstrap classes */}
          {/* <div className="item">
            <div className="main-slider__shape-1">
              <div className="d-none d-lg-block">
                <img src="/shapes/main-slider-shape-1.png" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="container">
              <div className="main-slider__content row align-items-center">
                <div className="main-slider__text-content col-12 col-md-6 mb-4 mb-md-0">
                  <h2 className="main-slider__title">
                    <br />
                    hlo <br />
                    <span>hlo</span>
                  </h2>
                  <p className="main-slider__text d-none d-sm-block">
                    Car service is essential for maintaining the performance and
                    <br className="d-none d-lg-block" />
                    longevity of your vehicle. From oil changes Car service
                  </p>
                  <p className="main-slider__text d-block d-sm-none">
                    Car service is essential for maintaining the performance and
                    longevity of your vehicle. From oil changes Car service
                  </p>
                  <div className="main-slider__btn-and-video-box d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                    <div className="main-slider__btn-box me-sm-3 mb-3 mb-sm-0">
                      <a href="contact.html" className="thm-btn btn btn-primary">
                        Get Started
                        <span className="icon-arrow-up-right ms-2" />
                      </a>
                    </div>
                    <div className="main-slider__video-link">
                      <a
                        href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                        className="video-popup"
                      >
                        <div className="main-slider__video-icon">
                          <span className="icon-video" />
                          <i className="ripple" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="main-slider__img col-12 col-md-6 text-center text-md-end">
                  <img
                    src="/resources/main-slider-img-3.jpg"
                    alt="Slide 3"
                    className="float-bob-y img-fluid"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default MainSlider;