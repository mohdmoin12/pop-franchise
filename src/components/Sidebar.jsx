import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="xs-sidebar-group info-group info-sidebar">
        <div className="xs-overlay xs-bg-black" />
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <a href="#" className="close-side-widget">
                X
              </a>
            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-info-contents">
                <div className="content-inner">
                  <div className="logo">
                    <a href="index.html">
                      <img src="/resources/logo-1.png" alt="" />
                    </a>
                  </div>
                  <div className="content-box">
                    <h4>About Us</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur elit, sed do
                      eiusmod tempor incididunt ut labore et magna aliqua. Ut
                      enim ad minim veniam laboris.
                    </p>
                  </div>
                  <div className="form-inner">
                    <h4>Get a free quote</h4>
                    <form
                      action="assets/inc/sendemail.php"
                      className="contact-form-validated"
                      noValidate="novalidate"
                    >
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          placeholder="Message..."
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group message-btn">
                        <button
                          type="submit"
                          className="thm-btn form-inner__btn"
                        >
                          Submit Now
                        </button>
                      </div>
                    </form>
                    <div className="result" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
