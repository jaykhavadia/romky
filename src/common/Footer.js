import React from "react";

function Footer() {
  return (
    <div>
      <div className="contact_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact_main">
                <h1 className="contact_taital">Contact Us</h1>
                <form action="/">
                  <div className="form-group">
                    <input
                      type="text"
                      className="email-bt"
                      placeholder="Name"
                      name="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="email-bt"
                      placeholder="Email"
                      name="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="email-bt"
                      placeholder="Phone Numbar"
                      name="Email"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="massage-bt"
                      placeholder="Massage"
                      rows="5"
                      id="comment"
                      name="Massage"
                    ></textarea>
                  </div>
                </form>
                <div className="main_bt">
                  <a href="/">SEND</a>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="location_text">
                <ul>
                  <li>
                    <a href="#">
                      <span className="padding_left_10 active">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                      </span>
                      Making this the first true
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="padding_left_10">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                      </span>
                      Call : +01 1234567890
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="padding_left_10">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                      </span>
                      Email : demo@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mail_main">
                <h3 className="newsletter_text">Newsletter</h3>
                <div className="form-group">
                  <textarea
                    className="update_mail"
                    placeholder="Enter Your Email"
                    rows="5"
                    id="comment"
                    name="Enter Your Email"
                  ></textarea>
                  <div className="subscribe_bt">
                    <a href="#">Subscribe</a>
                  </div>
                </div>
              </div>
              <div className="footer_social_icon">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">
            2020 All Rights Reserved. Design by{" "}
            <a href="https://html.design">Free Html Templates</a> Distribution
            by <a href="https://themewagon.com">ThemeWagon</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
