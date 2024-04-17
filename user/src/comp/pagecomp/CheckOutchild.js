import React, { useEffect, useState } from 'react'
import Autocreatedatabase from '../all/Autocreatedatabase'
import { useNavigate } from 'react-router-dom'

export default function CheckOutchild(props) {
    let [details, setdetails] = useState([])
    let [Total, setTotal] = useState(0)
    useEffect(() => {
        let user = JSON.parse(sessionStorage.getItem("details"))
        let details = `${user.User}_${user.pass}`
        let obj = {
            database: "usedatabase",
            table: details,
            // list: [...Object.keys(props.insertdata[0]), "carts"]
        }
        Autocreatedatabase(obj, "user", "get", { carts: 'active' }).then(data => {
            let arr = []
            let total = 0
            data.map(element => {
                let obj = {
                    ProductName: element.Productname,
                    price: (element.Product_Price * element.items),
                    Currency: element.Currency,
                    Totalitem: element.items
                }
                total += (element.Product_Price * element.items)
                arr.push(obj)
            })
            setdetails(arr)

            setTotal(total)
        })
    }, [])
    let naviget = useNavigate()
    function submit() {
        if ((Object.keys(props.details).length > 5) && (props.details.Phone != undefined)) {
            console.log(props.details)

            let alluserdata = {
                Userdetails: JSON.stringify(props.details),
                User: sessionStorage.getItem("details"),
                Product: JSON.stringify(details),
                Amount:Total,
                date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
            }
            let obj = { database: "ecom", table: "Order", list: [...Object.keys(alluserdata), "status", "expected"] }
            console.log(alluserdata)
            Autocreatedatabase(obj, "user", "post", alluserdata).then(data => {
                // console.log(data.insertId)
                let id = data.insertId
                let user = JSON.parse(sessionStorage.getItem("details"))
                let details = `${user.User}_${user.pass}`
                let obj = {
                    database: "usedatabase",
                    table: details,
                    // list: [...Object.keys(props.insertdata[0]), "carts"]
                }
                Autocreatedatabase(obj, "user", "get", { carts: 'active' }).then(data => {
                    data.map(element => {

                        Autocreatedatabase(obj, "user", "put", { data: { carts: "", items: "" }, ids: element.id }).then(datas => {
                        })
                    })
                    sessionStorage.setItem("carts","0")
                    naviget(`/confirm/${id}/FFC548/none`)
                })
            })

        }
    }
    return (
        <div className="col-lg-5">
            {/* checkout place order */}
            <div className="tp-checkout-place white-bg">
                <h3 className="tp-checkout-place-title">Your Order</h3>
                <div className="tp-order-info-list">
                    <ul>
                        {/* header */}
                        <li className="tp-order-info-list-header">
                            <h4>Product</h4>
                            <h4>Total</h4>
                        </li>
                        {/* item list */}
                        {
                            details.map(element => {
                                // let total=0

                                return (
                                    <li className="tp-order-info-list-desc">
                                        <p>{element.ProductName} </p>
                                        <span>{element.Currency}{element.price}</span>
                                    </li>
                                )
                            })
                        }

                        {/* subtotal */}
                        <li className="tp-order-info-list-subtotal">
                            <span>Subtotal</span>
                            <span>₹{Total}</span>
                        </li>

                    </ul>
                </div>
                <div className="tp-checkout-payment">
                    {/* <div className="tp-checkout-payment-item">
                        <input type="radio" id="back_transfer" name="payment" />
                        <label htmlFor="back_transfer" data-bs-toggle="direct-bank-transfer">Direct Bank Transfer</label>
                        <div className="tp-checkout-payment-desc direct-bank-transfer">
                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                        </div>
                    </div>
                    <div className="tp-checkout-payment-item">
                        <input type="radio" id="cheque_payment" name="payment" />
                        <label htmlFor="cheque_payment">Cheque Payment</label>
                        <div className="tp-checkout-payment-desc cheque-payment">
                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                        </div>
                    </div> */}
                    <div className="tp-checkout-payment-item">
                        <input type="radio" checked id="cod" name="payment" />
                        <label htmlFor="cod">Cash on Delivery</label>
                        <div className="tp-checkout-payment-desc cash-on-delivery">
                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                        </div>
                    </div>
                    {/* <div className="tp-checkout-payment-item paypal-payment">
                        <input type="radio" id="paypal" name="payment" />
                        <label htmlFor="paypal">PayPal <img src="assets/img/icon/payment-option.png" alt /> <a href="#">What is PayPal?</a></label>
                    </div> */}
                </div>
                <div className="tp-checkout-agree">
                    <div className="tp-checkout-option">
                        <input id="read_all" type="checkbox" />
                        <label htmlFor="read_all">I have read and agree to the website.</label>
                    </div>
                </div>
                <div className="tp-checkout-btn-wrapper">
                    <button onClick={submit} className="tp-checkout-btn w-100">Place Order</button>
                </div>
            </div>
        </div>
    )
}
