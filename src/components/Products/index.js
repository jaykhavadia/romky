import React from "react";
import { useNavigate } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Strawberry Ice Cream", price: 10, image: "images/img-1.png" },
  { id: 2, name: "Chocolate Ice Cream", price: 12, image: "images/img-2.png" },
  { id: 3, name: "Vanilla Ice Cream", price: 9, image: "images/img-3.png" },
  { id: 4, name: "Mango Ice Cream", price: 11, image: "images/img-4.png" },
  { id: 5, name: "Blueberry Ice Cream", price: 10, image: "images/img-5.png" },
  { id: 6, name: "Pistachio Ice Cream", price: 13, image: "images/img-1.png" },
];

function Products() {
  const navigate = useNavigate();

  const saveDataInLocalStorage = (product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate("/checkout");
  };

  return (
    <div className="cream_section layout_padding mb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="cream_taital">Our Featured Ice Cream</h1>
            <p className="cream_text">
              Tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div className="cream_section_2">
          <div className="row">
            {sampleProducts.map((product) => (
              <div key={product.id} className="col-sm-4">
                <div className="cream_box">
                  <div className="cream_img">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="price_text">${product.price}</div>
                  <h6 className="strawberry_text">{product.name}</h6>
                  <div className="cart_bt">
                    <button
                      onClick={() => saveDataInLocalStorage(product)}
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
        {/* <div className="seemore_bt">
          <a href="#">See More</a>
        </div> */}
      </div>
    </div>
  );
}

export default Products;
