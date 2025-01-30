import React from "react";
import {
  featuredIceCreams,
  services,
  slides,
  testimonials,
} from "../../sample/Data";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const saveDataInLocalStorage = (product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate("/checkout");
  };
  return (
    <div>
      {/* Header Section */}
      <div className="header_section">
        <section className="hero-section">
          <div className="container">
            <div
              id="heroCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              {/* Carousel Indicators */}
              <ol className="carousel-indicators">
                {slides.map((_, index) => (
                  <li
                    key={index}
                    data-bs-target="#heroCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                  >
                    {`0${index + 1}`}
                  </li>
                ))}
              </ol>

              {/* Carousel Inner */}
              <div className="carousel-inner">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <div className="row align-items-center">
                      <div className="col-12 col-sm-6">
                        <h1 className="banner-title">{slide.title}</h1>
                        <p className="banner-text">{slide.text}</p>
                        <div className="started-text">
                          <a href="#" className="btn btn-pink">
                            Order Now
                          </a>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="banner-img">
                          <img
                            src={slide.img}
                            className="img-fluid"
                            alt={slide.title}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="about_img">
                <img src="images/about-img.png" className="img-fluid" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <h1 className="about_taital">About Icecream</h1>
              <p className="about_text">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore euconsectetur adipiscing
                esequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu
              </p>
              <div className="read_bt_1">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Ice Cream Section */}
      <div className="cream_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="cream_taital">Our Featured Ice Cream</h1>
              <p className="cream_text">
                tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
          <div className="cream_section_2">
            <div className="row">
              {featuredIceCreams.map((iceCream, index) => (
                <div className="col-12 col-sm-6 col-sm-4" key={index}>
                  <div className="cream_box">
                    <div className="cream_img">
                      <img
                        src={iceCream.image}
                        alt={iceCream.name}
                        className="img-fluid"
                      />
                    </div>
                    <div className="price_text">{iceCream.price}</div>
                    <h6 className="strawberry_text">{iceCream.name}</h6>
                    <div className="cart_bt">
                      <button
                        onClick={() => saveDataInLocalStorage(iceCream)}
                        className="btn btn-primary"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="seemore_bt">
            <a href="/products">See More</a>
          </div>
        </div>
      </div>

      {/* Ice Cream Services Section */}
      <div className="services_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="services_taital">Our Ice Cream Services</h1>
              <p className="services_text">
                tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
          <div className="services_section_2">
            <div className="row">
              {services.map((service, index) => (
                <div className="col-12 col-sm-6 col-sm-4" key={index}>
                  <div className="services_box">
                    <h5 className="tasty_text">
                      <span className="icon_img">
                        <img src={service.icon} alt={service.title} />
                      </span>
                      {service.title}
                    </h5>
                    <p className="lorem_text">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="seemore_bt">
            <a href="/products">Read More</a>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="testimonial_taital">Testimonial</h1>
            </div>
          </div>
          <div className="testimonial_section_2">
            <div className="row">
              <div className="col-12">
                <div className="">
                  <div
                    id="main_slider"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      {testimonials.map((testimonial, index) => (
                        <div
                          className={`carousel-item ${
                            index === 0 ? "active" : ""
                          }`}
                          key={index}
                        >
                          <p className="testimonial_text">{testimonial.text}</p>
                          <h4 className="client_name">{testimonial.name}</h4>
                          <div className="client_img">
                            <img
                              src={testimonial.image}
                              alt={`${testimonial.name}`}
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* <a
                      className="carousel-control-prev"
                      href="#main_slider"
                      role="button"
                      data-slide="prev"
                    >
                      <i className="fa fa-angle-left"></i>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#main_slider"
                      role="button"
                      data-slide="next"
                    >
                      <i className="fa fa-angle-right"></i>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
