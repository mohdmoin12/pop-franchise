import React, { useEffect } from "react";

const Gallery = () => {
  // Initialize Bootstrap carousel when component mounts
  useEffect(() => {
    // Make sure the carousel is initialized after component is mounted
    if (typeof window !== 'undefined' && typeof window.bootstrap !== 'undefined') {
      const carouselElement = document.querySelector('#mobileGalleryCarousel');
      if (carouselElement) {
        new window.bootstrap.Carousel(carouselElement, {
          interval: 3000,
          wrap: true
        });
      }
    }
  }, []);

  return (
    <div id="gallery-section">
      <section className="gallery-one py-5">
        <div className="container">
          <div className="gallery-one__top mb-4">
            <div className="row">
              <div className="col-lg-7">
                <div className="gallery-one__top-left">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-boxxx">
                      <span className="text-black">Our Stores in Action</span>
                    </div>
                    <h2 className="text-black text-start">
                      Step inside the world of Pop Phones!
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
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

          {/* Desktop Gallery - Hidden on mobile */}
          <div className="gallery-one__bottom d-none d-md-block">
            <div className="row g-3">
              <div className="col-md-4">
                <div className="gallery-one__single">
                  <div className="gallery-one__img-box">
                    <div className="gallery-one__img">
                      <img src="/resources/g1.jpeg" alt="Pop Phones Store" className="img-fluid rounded" />
                    </div>
                    <div className="gallery-one__icon">
                      <a className="img-popup" href="/resources/g1.jpeg">
                        <span className="icon-arrow-up-right-two"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gallery-one__single">
                  <div className="gallery-one__img-box">
                    <div className="gallery-one__img">
                      <img src="/resources/g2.jpg" alt="Pop Phones Store" className="img-fluid rounded" />
                    </div>
                    <div className="gallery-one__icon">
                      <a className="img-popup" href="/resources/g2.jpg">
                        <span className="icon-arrow-up-right-two"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gallery-one__single">
                  <div className="gallery-one__img-box">
                    <div className="gallery-one__img">
                      <img src="/resources/g2.jpg" alt="Pop Phones Store" className="img-fluid rounded" />
                    </div>
                    <div className="gallery-one__icon">
                      <a className="img-popup" href="/resources/g2.jpg">
                        <span className="icon-arrow-up-right-two"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gallery-one__single">
                  <div className="gallery-one__img-box">
                    <div className="gallery-one__img">
                      <img src="/resources/g4.jpg" alt="Pop Phones Store" className="img-fluid rounded" />
                    </div>
                    <div className="gallery-one__icon">
                      <a className="img-popup" href="/resources/g4.jpg">
                        <span className="icon-arrow-up-right-two"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gallery-one__single">
                  <div className="gallery-one__img-box">
                    <div className="gallery-one__img">
                      <img src="/resources/g3.jpg" alt="Pop Phones Store" className="img-fluid rounded" />
                    </div>
                    <div className="gallery-one__icon">
                      <a className="img-popup" href="/resources/g3.jpg">
                        <span className="icon-arrow-up-right-two"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gallery-one__single">
                  <div className="gallery-one__img-box">
                    <div className="gallery-one__img">
                      <img src="/resources/g3.jpg" alt="Pop Phones Store" className="img-fluid rounded" />
                    </div>
                    <div className="gallery-one__icon">
                      <a className="img-popup" href="/resources/g3.jpg">
                        <span className="icon-arrow-up-right-two"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Carousel - Visible only on mobile */}
          <div className="d-block d-md-none">
            <div id="mobileGalleryCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/resources/g1.jpeg" className="d-block w-100 rounded" alt="Pop Phones Store" />
                </div>
                <div className="carousel-item">
                  <img src="/resources/g2.jpg" className="d-block w-100 rounded" alt="Pop Phones Store" />
                </div>
                <div className="carousel-item">
                  <img src="/resources/g2.jpg" className="d-block w-100 rounded" alt="Pop Phones Store" />
                </div>
                <div className="carousel-item">
                  <img src="/resources/g4.jpg" className="d-block w-100 rounded" alt="Pop Phones Store" />
                </div>
                <div className="carousel-item">
                  <img src="/resources/g3.jpg" className="d-block w-100 rounded" alt="Pop Phones Store" />
                </div>
                <div className="carousel-item">
                  <img src="/resources/g3.jpg" className="d-block w-100 rounded" alt="Pop Phones Store" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#mobileGalleryCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#mobileGalleryCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#mobileGalleryCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#mobileGalleryCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#mobileGalleryCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#mobileGalleryCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#mobileGalleryCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#mobileGalleryCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;