import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // 768px is common breakpoint for tablets
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <header className="main-header fixed top-0">
        <div className="main-header__wrapper">
          <nav className="main-menu">
            <div className="main-menu__wrapper">
              <div className="container">
                <div className="main-menu__wrapper-inner">
                  {/* Left side with logo */}
                  <div className="main-menu__left">
                    <div className="main-header__logo" style={{ width: "150px", height: "auto", overflow: "hidden" }}>
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

                  {/* Center menu - hidden on mobile */}
                  <div className="main-menu__main-menu-box">
                    {isMobile ? (
                      <a href="#" className="mobile-nav__toggler" onClick={(e) => { e.preventDefault(); toggleSidebar(); }}>
                        <i className="fa fa-bars" />
                      </a>
                    ) : (
                      <ul className="main-menu__list">
                        {/* Your existing desktop menu items */}
                        <li><a href="index.html">Why Us</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Gallery</a></li>
                      </ul>
                    )}
                  </div>

                  {/* Right side - social and CTA */}
                  <div className="main-menu__right">
                    <div className="main-menu__social">
                      {/* Your social icons */}
                    </div>
                    <div className="cta-one__btn" style={{ fontSize: "11px" }}>
                      <a href="contact.html" className="thm-btn">
                        Join POP Phones
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

      {/* Mobile sidebar - only rendered on mobile */}
      {isMobile && <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />}
    </div>
  );
};

export default Header;