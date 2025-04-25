import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="site-footer__wrap">
          <div className="site-footer__shape-1" />
          <div className="site-footer__shape-2" />
          {/* <div className="site-footer__newsletter">
            <div className="container">
              <div className="site-footer__newsletter-inner">
                <div className="site-footer__newsletter-img">
                  <img
                    src="/resources/site-footer-newsletter-img-1.png"
                    alt=""
                  />
                </div>
                <div className="site-footer__newsletter-inner-content">
                  <div
                    className="site-footer__newsletter-shape-1"
                    style={{
                      backgroundImage:
                        "url(/shapes/site-footer-newsletter-shape-1.png)",
                    }}
                  />
                  <h2 className="site-footer__newsletter-title">
                    Partering With You To Transform <br />
                    Your Vision Into Reality
                  </h2>
                  <form className="site-footer__newsletter-form">
                    <div className="site-footer__newsletter-input">
                      <input type="email" placeholder="Your email..." />
                    </div>
                    <button type="submit" className="thm-btn">
                      Subscribe <span className="icon-send" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div> */}
          {/*  */}
          <div className="site-footer__bottom">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="site-footer__bottom-inner">
                    <div className="site-footer__copyright">
                      <p className="site-footer__copyright-text">
                        Copyright © 2025 <a href="about.html">Pop Phones</a>. SA
                        Pty Ltd. ACN: 165 581 153
                      </p>
                    </div>
                    <div className="site-footer__bottom-menu-box">
                      <ul className="list-unstyled site-footer__bottom-menu d-flex align-items-center">
                        <li>
                          <img
                            src="/resources/foot.webp"
                            alt="Terms & Condition"
                            className="footer-img"
                          />
                        </li>
                        {/* <li>
                <a href="about.html">Privacy Policy</a>
              </li> */}
                        {/* <li>
                <a href="about.html">Contact Us</a>
              </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
