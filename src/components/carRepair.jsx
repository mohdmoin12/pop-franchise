import React from 'react'

const CarRepair = () => {
  return (
    <div>
 <section className="contact-one">
  <div className="container">
    <div className="row">
      <div
        className="col-xl-6 wow slideInLeft"
        data-wow-delay="100ms"
        data-wow-duration="2500ms"
      >
        <div className="contact-one__left">
          <div className="contact-one__left-content">
            <div className="contact-one__shape-1" />
            <div className="contact-one__shape-2" />
            <div className="contact-one__title-box">
              <p>Car Repair</p>
              <h3>
                Expert Service for Your <br />
                best Vehicle
              </h3>
            </div>
            <form
              className="contact-form-validated contact-one__form"
              action="assets/inc/sendemail.php"
              method="post"
              noValidate="novalidate"
            >
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="contact-one__input-box">
                    <div className="select-box">
                      <select className="wide">
                        <option data-display="Make">Make</option>
                        <option value={1}>Make 01</option>
                        <option value={2}>Make 02</option>
                        <option value={3}>Make 03</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="contact-one__input-box">
                    <input
                      type="text"
                      name="Model"
                      placeholder="Model"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="contact-one__input-box">
                    <input
                      type="text"
                      placeholder="Year"
                      name="date"
                      id="datepicker"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="contact-one__input-box">
                    <input
                      type="text"
                      name="Repair"
                      placeholder="Repair Needed"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="contact-one__btn-box">
                    <button type="submit" className="thm-btn contact-one__btn">
                      Get Estimate
                      <span className="icon-arrow-up-right" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="result" />
          </div>
        </div>
      </div>
      <div
        className="col-xl-6 wow slideInRight"
        data-wow-delay="100ms"
        data-wow-duration="2500ms"
      >
        <div className="contact-one__right">
          <div className="contact-one__img">
            <img src="/resources/contact-one-img-1.png" alt="" />
            <div className="contact-one__img-shape-1">
              <img src="images/shapes/contact-one-img-shape-1.png" alt="" />
            </div>
            <div className="contact-one__experience-box">
              <div className="contact-one__experience">
                <div className="contact-one__experience-icon-box">
                  <div className="contact-one__experience-icon">
                    <span className="icon-trophy" />
                  </div>
                  {"{"}/*{" "}
                  <div className="contact-one__experience-count-box">
                    <h3 className="odometer" data-count={10}>
                      00
                    </h3>
                    <span>+</span>
                  </div>{" "}
                  */{"}"}
                </div>
                <p className="contact-one__experience-text">
                  Years Of Experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default CarRepair