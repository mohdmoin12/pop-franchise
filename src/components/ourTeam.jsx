import React from 'react'

const OurTeam = () => {
  return (
    <div>
     <section className="team-one">
  <div className="container">
    <div className="section-title text-center sec-title-animation animation-style1">
      <div className="section-title__tagline-box">
        <span className="section-title__tagline">Our Team</span>
      </div>
      <h2 className="section-title__title title-animation">
        They Our Best Team <br />
        Member Ever
      </h2>
    </div>
    <div className="row">
      {/*Team One Single Start */}
      <div
        className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft"
        data-wow-delay="100ms"
      >
        <div className="team-one__single">
          <div className="team-one__img">
            <img src="assets/images/team/team-1-1.jpg" alt="" />
          </div>
          <div className="team-one__content">
            <div className="team-one__plus-and-social">
              <div className="team-one__plus">
                <span className="icon-arrow-up-right" />
              </div>
              <div className="team-one__social">
                <a href="#">
                  <span className="icon-pintarest" />
                </a>
                <a href="#">
                  <span className="icon-linkedin-in-two" />
                </a>
                <a href="#">
                  <span className="icon-Vector" />
                </a>
                <a href="#">
                  <span className="icon-facebook-f" />
                </a>
              </div>
            </div>
            <div className="team-one__title-box">
              <h4 className="team-one__title">
                <a href="team-details.html">Darlene Robertson</a>
              </h4>
              <p className="team-one__sub-title">Nursing Assistant</p>
            </div>
          </div>
        </div>
      </div>
      {/*Team One Single End */}
      {/*Team One Single Start */}
      <div
        className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
        data-wow-delay="200ms"
      >
        <div className="team-one__single">
          <div className="team-one__img">
            <img src="assets/images/team/team-1-2.jpg" alt="" />
          </div>
          <div className="team-one__content">
            <div className="team-one__plus-and-social">
              <div className="team-one__plus">
                <span className="icon-arrow-up-right" />
              </div>
              <div className="team-one__social">
                <a href="#">
                  <span className="icon-pintarest" />
                </a>
                <a href="#">
                  <span className="icon-linkedin-in-two" />
                </a>
                <a href="#">
                  <span className="icon-Vector" />
                </a>
                <a href="#">
                  <span className="icon-facebook-f" />
                </a>
              </div>
            </div>
            <div className="team-one__title-box">
              <h4 className="team-one__title">
                <a href="team-details.html">Dianne Russell</a>
              </h4>
              <p className="team-one__sub-title">President of Sales</p>
            </div>
          </div>
        </div>
      </div>
      {/*Team One Single End */}
      {/*Team One Single Start */}
      <div
        className="col-xl-4 col-lg-4 col-md-6 wow fadeInRight"
        data-wow-delay="300ms"
      >
        <div className="team-one__single">
          <div className="team-one__img">
            <img src="assets/images/team/team-1-3.jpg" alt="" />
          </div>
          <div className="team-one__content">
            <div className="team-one__plus-and-social">
              <div className="team-one__plus">
                <span className="icon-arrow-up-right" />
              </div>
              <div className="team-one__social">
                <a href="#">
                  <span className="icon-pintarest" />
                </a>
                <a href="#">
                  <span className="icon-linkedin-in-two" />
                </a>
                <a href="#">
                  <span className="icon-Vector" />
                </a>
                <a href="#">
                  <span className="icon-facebook-f" />
                </a>
              </div>
            </div>
            <div className="team-one__title-box">
              <h4 className="team-one__title">
                <a href="team-details.html">Leslie Alexander</a>
              </h4>
              <p className="team-one__sub-title">Medical Assistant</p>
            </div>
          </div>
        </div>
      </div>
      {/*Team One Single End */}
    </div>
  </div>
</section>

    </div>
  )
}

export default OurTeam
