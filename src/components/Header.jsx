import React from "react";

const Header = () => {
  return (
    <div>
      <header className="main-header fixed top-0">
        <div className="main-header__wrapper">
          <nav className="main-menu">
            <div className="main-menu__wrapper">
              <div className="container">
                <div className="main-menu__wrapper-inner">
                  <div className="main-menu__left">
                    <div
                      className="main-header__logo"
                      style={{
                        width: "150px",
                        height: "auto",
                        overflow: "hidden",
                      }}
                    >
                      <a href="index.html">
                        <img
                          src="/resources/mainlogo.jpg"
                          alt="Logo"
                          style={{
                            width: "120%",
                            height: "auto",
                            objectFit: "contain",
                            transform: "scale(1.2)",
                            display: "block",
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="main-menu__main-menu-box">
                    <a href="#" className="mobile-nav__toggler">
                      <i className="fa fa-bars" />
                    </a>
                    <ul className="main-menu__list">
                      <li className="dropdown">
                        <a href="index.html">Why Us </a>
                        {/* <ul>
                          <li>
                            <a href="index.html">Home One</a>
                          </li>
                          <li>
                            <a href="index2.html">Home Two</a>
                          </li>
                          <li>
                            <a href="index3.html">Home Three</a>
                          </li>
                          <li>
                            <a href="index4.html">Home Four</a>
                          </li>
                          <li>
                            <a href="index-dark.html">Home Dark</a>
                          </li>
                          <li className="dropdown">
                            <a href="#">One Page Styles</a>
                            <ul>
                              <li>
                                <a href="index-one-page.html">
                                  One Page Styles One
                                </a>
                              </li>
                              <li>
                                <a href="index2-one-page.html">
                                  One Page Styles Two
                                </a>
                              </li>
                              <li>
                                <a href="index3-one-page.html">
                                  One Page Styles Three
                                </a>
                              </li>
                              <li>
                                <a href="index4-one-page.html">
                                  One Page Styles Four
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul> */}
                      </li>
                      {/* <li>
                        <a href="about.html">Why Us </a>
                      </li> */}
                      <li className="dropdown">
                        <a href="#">Features</a>
                        {/* <ul>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="team-carousel.html">Team Carousel</a>
                          </li>
                          <li>
                            <a href="team-details.html">Team Details</a>
                          </li>
                          <li>
                            <a href="project.html">Projects</a>
                          </li>
                          <li>
                            <a href="project-details.html">Project Details</a>
                          </li>
                          <li>
                            <a href="testimonials.html">Testimonials</a>
                          </li>
                          <li>
                            <a href="testimonial-carousel.html">
                              Testimonial Carousel
                            </a>
                          </li>
                          <li>
                            <a href="pricing.html">Pricing</a>
                          </li>
                          <li>
                            <a href="pricing-carousel.html">Pricing Carousel</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq</a>
                          </li>
                          <li>
                            <a href="404.html">404 Error</a>
                          </li>
                        </ul> */}
                      </li>
                      <li className="dropdown">
                        <a href="#">FAQs</a>
                        {/* <ul>
                          <li>
                            <a href="services.html">Services</a>
                          </li>
                          <li>
                            <a href="easy-drive-maintenance.html">
                              Easy Drive Maintenance
                            </a>
                          </li>
                          <li>
                            <a href="elite-auto-services.html">
                              Elite Auto Services
                            </a>
                          </li>
                          <li>
                            <a href="smooth-ride-vehicle-care.html">
                              Smooth Ride Vehicle Care
                            </a>
                          </li>
                          <li>
                            <a href="careful-car-service-station.html">
                              Careful Car Service Station
                            </a>
                          </li>
                          <li>
                            <a href="auto-pro-mechanic-shop.html">
                              Auto Pro Mechanic Shop
                            </a>
                          </li>
                        </ul> */}
                      </li>
                      <li className="dropdown">
                        <a href="#">Gallery </a>
                        {/* <ul>
                          <li>
                            <a href="products.html">Products</a>
                          </li>
                          <li>
                            <a href="product-details.html">Product Details</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wishlist</a>
                          </li>
                          <li>
                            <a href="sign-up.html">Sign Up</a>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                        </ul> */}
                      </li>
                      {/* <li className="dropdown">
                  <a href="#">Blog</a>
                  <ul>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-carousel.html">Blog Carousel</a>
                    </li>
                    <li>
                      <a href="blog-list.html">Blog List</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li> */}
                      {/* <li>
                  <a href="contact.html">Contact</a>
                </li> */}
                    </ul>
                  </div>
                  <div className="main-menu__right">
                    <div className="main-menu__social">
                      <a href="https://www.facebook.com/PopPhones/">
                        <span className="icon-facebook-f" />
                      </a>
                      {/* <a href="#">
                        <span className="icon-Vector" />
                      </a> */}
                      <a href="https://instagram.com/popphones?r=nametag">
                        <span className="icon-instagram" />
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UC-GKPJdmF5IK5XzMwy1GUwQ"
                        className="hoverYelllow"
                      >
                        <span className="fab fa-youtube hovericonyelllow" />
                      </a>
                    </div>
                    <div className="cta-one__btn" style={{ fontSize: "11px" }}>
                      <a href="contact.html" className="thm-btn ">
                        Book Repair
                        <span className="icon-arrow-up-right"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
