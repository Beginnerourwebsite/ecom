import React, { useEffect } from 'react'
import Autocreatedatabase from '../all/Autocreatedatabase'
import { useParams } from 'react-router-dom'

export default function Confirmorpendding() {
    let {id,color,data}=useParams()

  return (
<main >
    {/* #FFC548 */}
  {/* breadcrumb area start */}
  <section className="breadcrumb__area include-bg pt-95 pb-90">
    <div className="container">
      <div className="row">
        <div className="col-xxl-12">
          <div className="breadcrumb__content p-relative z-index-1">
            <h3 className="breadcrumb__title">Track your order</h3>
            <div className="breadcrumb__list">
              <span><a href="#">Home</a></span>
              <span>Track your order</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* breadcrumb area end */}
  {/* order area start */}
  <section className="tp-order-area pb-160" >
    <div className="container ">
      <div className="tp-order-inner ">
        <div className="row gx-0 d-flex justify-content-center ">
          <div className="col-lg-6">
            <div className="tp-order-details" style={{backgroundColor:`#${color}`}} data-bg-color="#4F3D97">
              <div className="tp-order-details-top text-center mb-70">
                <div className="tp-order-details-icon">
                  <span>
                    <svg width={52} height={52} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M46 26V51H6V26" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M51 13.5H1V26H51V13.5Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M26 51V13.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M26 13.5H14.75C13.0924 13.5 11.5027 12.8415 10.3306 11.6694C9.15848 10.4973 8.5 8.9076 8.5 7.25C8.5 5.5924 9.15848 4.00269 10.3306 2.83058C11.5027 1.65848 13.0924 1 14.75 1C23.5 1 26 13.5 26 13.5Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M26 13.5H37.25C38.9076 13.5 40.4973 12.8415 41.6694 11.6694C42.8415 10.4973 43.5 8.9076 43.5 7.25C43.5 5.5924 42.8415 4.00269 41.6694 2.83058C40.4973 1.65848 38.9076 1 37.25 1C28.5 1 26 13.5 26 13.5Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <div className="tp-order-details-content">
                  <h3 className="tp-order-details-title">Your Order Request Send</h3>
                  <p>We will send you a shipping confirmation email as soon <br /> as your order ships</p>
                </div>
              </div>
              <div className="tp-order-details-item-wrapper">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="tp-order-details-item">
                      <h4>Order Date:</h4>
                      <p>{`${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`}</p>
                    </div>
                  </div>
                
                  <div className="col-sm-6">
                    <div className="tp-order-details-item">
                      <h4>Order Number:</h4>
                      <p>#{id}</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="tp-order-details-item">
                      <h4>Payment Method:</h4>
                      <p>Cash on delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      <div style={{display:data}} className="col-lg-6">
  <div className="tp-order-info-wrapper">
    <h4 className="tp-order-info-title">Order Details</h4>
    <div className="tp-order-info-list">
      <ul>
        {/* header */}
        <li className="tp-order-info-list-header">
          <h4>Product</h4>
          <h4>Total</h4>
        </li>
        {/* item list */}
        <li className="tp-order-info-list-desc">
          <p>Xiaomi Redmi Note 9 Global V. <span> x 2</span></p>
          <span>$274:00</span>
        </li>
        <li className="tp-order-info-list-desc">
          <p>Office Chair Multifun <span> x 1</span></p>
          <span>$74:00</span>
        </li>
        <li className="tp-order-info-list-desc">
          <p>Apple Watch Series 6 Stainless  <span> x 3</span></p>
          <span>$362:00</span>
        </li>
        <li className="tp-order-info-list-desc">
          <p>Body Works Mens Collection <span> x 1</span></p>
          <span>$145:00</span>
        </li>
        {/* subtotal */}
        <li className="tp-order-info-list-subtotal">
          <span>Subtotal</span>
          <span>$507.00</span>
        </li>
        {/* shipping */}
        {/* shipping */}
        <li className="tp-order-info-list-shipping">
          <span>Shipping</span>
          <div className="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
            <span>
              <input id="shipping_info" type="checkbox" />
              <label htmlFor="shipping_info">Flat rate: <span>$20.00</span></label>
            </span>
          </div>
        </li>
        {/* total */}
        <li className="tp-order-info-list-total">
          <span>Total</span>
          <span>$1,476.00</span>
        </li>
      </ul>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  </section>
  {/* order area end */}
</main>

  )
}
