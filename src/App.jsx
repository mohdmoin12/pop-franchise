import { motion } from "framer-motion";
import React, { useState } from "react";
import Header from "./components/Header";
import $ from "jquery";
window.jQuery = $;
import * as Lucide from "lucide-react";
import { useEffect } from "react";
import { loadBootstrap } from "./loader";

 
import Counter from "./components/Counter";
import Services from "./components/Services";
import About from "./components/About";
import Brand from "./components/Brand";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";


import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Sidebar from "./components/Sidebar"; // Import Sidebar Component
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/custom-animate.css";
import "./assets/css/swiper.min.css";
import "./assets/css/font-awesome-all.css";
import "./assets/css/jarallax.css";
import "./assets/css/jquery.magnific-popup.css";
import "./assets/css/flaticon.css";
import "./assets/css/owl.carousel.min.css";
import "odometer/themes/odometer-theme-default.css";

import "./assets/css/odometer.min.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/nice-select.css";
import "./assets/css/jquery-ui.css";
import "./assets/css/aos.css";


import "jquery-ui-dist/jquery-ui.css";
import "aos/dist/aos.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
// import "jquery-magnific-popup/dist/jquery.magnific-popup.css";
import "magnific-popup/dist/magnific-popup.css";

import "jquery-ui-dist/jquery-ui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./assets/css/owl.theme.default.min.css";



// Import your custom styles
import "./assets/css/custom-animate.css";
import "./assets/css/font-awesome-all.css";
import "./assets/css/flaticon.css";
import "./assets/css/module-css/slider.css";
import "./assets/css/module-css/footer.css";
import "./assets/css/module-css/counter.css";
import "./assets/css/module-css/services.css";
import "./assets/css/module-css/about.css";
import "./assets/css/module-css/brand.css";
import "./assets/css/module-css/gallery.css";
import "./assets/css/module-css/faq.css";
import "./assets/css/module-css/testimonial.css";
import "./assets/css/module-css/team.css";
import "./assets/css/module-css/contact.css";
import "./assets/css/module-css/pricing.css";
import "./assets/css/module-css/blog.css";
import "./assets/css/banner.css";
import "./assets/css/module-css/cta.css";
import "./assets/css/module-css/reviews.css";
import "./assets/css/module-css/MouseRipple.css";
import "./assets/css/module-css/faq.css";


// Template styles
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/dark.css";
import MainSlider from "./components/MainSlider";
import Quality from "./components/Quality";
import StepperForm from "./components/StepperForm";
import AboutUs from "./components/AboutUs";
import Cta from "./components/Cta";
import Reviews from "./components/Review";
import MouseRipple from "./components/MouseRipple";
import Stepper from "./components/Stepper";
import Review from "./components/Review";
import MainService from "./components/MainService";
import MultiStepForm from "./components/MultistepForm/Index";
import OurTeam from "./components/ourTeam";
import CarRepair from "./components/carRepair";
import PricingPlan from "./components/pricingPlan";
import LatestBlog from "./components/latestBlog";




const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

function App() {
  // 🔹 Sidebar State
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/test.js"; // Path relative to the public folder
    script.async = true;
    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    };
}, []);
  return (

    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="font-poppins bg-white dark:bg-gray-900"
    >
      <Preloader />

      {/* Pass Sidebar State to Header */}
      <Header setIsSidebarOpen={setIsSidebarOpen} />

      {/* Sidebar Component (conditionally rendered) */}
      {isSidebarOpen && <Sidebar setIsSidebarOpen={setIsSidebarOpen} />}

      <MainSlider />
      {/* <Quality /> */}
      {/* <Stepper /> */}
      {/* <StepperForm /> */}
  
      
      
     
      {/* <MainService /> */}
      <Services />
      <AboutUs />
      <Review />
         <Gallery />
      <FAQ />
       {/* <Cta /> */}
           {/* <MultiStepForm /> */}
           {/* <OurTeam/> */}
           <CarRepair/>
           {/* <PricingPlan/> */}
           {/* <LatestBlog/> */}
   
      <Footer />
      <MouseRipple />

      
    </motion.div>
  );
}

export default App;
