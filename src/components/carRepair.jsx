import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const CarRepair = () => {
  const [selectedState, setSelectedState] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);
  
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  // CSS for white placeholders
  const whiteplaceholderStyle = `
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: white !important;
      opacity: 1; /* Firefox */
    }
    
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: white !important;
    }
    
    ::-ms-input-placeholder { /* Microsoft Edge */
      color: white !important;
    }
  `;

  return (
    <div id="join-pop-phones">
      {/* Add style tag for placeholder colors */}
      <style>{whiteplaceholderStyle}</style>
      
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
                    <h3>
                      Own Your Pop Phones Store <br />
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
                          <input
                            type="text"
                            name="FirstName"
                            placeholder="First Name"
                            required=""
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-one__input-box">
                          <input
                            type="text"
                            name="LastName"
                            placeholder="Last Name"
                            required=""
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-one__input-box">
                          <input
                            type="email"
                            name="Email"
                            placeholder="Email Address"
                            required=""
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="contact-one__input-box">
                          <input
                            type="text"
                            name="MobileNumber"
                            placeholder="Mobile Number"
                            required=""
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12">
                        <div className="contact-one__input-box">
                          <div className="select-box">
                            <select 
                              className="form-select" 
                              value={selectedState} 
                              onChange={handleStateChange}
                              name="state"
                              style={{
                                height: '60px',
                                paddingLeft: '30px',
                                paddingRight: '30px',
                                border: '1px solid var(--crank-white)',
                                borderRadius: '20px',
                                color: 'white', // Changed to solid white
                                backgroundColor: 'transparent'
                              }}
                            >
                              <option value="" disabled style={{color: 'white'}}>Select State</option>
                              <option value="AL">ACT</option>
                              <option value="AK">NSW</option>
                              <option value="AZ">NT</option>
                              <option value="AR">QLD</option>
                              <option value="CA">SA</option>
                              <option value="CO">TAS</option>
                              <option value="CT">VIC</option>
                              <option value="DE">WA</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="contact-one__input-box captcha-box my-3">
                          {/* Google reCAPTCHA component */}
                          <ReCAPTCHA
                            sitekey="6Le_TycrAAAAAFAkODXYEBvjBl-DrhQyJVRxqatO" // Replace with your actual Google reCAPTCHA site key
                            onChange={handleCaptchaChange}
                          />
                        </div>
                      </div>
                      <div className="col-xl-12 pb-5 pt-3">
                        <div className="contact-one__btn-box">
                          <button 
                            type="submit" 
                            className="thm-btn contact-one__btn"
                            disabled={!captchaValue} // Disable submit button until captcha is verified
                          >
                            Submit
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
              <div className="contact-one__right h-100 position-relative">
                <div className="contact-one__img h-100 w-100 overflow-hidden rounded-5">
                  <img 
                    src="/resources/repair.jpg" 
                    alt="Car Repair" 
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="contact-one__img-shape-1 position-absolute">
                    <img
                      src="/shapes/contact-one-img-shape-1.png"
                      alt=""
                      className="img-fluid"
                    />
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

export default CarRepair;