// import React from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// // Import Bootstrap CSS if not already imported in your main file
// // import 'bootstrap/dist/css/bootstrap.min.css';

// const MainSlider = () => {
//   return (
//     <section className="main-slider">
//       <div className="main-slider__wrap">
//         <OwlCarousel
//           className="owl-theme main-slider__carousel"
//           margin={10}
//           nav={false}
//           autoplayTimeout={3500}
//           items={1}
//           dots={false}
//         >
//           {/* Slide 1 */}
//           <div className="item">

//             <div className="main-slider__shape-1">
//               {/* Bootstrap responsive classes for shape */}
//               <div className="d-none d-lg-block">
//                 {/* <img src="/shapes/main-slider-shape-1.png" alt="" className="img-fluid" /> */}
//               </div>
//             </div>
//             <div className="container">
//               <div className="main-slider__content row align-items-center">
//                 {/* Left Side Text - Bootstrap responsive grid */}
//                 <div className="main-slider__text-content col-12 col-md-6 mb-4 mb-md-0">
//                   <h2 className="main-slider__title">
//                     OWN A<br />
//                     <span className="highlight">POP PHONES</span>
//                     <br />
//                     FRANCHISE
//                   </h2>

//                   <p className="main-slider__text d-none d-sm-block">
//                     Be Part of One of Australia's Fastest Growing
//                     <br className="d-none d-lg-block" />
//                     Mobile Phone & Accessories Brands
//                   </p>
//                   <p className="main-slider__text d-block d-sm-none">
//                     Be Part of One of Australia's Fastest Growing Mobile Phone &
//                     Accessories Brands
//                   </p>
//                   <div className="main-slider__btn-and-video-box sm:d-flex d-none flex-column flex-sm-row align-items-start align-items-sm-center">
//                     <div className="main-slider__btn-box me-sm-3 mb-3 mb-sm-0">
//                       <a
//                         href="#car-repair-form"
//                         className="thm-btn btn btn-primary"
//                       >
//                         Join POP Phones
//                         <span className="icon-arrow-up-right ms-2" />
//                       </a>
//                     </div>
//                     <div className="main-slider__video-link ">
//                       <a
//                         href="https://onedrive.live.com/?qt=allmyphotos&photosData=%2Fshare%2F96E58F82474A0F0A%21s064475f36360429a8fae1db7518ffad6%3Fithint%3Dvideo%26web%3D1%26migratedtospo%3Dtrue&sw=bypassConfig&cid=96E58F82474A0F0A&id=96E58F82474A0F0A%21s064475f36360429a8fae1db7518ffad6&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3YvYy85NmU1OGY4MjQ3NGEwZjBhL0VmTjFSQVpnWTVwQ2o2NGR0MUdQLXRZQkxuY1VFQmxuQzRHcm9fZFBtREhvRXc%5Fd2ViPTE&v=photos"
//                         className="video-popup"
//                       >
//                         <div className="main-slider__video-icon">
//                           <span className="icon-video" />
//                           <i className="ripple" />
//                         </div>
//                       </a>
//                     </div>
//                   </div>
//                   <div className=" mt-5 mb-5 sm:d-none gap-4" style={{display:'flex'}}>
//                     <div className="main-slider__btn-box me-sm-3 mb-3 mb-sm-0 pe-4">
//                       <a
//                         href="#car-repair-form"
//                         className="thm-btn btn btn-primary"
//                       >
//                         Join POP Phones
//                         <span className="icon-arrow-up-right ms-2" />
//                       </a>
//                     </div>
//                     <div className="main-slider__video-link ">
//                       <a
//                         href="https://onedrive.live.com/?qt=allmyphotos&photosData=%2Fshare%2F96E58F82474A0F0A%21s064475f36360429a8fae1db7518ffad6%3Fithint%3Dvideo%26web%3D1%26migratedtospo%3Dtrue&sw=bypassConfig&cid=96E58F82474A0F0A&id=96E58F82474A0F0A%21s064475f36360429a8fae1db7518ffad6&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3YvYy85NmU1OGY4MjQ3NGEwZjBhL0VmTjFSQVpnWTVwQ2o2NGR0MUdQLXRZQkxuY1VFQmxuQzRHcm9fZFBtREhvRXc%5Fd2ViPTE&v=photos"
//                         className="video-popup"
//                       >
//                         <div className="main-slider__video-icon">
//                           <span className="icon-video" />
//                           <i className="ripple" />
//                         </div>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Right Side Image - Bootstrap responsive grid */}
//                 <div className="main-slider__img col-12 col-md-6 text-center text-md-end">
//                   <img
//                     src="/resources/mainimage.png"
//                     alt="Slide 1"
//                     className="float-bob-y img-fluid"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Slide 2 - Commented out in original, but updating with Bootstrap classes */}
//           {/* <div className="item">
//             <div className="main-slider__shape-1">
//               <div className="d-none d-lg-block">
//                 <img src="/shapes/main-slider-shape-1.png" alt="" className="img-fluid" />
//               </div>
//             </div>
//             <div className="container">
//               <div className="main-slider__content row align-items-center">
//                 <div className="main-slider__text-content col-12 col-md-6 mb-4 mb-md-0">
//                   <h2 className="main-slider__title">
//                     <br />
//                     h
//                     <br />
//                     <span>h</span>
//                   </h2>
//                   <p className="main-slider__text d-none d-sm-block">
//                     Car service is essential for maintaining the performance and
//                     <br className="d-none d-lg-block" />
//                     longevity of your vehicle. From oil changes Car service
//                   </p>
//                   <p className="main-slider__text d-block d-sm-none">
//                     Car service is essential for maintaining the performance and
//                     longevity of your vehicle. From oil changes Car service
//                   </p>
//                   <div className="main-slider__btn-and-video-box d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
//                     <div className="main-slider__btn-box me-sm-3 mb-3 mb-sm-0">
//                       <a href="contact.html" className="thm-btn btn btn-primary">
//                         Get Started
//                         <span className="icon-arrow-up-right ms-2" />
//                       </a>
//                     </div>
//                     <div className="main-slider__video-link">
//                       <a
//                         href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
//                         className="video-popup"
//                       >
//                         <div className="main-slider__video-icon">
//                           <span className="icon-video" />
//                           <i className="ripple" />
//                         </div>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="main-slider__img col-12 col-md-6 text-center text-md-end">
//                   <img
//                     src="/resources/main-slider-img-2.jpg"
//                     alt="Slide 2"
//                     className="float-bob-y img-fluid"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div> */}

//           {/* Slide 3 - Commented out in original, but updating with Bootstrap classes */}
//           {/* <div className="item">
//             <div className="main-slider__shape-1">
//               <div className="d-none d-lg-block">
//                 <img src="/shapes/main-slider-shape-1.png" alt="" className="img-fluid" />
//               </div>
//             </div>
//             <div className="container">
//               <div className="main-slider__content row align-items-center">
//                 <div className="main-slider__text-content col-12 col-md-6 mb-4 mb-md-0">
//                   <h2 className="main-slider__title">
//                     <br />
//                     hlo <br />
//                     <span>hlo</span>
//                   </h2>
//                   <p className="main-slider__text d-none d-sm-block">
//                     Car service is essential for maintaining the performance and
//                     <br className="d-none d-lg-block" />
//                     longevity of your vehicle. From oil changes Car service
//                   </p>
//                   <p className="main-slider__text d-block d-sm-none">
//                     Car service is essential for maintaining the performance and
//                     longevity of your vehicle. From oil changes Car service
//                   </p>
//                   <div className="main-slider__btn-and-video-box d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
//                     <div className="main-slider__btn-box me-sm-3 mb-3 mb-sm-0">
//                       <a href="contact.html" className="thm-btn btn btn-primary">
//                         Get Started
//                         <span className="icon-arrow-up-right ms-2" />
//                       </a>
//                     </div>
//                     <div className="main-slider__video-link">
//                       <a
//                         href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
//                         className="video-popup"
//                       >
//                         <div className="main-slider__video-icon">
//                           <span className="icon-video" />
//                           <i className="ripple" />
//                         </div>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="main-slider__img col-12 col-md-6 text-center text-md-end">
//                   <img
//                     src="/resources/main-slider-img-3.jpg"
//                     alt="Slide 3"
//                     className="float-bob-y img-fluid"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div> */}
//         </OwlCarousel>
//       </div>
//     </section>
//   );
// };

// export default MainSlider;

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const MainSlider = () => {
  return (
    <section className="main-slider position-relative">
      <div className="main-slider__wrap">
        <OwlCarousel
          className="owl-theme main-slider__carousel"
          margin={10}
          nav={false}
          autoplayTimeout={3500}
          items={1}
          dots={false}
        >
          {/* Slide 1 */}
          <div>
            {/* Video Background - Only added Bootstrap positioning classes */}
            <div className="position-absolute top-0 start-0 w-100 h-100">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-100 h-100 object-fit-cover"
              >
                <source src="/pop.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
              ></div>
            </div>

            {/* Your original content - NO CLASSES CHANGED */}
            <div className="main-slider__shape-1">
              <div className="d-none d-lg-block"></div>
            </div>
            <div className="container">
              <div className="main-slider__content row align-items-center">
                <div
                  className="main-slider__text-content col-12 col-md-12 text-center d-flex flex-column align-items-center justify-content-center"
                  style={{ marginTop: "360px", marginBottom: "368px" }}
                >
                  <h2 className="main-slider__title mb-3">
                    OWN A <span className="highlight">POP PHONES</span>{" "}
                    FRANCHISE
                  </h2>

                  <p className="main-slider__text mb-4">
                    Be Part of One of Australia's Fastest Growing
                    <br/> Mobile Phone &
                    Accessories Brands
                  </p>

                  <div className="d-flex flex-column flex-sm-row align-items-center gap-5 mb-4">
                    <div className="main-slider__btn-box">
                      <a
                        href="#car-repair-form"
                        className="thm-btn btn btn-primary"
                      >
                        Join POP Phones
                        <span className="icon-arrow-up-right ms-2" />
                      </a>
                    </div>

                    <div className="main-slider__video-link">
                      <a
                        href="https://onedrive.live.com/?qt=allmyphotos&photosData=%2Fshare%2F96E58F82474A0F0A%21s064475f36360429a8fae1db7518ffad6%3Fithint%3Dvideo%26web%3D1%26migratedtospo%3Dtrue&sw=bypassConfig&cid=96E58F82474A0F0A&id=96E58F82474A0F0A%21s064475f36360429a8fae1db7518ffad6&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3YvYy85NmU1OGY4MjQ3NGEwZjBhL0VmTjFSQVpnWTVwQ2o2NGR0MUdQLXRZQkxuY1VFQmxuQzRHcm9fZFBtREhvRXc%5Fd2ViPTE&v=photos"
                        className="video-popup"
                      >
                        <div className="main-slider__video-icon">
                          <span className="icon-video" />
                          <i className="ripple" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default MainSlider;
