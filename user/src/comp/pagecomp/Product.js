import React, { useContext, useEffect, useState } from "react";
import Context from "../all/Context";
import Autocreatedatabase from "../all/Autocreatedatabase";

export default function Product(props) {
  // props.totalitemset(0)
  let [show, insert] = useContext(Context);
  let [insertdata, setinsertdata] = useState([]);
  useEffect(() => {
    setinsertdata(show.api);
  }, [show]);
  function fetchdata() {
    let user = JSON.parse(sessionStorage.getItem("details"));
    let details = `${user.User}_${user.pass}`;

    let obj = {
      database: "usedatabase",
      table: details,
    };

    Autocreatedatabase(obj, "user", "get").then((data) => {
      let activedata = data.filter((element) => {
        return element.carts == "active";
      });
      props.totalitemset(activedata.length);
      sessionStorage.setItem("carts", JSON.stringify(activedata.length));
      setinsertdata(data);
    });
  }

  let addcart = (e) => {
    let user = JSON.parse(sessionStorage.getItem("details"));
    let details = `${user.User}_${user.pass}`;

    let obj = {
      database: "usedatabase",
      table: details,
      // list: [...Object.keys(show.api[0]), "carts"]
    };
    let obj1 = {
      database: "ecom",
      table: "product",
    };

    Autocreatedatabase(obj1, "user", "get").then((data) => {
      let AllDetails = data.filter((data) => data.id == e.target.id);
      // fetchdata()

      obj.list = Object.keys(AllDetails[0]);
      let removeid = obj.list.indexOf("id");
      obj.list.splice(removeid, 1);
      Autocreatedatabase(obj, "user", "post", {
        ...AllDetails[0],
        carts: "active",
        items: "1",
      }).then((data) => {
        window.location.reload();
      });
    });

    // , { data: { carts: "active", items: "1" }, ids: e.target.id }
  };
  function removecart(e) {
    console.log(e.target);
    let user = JSON.parse(sessionStorage.getItem("details"));
    let details = `${user.User}_${user.pass}`;
    let obj = {
      database: "usedatabase",
      table: details,
      // list: [...Object.keys(props.insertdata[0]), "carts"]
    };
    Autocreatedatabase(obj, "user", "delete", { ids: e.target.id }).then(
      (datas) => {
        window.location.reload();

        // fetchdata()
        // setinsertdata(datas)
      }
    );
  }

  // code for cart end
  return (
    // <></>
    <div>
      <div className="tp-shop-items-wrapper tp-shop-item-primary">
        <div className="tab-content" id="productTabContent">
          <div
            className="tab-pane fade show active"
            id="list-tab-pane"
            role="tabpanel"
            aria-labelledby="list-tab"
            tabIndex={0}
          >
            <div className="tp-shop-list-wrapper tp-shop-item-primary mb-70">
              <div className="row">
                <div className="col-xl-12">
                  {
                    //
                    insertdata.map((AllItems, index) => {
                      console.log(AllItems);
                      const hasImages =
                        AllItems.Image && AllItems.Image.length > 0;
                      if (AllItems.Status == "enable")
                        if (AllItems.carts == "active") {
                          return (
                            <div
                              className="tp-product-list-item d-md-flex"
                              key={index}
                            >
                              <div className="tp-product-list-thumb p-relative fix">
                                <a href="#">
                                  {/* {hasImages && <img src={JSON.parse(AllItems.Image).url} alt={AllItems.Productname} style={{ width: "300px" }} />} */}

                                  <img
                                    src={AllItems.Image[0].url}
                                    alt={AllItems.Productname}
                                    style={{ width: "300px" }}
                                  />
                                  {/* {hasImages && <img src={AllItems.Image[0].url} alt={AllItems.Productname} style={{ width: "300px" }} />} */}
                                </a>
                              </div>
                              <div className="tp-product-list-content">
                                <div className="tp-product-content-2 pt-15">
                                  <div className="tp-product-tag-2">
                                    <a href="#">{AllItems.Categories}</a>
                                  </div>
                                  <h3 className="tp-product-title-2">
                                    <a href="product-details.html">
                                      {AllItems.Productname}
                                    </a>
                                  </h3>
                                  <div className="tp-product-rating-icon tp-product-rating-icon-2">
                                    <span>
                                      <i className="fa-solid fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa-solid fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa-solid fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa-solid fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa-solid fa-star" />
                                    </span>
                                  </div>
                                  <div className="tp-product-price-wrapper-2">
                                    <span className="tp-product-price-2 new-price">
                                      {AllItems.Currency}
                                      {AllItems.Product_Price}
                                    </span>
                                    <span className="tp-product-price-2 old-price">
                                      {AllItems.Currency}99.00
                                    </span>
                                  </div>
                                  <p>{AllItems.description}</p>
                                  {/* <div className="tp-product-list-add-to-cart"> */}
                                  {/* <button className="tp-product-list-add-to-cart-btn addcart" id={AllItems.id} onClick={addcart}>Add To Cart</button> */}
                                  <button
                                    className="tp-product-list-add-to-cart-btn bg-danger removecart "
                                    id={AllItems.id}
                                    onClick={removecart}
                                  >
                                    Remove
                                  </button>
                                  {/* </div> */}
                                </div>
                              </div>
                            </div>
                          );
                        } else
                          return (
                            <div
                              className="tp-product-list-item d-md-flex"
                              key={index}
                            >
                              <div className="tp-product-list-thumb p-relative fix">
                                <a href="#">
                                  <img
                                    src={AllItems.Image[0].url}
                                    alt={AllItems.Productname}
                                    style={{ width: "300px" }}
                                  />
                                  {/* {hasImages && <img src={JSON.parse(AllItems.Image).url} alt={AllItems.Productname} style={{ width: "300px" }} />} */}
                                </a>
                              </div>
                              <div className="tp-product-list-content">
                                <div className="tp-product-content-2 pt-15">
                                  <div className="tp-product-tag-2">
                                    <a href="#">{AllItems.Categories}</a>
                                  </div>
                                  <h3 className="tp-product-title-2">
                                    <a href="product-details.html">
                                      {AllItems.Productname}
                                    </a>
                                  </h3>
                                  <div className="tp-product-rating-icon tp-product-rating-icon-2">
                                    <span>
                                      <i className="fa-solid fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa-solid fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa-solid fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa-solid fa-star" />
                                    </span>
                                    <span>
                                      <i className="fa-solid fa-star" />
                                    </span>
                                  </div>
                                  <div className="tp-product-price-wrapper-2">
                                    <span className="tp-product-price-2 new-price">
                                      {AllItems.Currency}
                                      {AllItems.Product_Price}
                                    </span>
                                    <span className="tp-product-price-2 old-price">
                                      {AllItems.Currency}99.00
                                    </span>
                                  </div>
                                  <p>{AllItems.description}</p>
                                  {/* <div className="tp-product-list-add-to-cart"> */}
                                  <button
                                    className="tp-product-list-add-to-cart-btn addcart"
                                    id={AllItems.id}
                                    onClick={addcart}
                                  >
                                    Add To Cart
                                  </button>
                                  {/* <button className="tp-product-list-add-to-cart-btn bg-danger removecart " id={AllItems.id} onClick={removecart}>Remove</button> */}
                                  {/* </div> */}
                                </div>
                              </div>
                            </div>
                          );
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
