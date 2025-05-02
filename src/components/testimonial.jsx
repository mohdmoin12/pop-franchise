import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// Import FontAwesome if not already imported in your main file
// import '@fortawesome/fontawesome-free/css/all.min.css';

const Testimonial = () => {
  // Owl Carousel settings
  const options = {
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 500,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      992: { items: 1 },
      1200: { items: 1 },
    },
  };

  return (
    <div>
      <section className="testimonial-one">
        <div className="testimonial-one__wrap">
          <div className="container">
            <div className="section-title text-left sec-title-animation animation-style2">
              <div className="section-title__tagline-box">
                {/* <span className="section-title__tagline">TESTIMONIAL</span> */}
              </div>
              <h2 className="section-title__title title-animation">
                Franchise Testimonials
              </h2>
            </div>

            {/* Using react-owl-carousel component */}
            <OwlCarousel
              className="testimonial-one__carousel owl-theme"
              {...options}
            >
              {/* Testimonial One Single Start */}
              <div className="item">
                <div className="testimonial-one__single">
                  {/* <div className="testimonial-one__img">
                    <img src="/testimonial/testimonial-1-1.jpg" alt="" />
                  </div> */}
                  <div className="testimonial-one__client-info">
                    <h3 className="testimonial-one__client-name">
                      <a href="testimonials.html">Arlene McCoy</a>
                    </h3>
                    <p className="testimonial-one__client-text">
                      Seaford & The Grove,SA
                    </p>
                  </div>
                  <p className="testimonial-one__text">
                    Pop Phones gave me the structure I needed to succeed in
                    retail. As a first-time business owner, I was impressed by
                    the systems, the training, and the ongoing support. I now
                    run two successful stores and have built a team I trust. I
                    love that I can focus on growing the business while also
                    enjoying time with my family.
                  </p>
                  <div className="testimonial-one__quote">
                    <span className="fas fa-quote-right" />
                  </div>
                </div>
              </div>
              {/* Testimonial One Single End */}

              {/* Testimonial One Single Start */}
              <div className="item">
                <div className="testimonial-one__single">
                  {/* <div className="testimonial-one__img">
                    <img src="/testimonial/testimonial-1-2.jpg" alt="" />
                  </div> */}
                  <div className="testimonial-one__client-info">
                    <h3 className="testimonial-one__client-name">
                      <a href="testimonials.html">Chintan Shsh, Franchisee</a>
                    </h3>
                    <p className="testimonial-one__client-text">Parabanks,SA</p>
                  </div>
                  <p className="testimonial-one__text">
                    I joined Pop Phones with no prior experience in mobile
                    retail, but the model made everything simple and scalable.
                    The setup was smooth, the head office team was always
                    available, and the marketing support helped me build a solid
                    customer base quickly.
                  </p>
                  <div className="testimonial-one__quote">
                    <span className="fas fa-quote-right" />
                  </div>
                </div>
              </div>
              {/* Testimonial One Single End */}

              {/* Testimonial One Single Start */}
              <div className="item">
                <div className="testimonial-one__single">
                  {/* <div className="testimonial-one__img">
                    <img src="/testimonial/testimonial-1-2.jpg" alt="" />
                  </div> */}
                  <div className="testimonial-one__client-info">
                    <h3 className="testimonial-one__client-name">
                      <a href="testimonials.html">Akbar, Franchisee </a>
                    </h3>
                    <p className="testimonial-one__client-text">
                      Docklands,VIC
                    </p>
                  </div>
                  <p className="testimonial-one__text">
                    One of the best decisions I’ve made was investing in a Pop
                    Phones franchise. I’ve always wanted to be my own boss but
                    with a proven system behind me. From setup to staffing and
                    operations, the support has been fantastic. I now look
                    forward to expanding to more locations in the near future.
                  </p>
                  <div className="testimonial-one__quote">
                    <span className="fas fa-quote-right" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-one__single">
                  {/* <div className="testimonial-one__img">
                    <img src="/testimonial/testimonial-1-2.jpg" alt="" />
                  </div> */}
                  <div className="testimonial-one__client-info">
                    <h3 className="testimonial-one__client-name">
                      <a href="testimonials.html">Sohail, Franchisee </a>
                    </h3>
                    <p className="testimonial-one__client-text">
                      St Agnes & Hollywood,SA
                    </p>
                  </div>
                  <p className="testimonial-one__text">
                    Running a Pop Phones franchise has allowed me to achieve
                    real work-life balance. The systems are easy to follow, and
                    the tech-focused model attracts a constant stream of
                    customers. I love that I'm building something long-term
                    while still having time for my family and community.
                  </p>
                  <div className="testimonial-one__quote">
                    <span className="fas fa-quote-right" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-one__single">
                  {/* <div className="testimonial-one__img">
                    <img src="/testimonial/testimonial-1-2.jpg" alt="" />
                  </div> */}
                  <div className="testimonial-one__client-info">
                    <h3 className="testimonial-one__client-name">
                      <a href="testimonials.html">Sharan, Franchisee  </a>
                    </h3>
                    <p className="testimonial-one__client-text">
                    St Agnes & Hollywood,SA
                    </p>
                  </div>
                  <p className="testimonial-one__text">
                    When I opened my Pop Phones store, I didn’t expect such a
                    smooth onboarding experience. Everything from lease
                    negotiations to store fit-out and training was handled with
                    care. What I appreciate most is the ongoing communication
                    and support — I never feel like I’m doing this alone.
                  </p>
                  <div className="testimonial-one__quote">
                    <span className="fas fa-quote-right" />
                  </div>
                </div>
              </div>
              {/* Testimonial One Single End */}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
