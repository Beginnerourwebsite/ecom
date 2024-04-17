import React, { useEffect, useState } from 'react'
import Autocreatedatabase from "../all/Autocreatedatabase"
import Navbar from '../all/Navbar'
import { useNavigate } from 'react-router-dom'
export default function Cartchild() {

  let [totalamounts, settotalamounts] = useState(0)
  let [insertdata, setinsertdata] = useState([])
  let [totalitemget, settotalitemset] = useState(0)

  function fetchdata() {
    let user = JSON.parse(sessionStorage.getItem("details"))
    let details = `${user.User}_${user.pass}`
    // setinsertdata(show.api)
    // 

    let obj = {
      database: "usedatabase",
      table: details,

    }
    Autocreatedatabase(obj, "user", "get", { carts: 'active' }).then(data => {
      setinsertdata(data)
      settotalitemset(data.length)
      sessionStorage.setItem("carts", JSON.stringify(data.length))
      let amount = 0
      data.map(elememt => {
        amount = (parseInt(elememt.Product_Price) * parseInt(elememt.items)) + amount
      })
      settotalamounts(amount)
      // document.cookie=`102920383982848=${amount}`


    })
  }
  useEffect(() => {
    setTimeout(() => {
      console.clear()
      fetchdata()
    }, 1000)
    fetchdata()
  }, [])




  function removecart(e) {
    let user = JSON.parse(sessionStorage.getItem("details"))
    let details = `${user.User}_${user.pass}`
    let obj = {
      database: "usedatabase",
      table: details,
      // list: [...Object.keys(props.insertdata[0]), "carts"]
    }
    Autocreatedatabase(obj, "user", "delete", { ids: e.target.id }).then(datas => {

      window.location.reload()
      // fetchdata()
      // setinsertdata(datas)
    })

  }


  function plus(e) {

    let selftag = e.target.id
    let price = document.getElementById(`${selftag}0`)
    let numberItem = document.getElementById(`${selftag}1`)
    let totalprice = document.getElementById(`${selftag}2`)
    numberItem.value = parseInt(numberItem.value) + 1

    totalprice.innerHTML = parseInt(price.innerHTML) * parseInt(numberItem.value)

    settotalamounts(totalamounts + (parseInt(price.innerHTML) * parseInt(numberItem.value)))


    let user = JSON.parse(sessionStorage.getItem("details"))
    let details = `${user.User}_${user.pass}`
    let obj = {
      database: "usedatabase",
      table: details,
      // list: [...Object.keys(props.insertdata[0]), "carts"]
    }
    Autocreatedatabase(obj, "user", "put", { data: { items: numberItem.value }, ids: e.target.id })

  }
  function minus(e) {

    let selftag = e.target.id
    let price = document.getElementById(`${selftag}0`)
    let numberItem = document.getElementById(`${selftag}1`)
    let totalprice = document.getElementById(`${selftag}2`)

    if (numberItem.value > 1) {


      numberItem.value = parseInt(numberItem.value) - 1

      totalprice.innerHTML = parseInt(price.innerHTML) * parseInt(numberItem.value)
      //{ data: { carts: "" }, ids: e.target.id }
      settotalamounts(totalamounts - (parseInt(price.innerHTML) * parseInt(numberItem.value)))

      let user = JSON.parse(sessionStorage.getItem("details"))
      let details = `${user.User}_${user.pass}`
      let obj = {
        database: "usedatabase",
        table: details,
        // list: [...Object.keys(props.insertdata[0]), "carts"]
      }
      Autocreatedatabase(obj, "user", "put", { data: { items: "1" }, ids: e.target.id })
    }


  }
  let naviagte = useNavigate()
  function checkout() {
    naviagte("/checkout")

  }
  return (
    <div>
      <Navbar totalitemget={totalitemget} />
      <main>
        {/* breadcrumb area start */}

        <section className="breadcrumb__area include-bg pt-95 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="breadcrumb__content p-relative z-index-1">
                  <h3 className="breadcrumb__title">Shopping Cart</h3>
                  <div className="breadcrumb__list">
                    <span><a href="#">Home</a></span>
                    <span>Shopping Cart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb area end */}
        {/* cart area start */}
        <section className="tp-cart-area pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8">
                <div className="tp-cart-list mb-25 mr-30">
                  <table className="table">
                    <thead>
                      <tr>
                        <th colSpan={2} className="tp-cart-header-product">Product</th>
                        <th className="tp-cart-header-price">Price</th>
                        <th className="tp-cart-header-quantity">Quantity</th>
                        <th className="tp-cart-header-quantity">Total price</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {
                        insertdata.map(AllItems => {

                          const hasImages = AllItems.Image && AllItems.Image.length > 0;
                          if (AllItems.items != "") {


                            return (
                              <tr>
                                {/* img */}
                                {/* {hasImages && <img src={JSON.parse(AllItems.Image).url} alt={AllItems.Productname} style={{ width: "300px" }} />} */}

                                {/* <img src={AllItems.Image[0].url} alt={AllItems.Productname} style={{ width: "300px" }} /> */}
                                {/* <td className="tp-cart-img"><a href="product-details.html"> <img src="assets/img/product/cart/product-cart-1.jpg" alt /></a></td> */}
                                <td className="tp-cart-img"><a href="product-details.html">
                                  {hasImages && <img src={JSON.parse(AllItems.Image).url} alt={AllItems.Productname} />}

                                </a></td>
                                {/* title */}
                                <td className="tp-cart-title"><a href="product-details.html">{AllItems.Productname}</a></td>
                                {/* price */}
                                <td className="tp-cart-price">{AllItems.Currency}<span id={`${AllItems.id}0`}>{AllItems.Product_Price}</span></td>
                                {/* quantity */}
                                <td className="tp-cart-quantity">
                                  <div className="tp-product-quantity mt-10 mb-10">
                                    <span className="tp-cart-minus" onClick={minus} id={AllItems.id}>
                                      -
                                    </span>
                                    <input className="tp-cart-input" type="text" id={`${AllItems.id}1`} defaultValue={AllItems.items} />
                                    <span className="tp-cart-plus" onClick={plus} id={AllItems.id}>+</span>
                                  </div>
                                </td>
                                <td className="tp-cart-price">{AllItems.Currency}<span id={`${AllItems.id}2`}>{AllItems.Product_Price}</span></td>

                                {/* action */}
                                <td className="tp-cart-action" >
                                  <button className="tp-cart-action-btn" id={AllItems.id} onClick={removecart}>
                                    <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M9.53033 1.53033C9.82322 1.23744 9.82322 0.762563 9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967L5 3.93934L1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L3.93934 5L0.46967 8.46967C0.176777 8.76256 0.176777 9.23744 0.46967 9.53033C0.762563 9.82322 1.23744 9.82322 1.53033 9.53033L5 6.06066L8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033C9.82322 9.23744 9.82322 8.76256 9.53033 8.46967L6.06066 5L9.53033 1.53033Z" fill="currentColor" />
                                    </svg>
                                    <span id={AllItems.id} onClick={removecart}>Remove</span>
                                  </button>
                                </td>
                              </tr>
                            )
                          }
                        })
                      }

                    </tbody>
                  </table>
                </div>
                {/* <div className="tp-cart-bottom">
                  <div className="row align-items-end">
                    <div className="col-xl-6 col-md-8">
                      <div className="tp-cart-coupon">
                        <form action="#">
                          <div className="tp-cart-coupon-input-box">
                            <label>Coupon Code:</label>
                            <div className="tp-cart-coupon-input d-flex align-items-center">
                              <input type="text" placeholder="Enter Coupon Code" />
                              <button type="submit">Apply</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-4">
                      <div className="tp-cart-update text-md-end">
                        <button type="button" className="tp-cart-update-btn">Update Cart</button>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-cart-checkout-wrapper">
                  <div className="tp-cart-checkout-top d-flex align-items-center justify-content-between">
                    <span className="tp-cart-checkout-top-title">Subtotal</span>
                    <span className="tp-cart-checkout-top-price">{totalamounts}</span>
                  </div>


                  <div className="tp-cart-checkout-proceed">
                    <button onClick={checkout} className="tp-cart-checkout-btn w-100">Proceed to Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* cart area end */}
      </main>
    </div>

  )
}
