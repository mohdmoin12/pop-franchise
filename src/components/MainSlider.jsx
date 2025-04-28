import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const MainSlider = () => {
  return (
    <section className="main-slider">
      <div className="main-slider__wrap">
        <OwlCarousel
          className="owl-theme main-slider__carousel"
          // loop
          margin={10}
          nav={false} 
          autoplayTimeout={3500}
          items={1}
          dots={false}
        >
          {/* Slide 1 */}
          <div className="item">
            <div className="main-slider__shape-1">
              {/* <img src="/shapes/main-slider-shape-1.png" alt="" /> */}
            </div>
            <div className="container">
              <div className="main-slider__content">
                {/* Left Side Text */}
                <div className="main-slider__text-content">
                  <h2 className="main-slider__title">
                    OWN A<br />
                    <span className="highlight">POP PHONES</span>
                    <br />
                    FRANCHISE
                  </h2>

                  <p className="main-slider__text">
                    Be Part of One of Australia's Fastest Growing
                    <br />
                    Mobile Phone & Accessories Brands
                  </p>
                  <div className="main-slider__btn-and-video-box">
                    <div className="main-slider__btn-box">
                      <a href="contact.html" className="thm-btn">
                      Join POP Phones
                        <span className="icon-arrow-up-right" />
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
                {/* { Right Side Image  */}
                <div className="main-slider__img">
                  <img
                    src="/resources/mainimage.png"
                    alt="Slide 1"
                    className="float-bob-y"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          {/* <div className="item">
            <div className="main-slider__shape-1">
              <img src="/shapes/main-slider-shape-1.png" alt="" />
            </div>
            <div className="container">
              <div className="main-slider__content">
                <div className="main-slider__text-content">
                  <h2 className="main-slider__title">
                    <br />
                    h
                    <br />
                    <span>h</span>
                  </h2>
                  <p className="main-slider__text">
                    Car service is essential for maintaining the performance and
                    <br />
                    longevity of your vehicle. From oil changes Car service
                  </p>
                  <div className="main-slider__btn-and-video-box">
                    <div className="main-slider__btn-box">
                      <a href="contact.html" className="thm-btn">
                        Get Started
                        <span className="icon-arrow-up-right" />
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
                {/* Right Side Image */}
                {/* <div className="main-slider__img">
                  <img
                    src="/resources/main-slider-img-2.jpg"
                    alt="Slide 2"
                    className="float-bob-y"
                  />
                </div>
              </div>
            </div>
          </div> */} 

          {/* Slide 3 */}
          {/* <div className="item">
            <div className="main-slider__shape-1">
              <img src="/shapes/main-slider-shape-1.png" alt="" />
            </div>
            <div className="container">
              <div className="main-slider__content">
                <div className="main-slider__text-content">
                  <h2 className="main-slider__title">
                    <br />
                    hlo <br />
                    <span>hlo</span>
                  </h2>
                  <p className="main-slider__text">
                    Car service is essential for maintaining the performance and
                    <br />
                    longevity of your vehicle. From oil changes Car service
                  </p>
                  <div className="main-slider__btn-and-video-box">
                    <div className="main-slider__btn-box">
                      <a href="contact.html" className="thm-btn">
                        Get Started
                        <span className="icon-arrow-up-right" />
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
                {/* Right Side Image */}
                {/* <div className="main-slider__img">
                  <img
                    src="/resources/main-slider-img-3.jpg"
                    alt="Slide 3"
                    {/* className="float-bob-y" */}
                  {/* /> */}
                {/* </div>
              </div>
            </div> */}
          {/* </div> * */}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default MainSlider;
