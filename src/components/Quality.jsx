// import { useState, useEffect } from 'react';

// // Custom CSS is imported separately or included in your main CSS file

// const Counter = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     // Load odometer.js and wow.js scripts
//     const loadScripts = async () => {
//       // Load odometer CSS
//       const odometerStyle = document.createElement('link');
//       odometerStyle.rel = 'stylesheet';
//       odometerStyle.href = 'https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/themes/odometer-theme-minimal.min.css';
//       document.head.appendChild(odometerStyle);

//       // Load odometer.js
//       const odometerScript = document.createElement('script');
//       odometerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/odometer.min.js';
//       odometerScript.async = true;
//       document.body.appendChild(odometerScript);

//       // Load WOW.js
//       const wowScript = document.createElement('script');
//       wowScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';
//       wowScript.async = true;
//       document.body.appendChild(wowScript);

//       // Initialize WOW.js after it's loaded
//       wowScript.onload = () => {
//         if (window.WOW) {
//           new window.WOW().init();
//         }
//         setIsLoaded(true);
//       };
//     };

//     loadScripts();

//     // Initialize odometers after component is fully rendered
//     const timer = setTimeout(() => {
//       const odometerElements = document.querySelectorAll('.odometer');
//       odometerElements.forEach(element => {
//         const targetValue = element.getAttribute('data-count');
//         if (window.Odometer && targetValue) {
//           const od = new window.Odometer({
//             el: element,
//             value: 0,
//             format: '(,ddd)',
//             theme: 'minimal'
//           });
//           od.update(targetValue);
//         }
//       });
//     }, 1000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [isLoaded]);

//   return (
//     <div className="bg-white">
//       <section className="counter-one">
//         <div className="container mx-auto">
//           <div className="counter-one__inner">
//             <ul className="list-none counter-one__list">
//               <li className="wow fadeInLeft" data-wow-delay="100ms">
//                 <div className="counter-one__single">
//                   <div className="counter-one__count-box">
//                     <h3 className="odometer" data-count="18"></h3>
//                     <span>+</span>
//                   </div>
//                   <p className="counter-one__text">Stores Nationwide</p>
//                 </div>
//               </li>
//               <li className="wow fadeInLeft" data-wow-delay="200ms">
//                 <div className="counter-one__single">
//                   <div className="counter-one__count-box">
//                     <h3 className="odometer" data-count="10">0</h3>
//                     <span>+</span>
//                   </div>
//                   <p className="counter-one__text">Years 
//                   Industry Expertise</p>
//                 </div>
//               </li>
//               <li className="wow fadeInRight" data-wow-delay="300ms">
//                 <div className="counter-one__single">
//                   <div className="counter-one__count-box">
//                     <h3 className="odometer" data-count="5">00</h3>
//                     <span>L+</span>
//                   </div>
//                   <p className="counter-one__text">Devices Sold</p>
//                 </div>
//               </li>
//               <li className="wow fadeInRight" data-wow-delay="400ms">
//                 <div className="counter-one__single">
//                   <div className="counter-one__count-box">
//                     <h3 className="odometer" data-count="100%">00</h3>
//                     <span>%</span>
//                   </div>
//                   <p className="counter-one__text">Customer Satisfaction</p>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Counter;



// import { useState, useEffect } from 'react';

// const Counter = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     // Load odometer.js and wow.js scripts
//     const loadScripts = async () => {
//       // Load odometer CSS
//       const odometerStyle = document.createElement('link');
//       odometerStyle.rel = 'stylesheet';
//       odometerStyle.href = 'https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/themes/odometer-theme-minimal.min.css';
//       document.head.appendChild(odometerStyle);

//       // Load odometer.js
//       const odometerScript = document.createElement('script');
//       odometerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/odometer.min.js';
//       odometerScript.async = true;
//       document.body.appendChild(odometerScript);

//       // Load WOW.js
//       const wowScript = document.createElement('script');
//       wowScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';
//       wowScript.async = true;
//       document.body.appendChild(wowScript);

//       // Initialize WOW.js after it's loaded
//       wowScript.onload = () => {
//         if (window.WOW) {
//           new window.WOW().init();
//         }
//         setIsLoaded(true);
//       };
//     };

//     loadScripts();

//     // Initialize odometers after component is fully rendered
//     const timer = setTimeout(() => {
//       const odometerElements = document.querySelectorAll('.odometer');
//       odometerElements.forEach(element => {
//         const targetValue = element.getAttribute('data-count');
//         if (window.Odometer && targetValue) {
//           const od = new window.Odometer({
//             el: element,
//             value: 0,
//             format: '(,ddd)',
//             theme: 'minimal'
//           });
//           od.update(targetValue);
//         }
//       });
//     }, 1000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [isLoaded]);

//   return (
//     <div className="bg-white">
//       <section className="counter-one">
//         <div className="container mx-auto">
//           <div className="counter-one__inner">
//             <ul className="list-none counter-one__list row">
//               <li className="col-6 col-md-3 wow fadeInLeft" data-wow-delay="100ms">
//                 <div className="counter-one__single">
//                   <div className="counter-one__count-box">
//                     <h3 className="odometer" data-count="18"></h3>
//                     <span>+</span>
//                   </div>
//                   <p className="counter-one__text">Stores Nationwide</p>
//                 </div>
//               </li>
//               <li className="col-6 col-md-3 wow fadeInLeft" data-wow-delay="200ms">
//                 <div className="counter-one__single">
//                   <div className="counter-one__count-box">
//                     <h3 className="odometer" data-count="10">0</h3>
//                     <span>+</span>
//                   </div>
//                   <p className="counter-one__text">Years Industry Expertise</p>
//                 </div>
//               </li>
//               <li className="col-6 col-md-3 wow fadeInRight" data-wow-delay="300ms">
//                 <div className="counter-one__single">
//                   <div className="counter-one__count-box">
//                     <h3 className="odometer" data-count="5">00</h3>
//                     <span>L+</span>
//                   </div>
//                   <p className="counter-one__text">Devices Sold</p>
//                 </div>
//               </li>
//               <li className="col-6 col-md-3 wow fadeInRight" data-wow-delay="400ms">
//                 <div className="counter-one__single">
//                   <div className="counter-one__count-box">
//                     <h3 className="odometer" data-count="100%">00</h3>
//                     <span>%</span>
//                   </div>
//                   <p className="counter-one__text">Customer Satisfaction</p>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Counter;


// import { useState, useEffect } from 'react';

// const Counter = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     // Load odometer.js and wow.js scripts
//     const loadScripts = async () => {
//       // Load odometer CSS
//       const odometerStyle = document.createElement('link');
//       odometerStyle.rel = 'stylesheet';
//       odometerStyle.href = 'https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/themes/odometer-theme-minimal.min.css';
//       document.head.appendChild(odometerStyle);

//       // Load odometer.js
//       const odometerScript = document.createElement('script');
//       odometerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/odometer.min.js';
//       odometerScript.async = true;
//       document.body.appendChild(odometerScript);

//       // Load WOW.js
//       const wowScript = document.createElement('script');
//       wowScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';
//       wowScript.async = true;
//       document.body.appendChild(wowScript);

//       // Initialize WOW.js after it's loaded
//       wowScript.onload = () => {
//         if (window.WOW) {
//           new window.WOW().init();
//         }
//         setIsLoaded(true);
//       };
//     };

//     loadScripts();

//     // Initialize odometers after component is fully rendered
//     const timer = setTimeout(() => {
//       const odometerElements = document.querySelectorAll('.odometer');
//       odometerElements.forEach(element => {
//         const targetValue = element.getAttribute('data-count');
//         if (window.Odometer && targetValue) {
//           const od = new window.Odometer({
//             el: element,
//             value: 0,
//             format: '(,ddd)',
//             theme: 'minimal'
//           });
//           od.update(targetValue);
//         }
//       });
//     }, 1000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [isLoaded]);

//   return (
//     <div className="bg-white">
//       <section className="counter-one">
//         <div className="container mx-auto">
//           <div className="counter-one__inner">
//             {/* First row on mobile */}
//             <div className="row">
//               <div className="col-6 col-md-3">
//                 <div className="counter-one__single wow fadeInLeft" data-wow-delay="100ms">
//                   <div className="counter-one__count-box">
//                     <h3 className="odometer" data-count="18"></h3>
//                     <span>+</span>
//                   </div>
//                   <p className="counter-one__text">Stores<br/> Nationwide</p>
//                 </div>
//               </div>
//               <div className="col-6 col-md-3">
//                 <div className="counter-one__single wow fadeInLeft" data-wow-delay="200ms">
//                   <div className="counter-one__count-box">
//                     <h3 className="odometer" data-count="10">0</h3>
//                     <span>+</span>
//                   </div>
//                   <p className="counter-one__text">Years Industry Expertise</p>
//                 </div>
//               </div>
//               <div className="col-6 col-md-3">
//                 <div className="counter-one__single wow fadeInRight" data-wow-delay="300ms">
//                   <div className="counter-one__count-box">
//                     <h3 className="odometer" data-count="5">00</h3>
//                     <span>L+</span>
//                   </div>
//                   <p className="counter-one__text">Devices<br/>Sold</p>
//                 </div>
//               </div>
//               <div className="col-6 col-md-3">
//                 <div className="counter-one__single wow fadeInRight" data-wow-delay="400ms">
//                   <div className="counter-one__count-box">
//                     <h3 className="odometer" data-count="100%">00</h3>
//                     <span>%</span>
//                   </div>
//                   <p className="counter-one__text">Customer Satisfaction</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Counter;


import { useState, useEffect } from 'react';

const Counter = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadScripts = async () => {
      const odometerStyle = document.createElement('link');
      odometerStyle.rel = 'stylesheet';
      odometerStyle.href = 'https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/themes/odometer-theme-minimal.min.css';
      document.head.appendChild(odometerStyle);

      const odometerScript = document.createElement('script');
      odometerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/odometer.min.js';
      odometerScript.async = true;
      document.body.appendChild(odometerScript);

      const wowScript = document.createElement('script');
      wowScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';
      wowScript.async = true;
      document.body.appendChild(wowScript);

      wowScript.onload = () => {
        if (window.WOW) {
          new window.WOW().init();
        }
        setIsLoaded(true);
      };
    };

    loadScripts();

    const timer = setTimeout(() => {
      const odometerElements = document.querySelectorAll('.odometer');
      odometerElements.forEach((element) => {
        const targetValue = element.getAttribute('data-count');
        if (window.Odometer && targetValue) {
          const od = new window.Odometer({
            el: element,
            value: 0,
            format: '(,ddd)',
            theme: 'minimal',
          });
          od.update(targetValue);
        }
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [isLoaded]);

  return (
    <div className="bg-white py-6">
      <section className="counter-one">
        <div className="container mx-auto">
          <div className="counter-one__inner">
            <ul className="list-none counter-one__list flex flex-wrap justify-between gap-6 sm:gap-10 md:gap-12">
              <li className="wow fadeInLeft" data-wow-delay="100ms">
                <div className="counter-one__single">
                  <div className="counter-one__count-box flex items-baseline justify-center gap-1 text-black font-bold text-3xl">
                    <h3 className="odometer" data-count="18">0</h3>
                    <span>+</span>
                  </div>
                  <p className="counter-one__text text-sm text-center desk">Stores Nationwide</p>
                  <p className="counter-one__text text-sm text-center mob">Stores<br/>Nationwide</p>
                </div>
              </li>
              <li className="wow fadeInLeft" data-wow-delay="200ms">
                <div className="counter-one__single">
                  <div className="counter-one__count-box flex items-baseline justify-center gap-1 text-black font-bold text-3xl">
                    <h3 className="odometer" data-count="10">0</h3>
                    <span>+</span>
                  </div>
                  <p className="counter-one__text text-sm text-center">Years Industry Expertise</p>
                </div>
              </li>
              <li className="wow fadeInRight" data-wow-delay="300ms">
                <div className="counter-one__single">
                  <div className="counter-one__count-box flex items-baseline justify-center gap-1 text-black font-bold text-3xl">
                    <h3 className="odometer" data-count="5">0</h3>
                    <span>L+</span>
                  </div>
                  <p className="counter-one__text text-sm text-center desk">Devices Sold</p>
                  <p className="counter-one__text text-sm text-center mob">Devices<br/>Sold</p>
                </div>
              </li>
              <li className="wow fadeInRight" data-wow-delay="400ms">
                <div className="counter-one__single">
                  <div className="counter-one__count-box flex items-baseline justify-center gap-1 text-black font-bold text-3xl">
                    <h3 className="odometer" data-count="100">0</h3>
                    <span>%</span>
                  </div>
                  <p className="counter-one__text text-sm text-center">Customer Satisfaction</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counter;
