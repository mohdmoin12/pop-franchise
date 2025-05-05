import React from 'react'

const Opportunity = () => {
  return (
    <div id="opportunity-section">
          <section className="services-one mt-4">
        <div className="services-one__inner">
          <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1 mt-4">
              <div className="section-title__tagline-box">
                {/* <span className="text-black">Why Us? </span> */}
              </div>
              <h2 className="text-black">
              Available Opportunities <br />
              </h2>
            </div>
            <div className="row mt-4">
              {/* Previous commented out code remains the same */}
              <div className="d-flex justify-content-center w-100">
                <div
                  className="col-xl-4 col-lg-4 wow fadeInLeft mx-2"
                  data-wow-delay="300ms"
                >
                  <div className="services-one__single h-100">
                    <div className="">
                      {/* <img src="/customer-service.png" alt="Training and Support" width="64" height="64" /> */}
                      <div className="services-one__icon-shape-1" />
                      <div className="services-one__icon-shape-2" />
                    </div>
                    <h3 className="services-one__title sec text-white">
                      <a href="elite-auto-services.html"
                        className="text-black">Adelaide City</a>
                    </h3>
                    <p className="services-one__text sec-heading">
                    Position your business in the heart of Adelaide's bustling
                    CBD, a prime location with high foot traffic and a diverse
                    customer base seeking quality mobile solutions.
                    </p>
                    <div className="services-one__single-shape-1" />
                    <div className="services-one__single-shape-2" />
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 wow fadeInRight mx-2 mt-md-0 mt-4"
                  data-wow-delay="300ms"
                >
                  <div className="services-one__single h-100">
                    <div className="">
                      {/* <img src="/leadership-development.png" alt="Marketing and Digital Support" width="64" height="64" /> */}
                      <div className="services-one__icon-shape-1" />
                      <div className="services-one__icon-shape-2" />
                    </div>
                    <h3 className="services-one__title sec text-white">
                      <a href="elite-auto-services.html"
                        className="text-black">Parabanks</a>
                    </h3>
                    <p className="services-one__text sec-heading">
                    Establish your franchise in the thriving Parabanks Shopping
                    Centre, a central retail hub in Salisbury known for its
                    strong community engagement and consistent shopper turnout.
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
  )
}

export default Opportunity