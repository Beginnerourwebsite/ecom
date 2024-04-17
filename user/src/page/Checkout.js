import React, { useState } from 'react'
import Navbar from '../comp/all/Navbar'
import CheckOutchild from '../comp/pagecomp/CheckOutchild'

export default function Checkout() {
  let [inputBoxValue, setinputBoxValue] = useState({})
  function inputvalue(e) {
    setinputBoxValue({ ...inputBoxValue, [e.target.id]: e.target.value })
  }
  return (
    <div>
      <Navbar />
      <main>
        {/* breadcrumb area start */}
        <section className="breadcrumb__area include-bg pt-95 pb-50" data-bg-color="#EFF1F5">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="breadcrumb__content p-relative z-index-1">
                  <h3 className="breadcrumb__title">Checkout</h3>
                  <div className="breadcrumb__list">
                    <span><a href="#">Home</a></span>
                    <span>Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb area end */}
        {/* checkout area start */}
        <section className="tp-checkout-area pb-120" data-bg-color="#EFF1F5">
          <div className="container">
            <div className="row">

              <div className="col-lg-7">
                <div className="tp-checkout-bill-area">
                  <h3 className="tp-checkout-bill-title">Billing Details</h3>
                  <div className="tp-checkout-bill-form">
                    <form action="#">
                      <div className="tp-checkout-bill-inner">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="tp-checkout-input">
                              <label>First Name <span>*</span></label>
                              <input onChange={inputvalue} id='Fname' type="text" placeholder="First Name" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="tp-checkout-input">
                              <label>Last Name <span>*</span></label>
                              <input onChange={inputvalue} id="Lname" type="text" placeholder="Last Name" />
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="tp-checkout-input">
                              <label>Country / Region </label>
                              <input type="text" onChange={inputvalue} id="Country" placeholder="India" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="tp-checkout-input">
                              <label>Street address</label>
                              <input type="text" onChange={inputvalue} id="StreetAddress" placeholder="House number and street name" />
                            </div>
                            <div className="tp-checkout-input">
                              <input type="text" onChange={inputvalue} id="StreetAddress1" placeholder="Apartment, suite, unit, etc. (optional)" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="tp-checkout-input">
                              <label>Town / City</label>
                              <input type="text" onChange={inputvalue} id="City" placeholder />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="tp-checkout-input">
                              <label>State</label>
                              <input type="text" onChange={inputvalue} id="state" name="" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="tp-checkout-input">
                              <label>Postcode ZIP</label>
                              <input type="text" onChange={inputvalue} id="Postcode" placeholder />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="tp-checkout-input">
                              <label>Phone <span>*</span></label>
                              <input type="number" onChange={inputvalue} id="Phone" placeholder />
                            </div>
                          </div>


                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
             <CheckOutchild details={inputBoxValue}/>
            </div>
          </div>
        </section>
        {/* checkout area end */}
      </main></div>

  )
}
