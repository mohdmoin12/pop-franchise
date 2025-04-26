import React, { useState } from "react";

const CarRepair = () => {
  const [captcha, setCaptcha] = useState('nf68Vj');
  const [selectedState, setSelectedState] = useState('');
  
  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setCaptcha(result);
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <div>
      <section className="contact-one">
        <div className="container">
          <div className="row">
            <div 
              className="col-xl-12 wow slideInLeft"
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
                                color: 'rgba(var(--crank-white-rgb), .80)',
                                backgroundColor: 'transparent'
                              }}
                            >
                              <option value="" disabled>Select State</option>
                              <option value="AL">Alabama</option>
                              <option value="AK">Alaska</option>
                              <option value="AZ">Arizona</option>
                              <option value="AR">Arkansas</option>
                              <option value="CA">California</option>
                              <option value="CO">Colorado</option>
                              <option value="CT">Connecticut</option>
                              <option value="DE">Delaware</option>
                              <option value="FL">Florida</option>
                              <option value="GA">Georgia</option>
                              <option value="HI">Hawaii</option>
                              <option value="ID">Idaho</option>
                              <option value="IL">Illinois</option>
                              <option value="IN">Indiana</option>
                              <option value="IA">Iowa</option>
                              <option value="KS">Kansas</option>
                              <option value="KY">Kentucky</option>
                              <option value="LA">Louisiana</option>
                              <option value="ME">Maine</option>
                              <option value="MD">Maryland</option>
                              <option value="MA">Massachusetts</option>
                              <option value="MI">Michigan</option>
                              <option value="MN">Minnesota</option>
                              <option value="MS">Mississippi</option>
                              <option value="MO">Missouri</option>
                              <option value="MT">Montana</option>
                              <option value="NE">Nebraska</option>
                              <option value="NV">Nevada</option>
                              <option value="NH">New Hampshire</option>
                              <option value="NJ">New Jersey</option>
                              <option value="NM">New Mexico</option>
                              <option value="NY">New York</option>
                              <option value="NC">North Carolina</option>
                              <option value="ND">North Dakota</option>
                              <option value="OH">Ohio</option>
                              <option value="OK">Oklahoma</option>
                              <option value="OR">Oregon</option>
                              <option value="PA">Pennsylvania</option>
                              <option value="RI">Rhode Island</option>
                              <option value="SC">South Carolina</option>
                              <option value="SD">South Dakota</option>
                              <option value="TN">Tennessee</option>
                              <option value="TX">Texas</option>
                              <option value="UT">Utah</option>
                              <option value="VT">Vermont</option>
                              <option value="VA">Virginia</option>
                              <option value="WA">Washington</option>
                              <option value="WV">West Virginia</option>
                              <option value="WI">Wisconsin</option>
                              <option value="WY">Wyoming</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="contact-one__input-box captcha-box">
                          <div className="captcha-image border p-2 mb-2 bg-light d-inline-block">
                            <span className="font-monospace fw-bold fs-4 text-decoration-line-through letter-spacing-5">
                              {captcha}
                            </span>
                          </div>
                          <div className="mb-3">
                            <span>Can't read the image? </span>
                            <button 
                              type="button" 
                              onClick={generateCaptcha}
                              className="btn btn-link p-0 border-0 text-primary text-decoration-underline"
                            >
                              click here to refresh
                            </button>
                          </div>
                          <input
                            type="text"
                            name="CaptchaCode"
                            placeholder="Enter your captcha code"
                            required=""
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="contact-one__btn-box">
                          <button type="submit" className="thm-btn contact-one__btn">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarRepair;