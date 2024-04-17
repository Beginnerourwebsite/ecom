import React, { useEffect, useState } from 'react'
import Navbar from '../comp/all/Navbar'
import PageHeader from '../comp/all/PageHeader'
import { Link, useParams } from 'react-router-dom'
import Autocreatedatabase from '../comp/all/Autocreatedatabase'

export default function Orderdetails() {
    let { ids } = useParams()
    let [state, setstate] = useState({})
    function fetchdata() {
        Autocreatedatabase({ database: "ecom", table: "order" }, "user", "get", { id: ids }).then(data => {

            let obj = {
                ...data[0],
                Product: JSON.parse(data[0].Product),
                Userdetails: JSON.parse(data[0].Userdetails),
                User: JSON.parse(data[0].User),


            }
            // console.log(first)
            setstate(obj)
        })
    }
    useEffect(() => {
        fetchdata()
        console.clear()
    }, [])
    if (Object.keys(state).length > 2)
        return (
            <div className="page-wrapper">
                <div className="page-body-wrapper">

                    {/* <div className="page-body"> */}
                    {/* Container-fluid starts*/}
                    <div className="container-fluid">
                        <div className="page-header">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="page-header-left">
                                        <h3>Order Details
                                            <small>BV_Olx Admin panel</small>
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <ol className="breadcrumb pull-right">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">
                                                <i data-feather="home" />
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item"><Link to="/order">Menus</Link></li>
                                        <li className="breadcrumb-item active">Order Details</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Container-fluid Ends*/}
                    {/* Container-fluid starts*/}
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="bg-inner cart-section order-details-table">
                                            <div className="row g-4">
                                                <div className="col-xl-8">
                                                    <div className="card-details-title">
                                                        <h3>Order Number <span>#{state.id}</span></h3>
                                                    </div>
                                                    <div className="table-responsive table-details">
                                                        <table className="table cart-table table-borderless">
                                                            <thead>
                                                                <tr>
                                                                    <th colSpan={2}>Items</th>
                                                                    <th className="text-end" colSpan={3}>
                                                                        <a href="javascript:void(0)" className="theme-color">Edit Items</a>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                {
                                                                    state.Product.map(element => {
                                                                        console.log(element)
                                                                        return (
                                                                            <tr className="table-order">
                                                                                <td>
                                                                                    <a href="javascript:void(0)">
                                                                                        <img src="assets/images/fashion/1.jpg" className="img-fluid blur-up lazyload" alt />
                                                                                    </a>
                                                                                </td>
                                                                                <td>
                                                                                    <p>Product Name</p>
                                                                                    <h5>{element.ProductName}</h5>
                                                                                </td>
                                                                                <td>
                                                                                    <p>Quantity</p>
                                                                                    <h5>{element.Totalitem}</h5>
                                                                                </td>
                                                                                <td>
                                                                                    <p>Actual Price</p>
                                                                                    <h5>{element.Currency}{parseInt(element.price) / parseInt(element.Totalitem)}</h5>
                                                                                </td>
                                                                                <td>
                                                                                    <p> Total Price</p>
                                                                                    <h5>{element.Currency}{element.price}</h5>
                                                                                </td>
                                                                            </tr>
                                                                        )
                                                                    })
                                                                }

                                                            </tbody>
                                                            <tfoot>
                                                                {/* <tr className="table-order">
                                                                <td colSpan={3}>
                                                                    <h5>Subtotal :</h5>
                                                                </td>
                                                                <td>
                                                                    <h4>$55.00</h4>
                                                                </td>
                                                            </tr>
                                                            <tr className="table-order">
                                                                <td colSpan={3}>
                                                                    <h5>Shipping :</h5>
                                                                </td>
                                                                <td>
                                                                    <h4>$12.00</h4>
                                                                </td>
                                                            </tr>
                                                            <tr className="table-order">
                                                                <td colSpan={3}>
                                                                    <h5>Tax(GST) :</h5>
                                                                </td>
                                                                <td>
                                                                    <h4>$10.00</h4>
                                                                </td>
                                                            </tr> */}
                                                                <tr className="table-order">
                                                                    <td colSpan={4}>
                                                                        <h4 className="theme-color fw-bold">Total Price :</h4>
                                                                    </td>
                                                                    <td>
                                                                        <h4 className="theme-color fw-bold">₹{state.Amount}</h4>
                                                                    </td>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4">
                                                    <div className="row g-4">
                                                        <div className="col-12">
                                                            <div className="order-success">
                                                                <h4>summery</h4>
                                                                <ul className="order-details">
                                                                    <li>Order ID: {state.id}</li>
                                                                    <li>Order Date: {state.date}</li>
                                                                    <li>Order Total: ₹{state.Amount}</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="order-success">
                                                                <h4>shipping address</h4>
                                                                <ul className="order-details">
                                                                    <li>{state.Userdetails.Fname} {state.Userdetails.Lname}</li>
                                                                    <li>{state.Userdetails.StreetAddress}.</li>
                                                                    <li>{state.Userdetails.StreetAddress1}.</li>
                                                                    <li>{state.Userdetails.City}, {state.Userdetails.state}, {state.Userdetails.Postcode} Contact No. {state.Userdetails.Phone}</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="order-success">
                                                                <div className="payment-mode">
                                                                    <h4>payment method</h4>
                                                                    <p> Cash on delivery (COD)
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* section end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Container-fluid Ends*/}
                </div>
                {/* </div> */}
            </div>

        )
}
