import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Review = () => {
  // Configuration options for the carousel
  const options = {
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 5
      }
    }
  };

  return (
    <section className="brand-one">
      <div className="container">
        <div className="brand-one__inner">
          <OwlCarousel className="brand-one__carousel owl-theme" {...options}>
            <div className="item">
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="/public/brand/brand-1-1.png" alt="Brand Logo 1" />
                </div>
              </div>
            </div>
            
            <div className="item">
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="/public/brand/brand-1-2.png" alt="Brand Logo 2" />
                </div>
              </div>
            </div>
            
            <div className="item">
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="/public/brand/brand-1-3.png" alt="Brand Logo 3" />
                </div>
              </div>
            </div>
            
            <div className="item">
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="/public/brand/brand-1-4.png" alt="Brand Logo 4" />
                </div>
              </div>
            </div>
            
            <div className="item">
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="/public/brand/brand-1-5.png" alt="Brand Logo 5" />
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Review;