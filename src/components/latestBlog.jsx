import React from 'react'

const LatestBlog = () => {
  return (
    <div>
        <section className="blog-one">
  <div className="container">
    <div className="blog-one__top">
      <div className="section-title text-left sec-title-animation animation-style2">
        <div className="section-title__tagline-box">
          <span className="section-title__tagline">Latest Blog And News</span>
        </div>
        <h2 className="section-title__title title-animation">
          Our Best Recent Blog And News
        </h2>
      </div>
      <div className="blog-one__btn-box">
        <a href="blog.html" className="thm-btn">
          View More
          <span className="icon-arrow-up-right" />
        </a>
      </div>
    </div>
    <div className="blog-one__bottom">
      <div className="row">
        {/*Blog One Single Start */}
        <div
          className="col-xl-4 col-lg-6 wow fadeInLeft"
          data-wow-delay="100ms"
        >
          <div className="blog-one__single">
            <div className="blog-one__img">
              <img src="/blog/blog-1-1.jpg" alt="" />
            </div>
            <div className="blog-one__content">
              <div className="blog-one__date">
                <p>
                  10 <br />
                  OCT
                </p>
              </div>
              <ul className="blog-one__meta list-unstyled">
                <li>
                  <a href="blog-details.html">
                    <span className="icon-user" />
                    By admin
                  </a>
                </li>
                <li>
                  <a href="blog-details.html">
                    <span className="icon-comments" />0 Comment
                  </a>
                </li>
              </ul>
              <h3 className="blog-one__title">
                <a href="blog-details.html">
                  Your Trusted Car Service Provider Keeping
                </a>
              </h3>
              <div className="blog-one__read-more">
                <a href="blog-details.html">
                  Read more <span className="icon-arrow-up-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*Blog One Single End */}
        {/*Blog One Single Start */}
        <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="200ms">
          <div className="blog-one__single">
            <div className="blog-one__img">
              <img src="/blog/blog-1-2.jpg" alt="" />
            </div>
            <div className="blog-one__content">
              <div className="blog-one__date">
                <p>
                  15 <br />
                  OCT
                </p>
              </div>
              <ul className="blog-one__meta list-unstyled">
                <li>
                  <a href="blog-details.html">
                    <span className="icon-user" />
                    By admin
                  </a>
                </li>
                <li>
                  <a href="blog-details.html">
                    <span className="icon-comments" />0 Comment
                  </a>
                </li>
              </ul>
              <h3 className="blog-one__title">
                <a href="blog-details.html">
                  Drive Stress-Free Professional Care for Your Car
                </a>
              </h3>
              <div className="blog-one__read-more">
                <a href="blog-details.html">
                  Read more <span className="icon-arrow-up-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*Blog One Single End */}
        {/*Blog One Single Start */}
        <div
          className="col-xl-4 col-lg-6 wow fadeInRight"
          data-wow-delay="300ms"
        >
          <div className="blog-one__single">
            <div className="blog-one__img">
              <img src="/blog/blog-1-3.jpg" alt="" />
            </div>
            <div className="blog-one__content">
              <div className="blog-one__date">
                <p>
                  20 <br />
                  OCT
                </p>
              </div>
              <ul className="blog-one__meta list-unstyled">
                <li>
                  <a href="blog-details.html">
                    <span className="icon-user" />
                    By admin
                  </a>
                </li>
                <li>
                  <a href="blog-details.html">
                    <span className="icon-comments" />0 Comment
                  </a>
                </li>
              </ul>
              <h3 className="blog-one__title">
                <a href="blog-details.html">
                  Reliable Roadside Assistance SpeedySpark Car Care
                </a>
              </h3>
              <div className="blog-one__read-more">
                <a href="blog-details.html">
                  Read more <span className="icon-arrow-up-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*Blog One Single End */}
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default LatestBlog