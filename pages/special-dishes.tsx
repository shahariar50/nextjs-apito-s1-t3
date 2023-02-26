import MainLayout from "components/layout/MainLayout";

const SpecialDishes = () => {
  return (
    <MainLayout>
      <section id="gtco-special-dishes" className="bg-grey section-padding">
        <div className="container">
          <div className="section-content">
            <div className="heading-section text-center">
              <span className="subheading">Specialties</span>
              <h2>Special Dishes</h2>
            </div>
            <div className="row mt-5">
              <div className="col-lg-5 col-md-6 align-self-center py-5">
                <h2 className="special-number">01.</h2>
                <div className="dishes-text">
                  <h3>
                    <span>Beef</span>
                    <br /> Steak Sauce
                  </h3>
                  <p className="pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate, ea vero alias perferendis quas animi doloribus
                    voluptates. Atque explicabo ea nesciunt provident libero qui
                    eum, corporis esse quos excepturi soluta?
                  </p>
                  <h3 className="special-dishes-price">$15.00</h3>
                  <a href="#" className="btn-primary mt-3">
                    book a table
                  </a>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-2 col-md-6 align-self-center mt-4 mt-md-0">
                <picture>
                  <img
                    src="/static/img/steak.jpg"
                    alt=""
                    className="img-fluid shadow w-100"
                  />
                </picture>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-5 col-md-6 align-self-center order-2 order-md-1 mt-4 mt-md-0">
                <picture>
                  <img
                    src="/static/img/salmon-zucchini.jpg"
                    alt=""
                    className="img-fluid shadow w-100"
                  />
                </picture>
              </div>
              <div className="col-lg-5 offset-lg-2 col-md-6 align-self-center order-1 order-md-2 py-5">
                <h2 className="special-number">02.</h2>
                <div className="dishes-text">
                  <h3>
                    <span>Salmon</span>
                    <br /> Zucchini
                  </h3>
                  <p className="pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis, accusamus culpa quam amet ipsam odit ea
                    doloremque accusantium quo, itaque possimus eius. In a quis
                    quibusdam omnis atque vero dolores!
                  </p>
                  <h3 className="special-dishes-price">$12.00</h3>
                  <a href="#" className="btn-primary mt-3">
                    book a table{" "}
                    <span>
                      <i className="fa fa-long-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SpecialDishes;
