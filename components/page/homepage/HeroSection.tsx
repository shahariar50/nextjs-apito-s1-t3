const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 hero-left">
            <h1 className="display-4 mb-5">
              We Love <br />
              Delicious Foods!
            </h1>
            <div className="mb-2">
              <a
                className="btn btn-primary btn-shadow btn-lg"
                href="#"
                role="button"
              >
                Explore Menu
              </a>
              <a
                className="btn btn-icon btn-lg"
                href="https://player.vimeo.com/video/33110953"
                data-featherlight="iframe"
                data-featherlight-iframe-allowfullscreen="true"
              >
                <span className="lnr lnr-film-play"></span>
                Play Video
              </a>
            </div>

            <ul className="hero-info list-unstyled d-flex text-center mb-0">
              <li className="border-right">
                <span className="lnr lnr-rocket"></span>
                <h5>Fast Delivery</h5>
              </li>
              <li className="border-right">
                <span className="lnr lnr-leaf"></span>
                <h5>Fresh Food</h5>
              </li>
              <li className="">
                <span className="lnr lnr-bubble"></span>
                <h5>24/7 Support</h5>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 hero-right">
            <div className="owl-carousel owl-theme hero-carousel">
              <div className="item">
                <picture>
                  <img
                    className="img-fluid"
                    src="/static/img/hero-1.jpg"
                    alt=""
                  />
                </picture>
              </div>
              {/* <div className="item">
                <picture>
                  <img
                    className="img-fluid"
                    src="/static/img/hero-2.jpg"
                    alt=""
                  />
                </picture>
              </div>
              <div className="item">
                <picture>
                  <img
                    className="img-fluid"
                    src="/static/img/hero-3.jpg"
                    alt=""
                  />
                </picture>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
