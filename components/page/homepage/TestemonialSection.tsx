import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const TestemonialSection = () => {
  return (
    <section
      id="gtco-testimonial"
      className="overlay bg-fixed section-padding"
      style={{ backgroundImage: "url(/static/img/testi-bg.jpg)" }}
    >
      <div className="container">
        <div className="section-content">
          <div className="heading-section text-center">
            <span className="subheading">Testimony</span>
            <h2>Happy Customer</h2>
          </div>
          <div className="row">
            <Swiper
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              pagination={true}
              className="testi-content testi-carousel"
            >
              <SwiperSlide className="testi-item">
                <i className="testi-icon fa fa-3x fa-quote-left"></i>
                <p className="testi-text">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="testi-author">John Doe</p>
                <p className="testi-desc">
                  CEO of <span>GetTemplates</span>
                </p>
              </SwiperSlide>
              <SwiperSlide className="testi-item">
                <i className="testi-icon fa fa-3x fa-quote-left"></i>
                <p className="testi-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci non doloribus ut, alias doloremque perspiciatis.
                </p>
                <p className="testi-author">Mary Jane</p>
                <p className="testi-desc">
                  CTO of <span>Unidentity Inc</span>
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestemonialSection;
