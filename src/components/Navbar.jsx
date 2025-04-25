import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

const Navbar = ({ setIsSidebarOpen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#232323] text-white shadow-md rounded-b-2xl px-10">
      <div className="w-[1290px] h-[100px] mx-auto py-4 flex items-center justify-between flex-wrap">
        
        {/* Left Logo */}
        <a href="index.html" className="flex items-center">
          <img src="resources/logo-1.png" alt="Logo" className="h-10" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <NavItem label="Home" link="index.html" dropdownItems={[
            { label: "Home One", link: "index.html" },
            { label: "Home Two", link: "index2.html" },
            { label: "Home Three", link: "index3.html" },
            { label: "Home Four", link: "index4.html" },
            { label: "Home Dark", link: "index-dark.html" }
          ]} />
          <NavItem label="About Us" link="about.html" />
          <NavItem label="Pages" dropdownItems={[
            { label: "Team", link: "team.html" },
            { label: "Testimonials", link: "testimonials.html" },
            { label: "Pricing", link: "pricing.html" },
            { label: "FAQ", link: "faq.html" },
            { label: "404 Error", link: "404.html" }
          ]} />
          <NavItem label="Services" dropdownItems={[
            { label: "Services", link: "services.html" },
            { label: "Easy Drive Maintenance", link: "easy-drive-maintenance.html" },
            { label: "Elite Auto Services", link: "elite-auto-services.html" },
            { label: "Smooth Ride Vehicle Care", link: "smooth-ride-vehicle-care.html" },
            { label: "Careful Car Service Station", link: "careful-car-service-station.html" },
            { label: "Auto Pro Mechanic Shop", link: "auto-pro-mechanic-shop.html" }
          ]} />
          <NavItem label="Shop" dropdownItems={[
            { label: "Products", link: "products.html" },
            { label: "Product Details", link: "product-details.html" },
            { label: "Cart", link: "cart.html" },
            { label: "Checkout", link: "checkout.html" },
            { label: "Wishlist", link: "wishlist.html" }
          ]} />
          <NavItem label="Blog" dropdownItems={[
            { label: "Blog", link: "blog.html" },
            { label: "Blog Details", link: "blog-details.html" }
          ]} />
          <NavItem label="Contact" link="contact.html" />
        </nav>

        {/* Social Icons & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-3">
            <SocialIcon icon="facebook-f" />
            <SocialIcon icon="twitter" />
            <SocialIcon icon="instagram" />
            <SocialIcon icon="pinterest" />
          </div>

          {/* Sidebar Button (Opens Sidebar) */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="hidden md:block p-3 bg-gray-700 rounded-full hover:bg-red-600"
          >
            <i className="fa-solid fa-bars text-white text-xl"></i>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 bg-red-600 rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fa-solid fa-bars text-white text-xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#232323] text-white py-4 px-6 space-y-3 transition-all duration-300 ${
          mobileMenuOpen ? "h-auto opacity-100" : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        <a href="index.html" className="block">Home</a>
        <a href="about.html" className="block">About Us</a>
        <a href="services.html" className="block">Services</a>
        <a href="products.html" className="block">Shop</a>
        <a href="blog.html" className="block">Blog</a>
        <a href="contact.html" className="block">Contact</a>
      </div>
    </header>
  );
};

// 🔹 Navigation Item Component (Handles Dropdowns)
const NavItem = ({ label, link, dropdownItems }) => {
  return (
    <div className="relative group">
      <a href={link || "#"} className="text-white hover:text-red-500 px-4 py-2 flex items-center">
        {label} {dropdownItems && <i className="fa fa-chevron-down ml-1 text-xs"></i>}
      </a>
      {dropdownItems && (
        <div className="absolute left-0 mt-2 w-48 bg-black text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {dropdownItems.map((item, index) => (
            <a key={index} href={item.link} className="block px-4 py-2 hover:bg-red-600">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

// 🔹 Social Icon Component
const SocialIcon = ({ icon }) => (
  <a href="#" className="p-3 rounded-full bg-gray-700 hover:bg-red-600">
    <i className={`fa fa-${icon} text-white`}></i>
  </a>
);

export default Navbar;
