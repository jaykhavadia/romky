import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"; // Custom styles
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS

const states = ["California", "Texas", "New York"];
const cities = {
  California: ["Los Angeles", "San Diego", "San Francisco"],
  Texas: ["Houston", "Dallas", "Austin"],
  New_York: ["New York City", "Buffalo", "Rochester"],
};

const Checkout = () => {
  const navigate = useNavigate();
  const { image, name, price } =
    JSON.parse(localStorage.getItem("selectedProduct")) || {};

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    pincode: "",
    otp: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setFormData({ ...formData, state: selectedState, city: "" }); // Reset city when state changes
  };

  const sendOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    alert(`OTP Sent: ${otp}`);
    setOtpSent(true);
  };

  const verifyOtp = () => {
    if (formData.otp === generatedOtp) {
      alert("OTP Verified!");
      navigate("/payment");
    } else {
      alert("Incorrect OTP. Try again!");
    }
  };

  return (
    <div className="container my-5 py-5">
      <section>
        <div className="row">
          {/* Left Product Details Section */}
          <div className="col-sm-4 mb-4 position-static">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0 text-font">1 item</h5>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-center ">
                  <div className="col-sm-4">
                    <img
                      src={image}
                      className="rounded-3"
                      style={{ width: "100px" }}
                      alt={name}
                    />
                  </div>
                  <div className="col-sm-6 ms-3">
                    <span className="mb-0 text-price">${price}</span>
                    <p className="mb-0 text-descriptions">{name}</p>
                    <span className="text-descriptions fw-bold">
                      Black
                    </span>{" "}
                    <span className="text-descriptions fw-bold">UK 8</span>
                    <p className="text-descriptions mt-0">
                      Qty:<span className="text-descriptions fw-bold">1</span>
                    </p>
                  </div>
                </div>
                <div className="card-footer mt-4">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 text-muted">
                      Subtotal <span>${price}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0 fw-bold text-uppercase">
                      Total to pay <span>${price}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Delivery Address Section */}
          <div className="col-md-8 mb-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0 text-font text-uppercase">
                  Delivery address
                </h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="formFirstName"
                          className="form-control"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                        <label className="form-label" htmlFor="formFirstName">
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="formLastName"
                          className="form-control"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                        <label className="form-label" htmlFor="formLastName">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="formAddress"
                      className="form-control"
                      name="address1"
                      value={formData.address1}
                      onChange={handleInputChange}
                    />
                    <label className="form-label" htmlFor="formAddress">
                      Address
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="formEmail"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <label className="form-label" htmlFor="formEmail">
                      Email
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="number"
                      id="formPhone"
                      className="form-control"
                      name="number"
                      value={formData.number}
                      onChange={handleInputChange}
                    />
                    <label className="form-label" htmlFor="formPhone">
                      Phone
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <textarea
                      className="form-control"
                      id="formMessage"
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                    <label className="form-label" htmlFor="formMessage">
                      Additional information
                    </label>
                  </div>
                </form>
              </div>
            </div>

            {/* OTP Section */}
            <div className="text-center">
              {!otpSent ? (
                <button
                  type="button"
                  className="btn button-order col-md-10"
                  onClick={sendOtp}
                >
                  Send OTP
                </button>
              ) : (
                <div>
                  <input
                    type="text"
                    id="otp"
                    className="form-control mb-3"
                    name="otp"
                    placeholder="Enter OTP"
                    value={formData.otp}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    className="btn button-order col-md-10"
                    onClick={verifyOtp}
                  >
                    Verify OTP
                  </button>
                </div>
              )}
            </div>

            {/* Place Order Button */}
            <div className="text-center mt-4">
              <button
                type="button"
                className="btn button-order col-md-10"
                onClick={() => alert("Order Placed!")}
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
