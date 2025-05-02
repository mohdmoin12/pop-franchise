import React, { useEffect } from 'react';

const LatestBlog = () => {
  // Initialize Bootstrap carousel when component mounts
  useEffect(() => {
    // Make sure the carousel is initialized after component is mounted
    if (typeof window !== 'undefined' && typeof window.bootstrap !== 'undefined') {
      const carouselElement = document.querySelector('#mobileBlogCarousel');
      if (carouselElement) {
        new window.bootstrap.Carousel(carouselElement, {
          interval: 4000,
          wrap: true
        });
      }
    }
  }, []);

  // Blog data for reusability
  const blogPosts = [
    {
      id: 1,
      image: "/blog/blog-1-1.jpg",
      date: "10 OCT",
      title: "Your Trusted Car Service Provider Keeping",
      delay: "100ms",
      animationClass: "fadeInLeft"
    },
    {
      id: 2,
      image: "/blog/blog-1-2.jpg",
      date: "15 OCT",
      title: "Drive Stress-Free Professional Care for Your Car",
      delay: "200ms",
      animationClass: "fadeInUp"
    },
    {
      id: 3,
      image: "/blog/blog-1-3.jpg",
      date: "20 OCT",
      title: "Reliable Roadside Assistance SpeedySpark Car Care",
      delay: "300ms",
      animationClass: "fadeInRight"
    }
  ];

  return (
    <div>
      <section className="blog-one py-5">
        <div className="container">
          <div className="blog-one__top d-flex justify-content-between align-items-center mb-4">
            <div className="section-title text-left">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">Trending Now</span>
              </div>
              <h2 className="section-title__title">
                Blogs
              </h2>
            </div>
            <div className="blog-one__btn-box">
              <a href="blog.html" className="thm-btn">
                View More
                <span className="icon-arrow-up-right"></span>
              </a>
            </div>
          </div>

          {/* Desktop Blog View - Hidden on mobile */}
          <div className="blog-one__bottom d-none d-md-block">
            <div className="row">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className={`col-xl-4 col-lg-6 wow ${post.animationClass}`}
                  data-wow-delay={post.delay}
                >
                  <div className="blog-one__single">
                    <div className="blog-one__img">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="blog-one__content">
                      <div className="blog-one__date">
                        <p>
                          {post.date.split(' ')[0]} <br />
                          {post.date.split(' ')[1]}
                        </p>
                      </div>
                      <ul className="blog-one__meta list-unstyled">
                        {/* Meta content can be added back here if needed */}
                      </ul>
                      <h3 className="blog-one__title">
                        <a href="blog-details.html">
                          {post.title}
                        </a>
                      </h3>
                      <div className="blog-one__read-more">
                        <a href="blog-details.html">
                          Read more <span className="icon-arrow-up-right"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Blog Carousel - Visible only on mobile */}
          <div className="d-block d-md-none">
            <div id="mobileBlogCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {blogPosts.map((post, index) => (
                  <div key={post.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="blog-one__single mx-2">
                      <div className="blog-one__img">
                        <img src={post.image} alt={post.title} className="d-block w-100" />
                      </div>
                      <div className="blog-one__content">
                        <div className="blog-one__date">
                          <p>
                            {post.date.split(' ')[0]} <br />
                            {post.date.split(' ')[1]}
                          </p>
                        </div>
                        <h3 className="blog-one__title">
                          <a href="blog-details.html">
                            {post.title}
                          </a>
                        </h3>
                        <div className="blog-one__read-more">
                          <a href="blog-details.html">
                            Read more <span className="icon-arrow-up-right"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#mobileBlogCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#mobileBlogCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
              <div className="carousel-indicators">
                {blogPosts.map((post, index) => (
                  <button 
                    key={post.id}
                    type="button" 
                    data-bs-target="#mobileBlogCarousel" 
                    data-bs-slide-to={index} 
                    className={index === 0 ? "active" : ""} 
                    aria-current={index === 0 ? "true" : "false"} 
                    aria-label={`Slide ${index + 1}`}>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestBlog;