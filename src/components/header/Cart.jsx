import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";

const Cart = () => {
  const ctx = useContext(CartContext);
  const totalPrice = ctx.catrtItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const roundedTotalPrice = totalPrice.toFixed(2);
  return (
    <>
      {" "}
      <div
        className="modal fade"
        id="exampleModalfilterr"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Cart
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {ctx.catrtItems.length > 0 ? (
                ctx?.catrtItems?.map((item, idx) => (
                  <div
                    className="cardcomponts"
                    style={{ display: "flex" }}
                    key={idx}
                  >
                    <div className="crad_img">
                      <img src={item?.image} alt="acrd" />
                    </div>
                    <div className="info_box">
                      <p>{item?.title}</p>
                      <div className="cardpuless" style={{ marginTop: "20px" }}>
                        <span>
                          price <strong> ${item?.price}</strong>
                        </span>
                        <span>
                          <button
                            onClick={() => {
                              ctx.addItems(item);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="19"
                              height="19"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#3a6e00"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="bevel"
                            >
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                          </button>{" "}
                          <button>{item?.quantity}</button>{" "}
                          <button
                            onClick={() => {
                              ctx.reduced(item);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="19"
                              height="19"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#d0021b"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="bevel"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                          </button>
                        </span>
                      </div>
                      <p>
                        Rate{" "}
                        <strong>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#f5a623"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="bevel"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        </strong>
                        {item?.rating?.rate}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <button data-dismiss="modal">Add Item to Cart</button>
              )}
              <div>Total Price: {roundedTotalPrice}</div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
