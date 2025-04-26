import { useState, useEffect } from 'react';

// Custom CSS is imported separately or included in your main CSS file

const Counter = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load odometer.js and wow.js scripts
    const loadScripts = async () => {
      // Load odometer CSS
      const odometerStyle = document.createElement('link');
      odometerStyle.rel = 'stylesheet';
      odometerStyle.href = 'https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/themes/odometer-theme-minimal.min.css';
      document.head.appendChild(odometerStyle);

      // Load odometer.js
      const odometerScript = document.createElement('script');
      odometerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/odometer.min.js';
      odometerScript.async = true;
      document.body.appendChild(odometerScript);

      // Load WOW.js
      const wowScript = document.createElement('script');
      wowScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';
      wowScript.async = true;
      document.body.appendChild(wowScript);

      // Initialize WOW.js after it's loaded
      wowScript.onload = () => {
        if (window.WOW) {
          new window.WOW().init();
        }
        setIsLoaded(true);
      };
    };

    loadScripts();

    // Initialize odometers after component is fully rendered
    const timer = setTimeout(() => {
      const odometerElements = document.querySelectorAll('.odometer');
      odometerElements.forEach(element => {
        const targetValue = element.getAttribute('data-count');
        if (window.Odometer && targetValue) {
          const od = new window.Odometer({
            el: element,
            value: 0,
            format: '(,ddd)',
            theme: 'minimal'
          });
          od.update(targetValue);
        }
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoaded]);

  return (
    <div className="bg-white">
      <section className="counter-one">
        <div className="container mx-auto">
          <div className="counter-one__inner">
            <ul className="list-none counter-one__list">
              <li className="wow fadeInLeft" data-wow-delay="100ms">
                <div className="counter-one__single">
                  <div className="counter-one__count-box">
                    <h3 className="odometer" data-count="600">00</h3>
                    <span>+</span>
                  </div>
                  <p className="counter-one__text">Team member</p>
                </div>
              </li>
              <li className="wow fadeInLeft" data-wow-delay="200ms">
                <div className="counter-one__single">
                  <div className="counter-one__count-box">
                    <h3 className="odometer" data-count="2">00</h3>
                    <span>k+</span>
                  </div>
                  <p className="counter-one__text">Service Complete</p>
                </div>
              </li>
              <li className="wow fadeInRight" data-wow-delay="300ms">
                <div className="counter-one__single">
                  <div className="counter-one__count-box">
                    <h3 className="odometer" data-count="53">00</h3>
                    <span>+</span>
                  </div>
                  <p className="counter-one__text">Winning award</p>
                </div>
              </li>
              <li className="wow fadeInRight" data-wow-delay="400ms">
                <div className="counter-one__single">
                  <div className="counter-one__count-box">
                    <h3 className="odometer" data-count="3">00</h3>
                    <span>k+</span>
                  </div>
                  <p className="counter-one__text">Client Review</p>
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