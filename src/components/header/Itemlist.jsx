import { useContext, useEffect, useState } from "react";
import Cart from "./Cart";
import { CartContext } from "../store/CartContext";
import Filter from "./Filter";

const Itemlist = () => {
  const ctx = useContext(CartContext);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (event) => {
    const input = event.target.value;
    setSearchInput(input);
    ctx.searchData(input);
  };

  return (
    <>
      <section className="cardE_sec">
        <div className="container_box">
          <div className="cardcompont_row">
            <div>
              <input
                type="text"
                value={searchInput}
                onChange={handleSearch}
                placeholder="Search for items..."
              />
              <button
                data-toggle="modal"
                data-target="#exampleModalratingfilterr"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-funnel"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
                </svg>
              </button>
              <button data-toggle="modal" data-target="#exampleModalfilterr">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
                {ctx.itemsInCart}
              </button>
            </div>
          </div>
          <div className="cardcompont_row">
            {ctx?.items?.map((item, idx) => (
              <div className="cardcompont" key={idx}>
                <div className="crad_img">
                  <img src={item?.image} alt="acrd" />
                </div>
                <div className="info_box">
                  <p>{item?.title}</p>
                  <span>
                    price <strong> ${item?.price}</strong>
                  </span>
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
                    </strong>{" "}
                    <strong> {item?.rating?.rate}</strong>
                  </p>
                  <span>
                    <button
                      onClick={() => {
                        ctx.addItems(item);
                      }}
                    >
                      add to cart
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cart />
      <Filter />
    </>
  );
};

export default Itemlist;
