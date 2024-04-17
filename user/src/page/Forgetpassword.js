import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Autocreatedatabase from '../comp/all/Autocreatedatabase'

export default function Forgetpassword() {
    let [dataidfrommysql, setdataidfrommysql] = useState("")
    function checkmail() {
        // confirmation
        let obj = {

            database: "login",
            table: "account"
        }

        Autocreatedatabase(obj, "user", "get").then(datas => {
            let confirmExit = datas.filter(element => {
                return (element.email == document.getElementById("email").value)
            })
            if (confirmExit.length != 0) {
                document.getElementById("confirmation").style.display = "block"
                document.getElementById("checkemail").style.display = "none"
                // setdataidfrommysql(confirmExit.id)
                setdataidfrommysql(confirmExit[0].id)
            }
            else {
                alert("please create Account")
            }
        })
    }


    let [allinputvalue, setallinputvalue] = useState({})

    function inputboxvalue(e) {
        setallinputvalue({ ...allinputvalue, [e.target.id]: e.target.value })
    }
    function resetpassword() {
        let obj = {

            database: "login",
            table: "account"
        }

        if (allinputvalue.newemail == allinputvalue.confirmemail) {
            let senddata = { data: { tp_password: allinputvalue.newemail }, ids: dataidfrommysql }

            Autocreatedatabase(obj, "user", "put",senddata).then(data => {
                console.log(data)
            })
        }
        else alert("Password is not matched")
        // allinputvalue

    }
    return (
        <div><main>
            {/* breadcrumb area start */}
            <section className="breadcrumb__area include-bg text-center pt-95 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content p-relative z-index-1">
                                <h3 className="breadcrumb__title">Forgot Password</h3>
                                <div className="breadcrumb__list">
                                    <span><Link to="/">Home</Link></span>
                                    <span>Reset Passowrd</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* breadcrumb area end */}
            {/* login area start */}
            <section className="tp-login-area pb-140 p-relative z-index-1 fix">
                <div className="tp-login-shape">
                    <img className="tp-login-shape-1" src="assets/img/login/login-shape-1.png" alt />
                    <img className="tp-login-shape-2" src="assets/img/login/login-shape-2.png" alt />
                    <img className="tp-login-shape-3" src="assets/img/login/login-shape-3.png" alt />
                    <img className="tp-login-shape-4" src="assets/img/login/login-shape-4.png" alt />
                </div>
                <div id='checkemail' className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="tp-login-wrapper">
                                <div className="tp-login-top text-center mb-30">
                                    <h3 className="tp-login-title">Reset Passowrd</h3>
                                    <p>Enter your email address to request password reset.</p>
                                </div>
                                <div className="tp-login-option">
                                    <div className="tp-login-input-wrapper">
                                        <div className="tp-login-input-box">
                                            <div className="tp-login-input">
                                                <input id="email" type="email" placeholder="shofy@mail.com" />
                                            </div>
                                            <div className="tp-login-input-title">
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tp-login-bottom mb-15">
                                        <button onClick={checkmail} type="submit" className="tp-login-btn w-100">Check Mail</button>
                                    </div>
                                    <div className="tp-login-suggetions d-sm-flex align-items-center justify-content-center">
                                        <div className="tp-login-forgot">
                                            <span>Remeber Passowrd? <Link to="/"> Login</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='confirmation' style={{ display: 'none' }} className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="tp-login-wrapper">
                                <div className="tp-login-top text-center mb-30">
                                    <h3 className="tp-login-title">Reset Passowrd</h3>
                                    <p>Enter your email address to request password reset.</p>
                                </div>
                                <div className="tp-login-option">
                                    <div className="tp-login-input-wrapper">
                                        <div className="tp-login-input-box">
                                            <div className="tp-login-input">
                                                <input id="newemail" onChange={inputboxvalue} type="email" placeholder="shofy@mail.com" />
                                            </div>
                                            <div className="tp-login-input-title">
                                                <label htmlFor="newemail">New Password</label>
                                            </div>
                                        </div>
                                        <div className="tp-login-input-box">
                                            <div className="tp-login-input">
                                                <input id="confirmemail" onChange={inputboxvalue} type="email" placeholder="shofy@mail.com" />
                                            </div>
                                            <div className="tp-login-input-title">
                                                <label htmlFor="confirmemail">Confirm Password</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tp-login-bottom mb-15">
                                        <button onClick={resetpassword} type="submit" className="tp-login-btn w-100">Reset Password</button>
                                    </div>
                                    <div className="tp-login-suggetions d-sm-flex align-items-center justify-content-center">
                                        <div className="tp-login-forgot">
                                            <span>Remeber Passowrd? <Link to="/"> Login</Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* login area end */}
        </main></div>

    )
}
