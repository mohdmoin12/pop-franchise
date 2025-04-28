import React from "react";

const Sidebar = ({ isOpen, onClose }) => {
  // Icon HTML using Bootstrap Icons class names
  const menuItems = [
    { label: "Why Us", icon: "bi-patch-question-fill", href: "index.html" },
    { label: "Features", icon: "bi-star-fill", href: "#" },
    { label: "FAQs", icon: "bi-question-circle-fill", href: "#" },
    { label: "Gallery", icon: "bi-images", href: "#" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`position-fixed top-0 bottom-0 start-0 end-0 bg-dark bg-opacity-50 ${
          isOpen ? "d-block" : "d-none"
        }`}
        style={{ zIndex: 998 }}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div
        className={`position-fixed top-0 bottom-0 start-0 bg-warning shadow-lg px-4 py-5 overflow-auto w-75 ${
          isOpen ? "d-block" : "d-none"
        }`}
        style={{
          zIndex: 999,
          borderTopRightRadius: "1.25rem",
          borderBottomRightRadius: "1.25rem",
          minWidth: 300,
          maxWidth: 350,
        }}
      >
        {/* Header */}
        <div
          className="d-flex justify-content-between align-items-center mb-4 rounded-3 px-3 py-2"
          style={{ borderBottom: "2px solid #000", background: "#000" }}
        >
          <img
            src="/resources/mainlogo.jpg"
            alt="Logo"
            style={{
              height: 56,
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        {/* Navigation List */}
        <ul className="list-unstyled mb-0">
          {menuItems.map((item, idx) => (
            <li key={idx} className="mb-3">
              <a
                href={item.href}
                className="d-flex align-items-center text-dark fw-semibold fs-5 gap-3 sidebar-link"
                onClick={onClose}
                style={{
                  textDecoration: "none",
                  borderRadius: 8,
                  padding: "0.5rem 0.75rem",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#FFD600 ";
                  e.currentTarget.style.color = "#000";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#000";
                }}
              >
                <i
                  className={`bi ${item.icon}`}
                  style={{ fontSize: "1.3rem" }}
                ></i>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
