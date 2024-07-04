import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../store/CartContext";

const Filter = () => {
  const ctx = useContext(CartContext);
  const [inputs, setInputs] = useState({
    rating: 0,
    price: 0,
  });

  const handleOnChange = (e) => {
    setInputs((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    ctx.filter(inputs.rating, inputs.price);
  }, [inputs.rating, inputs.price]);


  return (
    <>
      <div
        className="modal fade"
        id="exampleModalratingfilterr"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
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
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="exampleFormControlSelect1">Rating</label>
                  <div class="form-group">
                    <select
                      class="form-control"
                      id="exampleFormControlSelect1"
                      name="rating"
                      value={inputs?.rating}
                      onChange={handleOnChange}
                    >
                       <option value="0">selcet</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div class="valid-tooltip">Looks good!</div>
                </div>{" "}
                <div class="col-md-4 mb-3">
                  <label for="exampleFormControlSelect1">Price</label>
                  <div class="form-group">
                    <select
                      class="form-control"
                      id="exampleFormControlSelect1"
                      name="price"
                      value={inputs?.price}
                      onChange={handleOnChange}
                    >
                     
                      <option value="0">select</option>
                      <option value="10">10 & Below</option>
                      <option value="50">10-50</option>
                      <option value="100">50-100</option>
                      <option value="101">100 & above</option>
                    
                    </select>
                  </div>
                  <div class="valid-tooltip">Looks good!</div>
                </div>
              </div>
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

export default Filter;
