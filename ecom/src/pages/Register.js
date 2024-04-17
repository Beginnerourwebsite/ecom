import { eventWrapper } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Autocreatedatabase from '../comp/all/Autocreatedatabase'

export default function Register() {




    // Register code Start------------------------------------

    let [inputValue, setinputValue] = useState({})

    function boxValue(event) {
        setinputValue({ ...inputValue, [event.target.id]: event.target.value })
    }

    let [otp, setOtp] = useState("")
    function createAccount(e) {

        if (inputValue.Password == inputValue.ConfirmPassword) {
            // if (inputValue.userEmail.split("@")[1] == "gmail.com") {

            e.target.innerHTML = "loading ...."
            e.target.setAttribute("disabled", "true")
            //   disabled
            // setAttribute
            delete inputValue.ConfirmPassword
            delete inputValue.Otp
            let obj = {
                list: Object.keys(inputValue),
                database: "allvander",
                table: "user",
                ifnot: "create"
            }
            Autocreatedatabase(obj, "user", "get", { userName: inputValue.userName }).then(data => {
                if (data.length == 0) {
                    let details = { username: inputValue.userName }
                    fetch(`http://localhost:5000/email/pankajdesktop23@gmail.com/hyjw obdg mizs vlvo/${inputValue.userEmail}/${JSON.stringify(details)}`, {

                    }).then(data => {
                        data.json().then(data => {
                            document.getElementById("otpdiv").style.display = "block"
                            document.getElementById("detail").style.display = "none"
                            setOtp(data.Otp)
                        })
                    })

                } else {
                    alert("alreay exists user name")
                }
            })


            // }
            // else {
            //     alert("Invalid Email")

            // }
        }
        else {
            alert("Password Wrong")

        }
    }
    let navigate = useNavigate()
    function VerifyOtp(e) {
        console.log(otp)
        console.log(inputValue)
        delete inputValue.ConfirmPassword
        delete inputValue.Otp
        console.log(inputValue)

        let otpInput = document.getElementById("Otp").value
        if (otp == otpInput) {
            let obj = {
                database: "allvander",
                list: Object.keys(inputValue),
                table: "user"
            }
            Autocreatedatabase(obj, "user", "post", inputValue).then(data => {
                console.log(data)
                window.location.reload()
            })

        }
        else {
            alert("Wrong OTP")
        }

    }

    // Register code end----------------------------------
    // Login code start-----------------------------------

    function Login(e) {

        e.preventDefault()
        delete inputValue.ConfirmPassword
        delete inputValue.Otp
        let obj = {
            list: Object.keys(inputValue),
            database: "allvander",
            table: "user",
            ifnot: "create"
        }
        Autocreatedatabase(obj, "user", "get", { userName: inputValue.LoginUsername }).then(data => {
            if (data.length > 0) {
                let matchOrNot = data.filter(getData => {
                    return getData.Password == inputValue.LoginPassword
                })
                if (matchOrNot.length > 0) {
                    // console.log("first")
                    sessionStorage.setItem("details",JSON.stringify({user:matchOrNot[0].userName,pass:matchOrNot[0].Password}))
                    navigate("/product")
                }
                else {
                    alert("Password invalid")

                }
            } else {
                alert("Username invalid")
            }
        })
    }

    // Login code End-----------------------------------


    return (
        <div className="page-wrapper">
            <div className="authentication-box">
                <div className="container ">
                    <div className="row d-flex justify-content-center ">

                        <div className="col-md-7 p-0 card-right">
                            <div className="card tab2-card card-login">
                                <div className="card-body">
                                    <ul className="nav nav-tabs nav-material" id="top-tab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="top-profile-tab" data-bs-toggle="tab" href="#top-profile" role="tab" aria-controls="top-profile" aria-selected="true"><span className="icon-user me-2" />Login</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="contact-top-tab" data-bs-toggle="tab" href="#top-contact" role="tab" aria-controls="top-contact" aria-selected="false"><span className="icon-unlock me-2" />Register</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="top-tabContent">
                                        <div className="tab-pane fade show active" id="top-profile" role="tabpanel" aria-labelledby="top-profile-tab">
                                            <form className="form-horizontal auth-form">
                                                <div className="form-group">
                                                    <input required name="login[username]" onChange={boxValue} type="text" className="form-control" placeholder="Username" id="LoginUsername" />
                                                </div>
                                                <div className="form-group">
                                                    <input required name="login[password]" onChange={boxValue} type="password" className="form-control" id="LoginPassword" placeholder="Password" />
                                                </div>
                                                <div className="form-button">
                                                    <button className="btn btn-primary" onClick={Login} type="submit">Login</button>
                                                </div><br />
                                                {/* <div className="form-terms">
                                                    <div className="form-check mesm-2">

                                                        <a href="javascript:void(0)" className="btn btn-default forgot-pass">Forgot Password!</a>
                                                    </div>
                                                </div> */}
                                            </form>
                                        </div>
                                        <div className="tab-pane fade" id="top-contact" role="tabpanel" aria-labelledby="contact-top-tab">

                                            <div id='detail'>
                                                <div className="form-group">
                                                    <label htmlFor="userName" className=' form-label '>Name</label>
                                                    <input required onChange={boxValue} name="login[username]" type="test" className="form-control" placeholder="Username" id="userName" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="userEmail" className=' form-label '>Email</label>
                                                    <input required onChange={boxValue} name="login[userEmail]" type="test" className="form-control" placeholder="userEmail" id="userEmail" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="Password" className=' form-label '>Password</label>

                                                    <input required onChange={boxValue} name="login[password]" id='Password' type="password" className="form-control" placeholder="Password" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="ConfirmPassword" className=' form-label '>Confirm Password</label>

                                                    <input required onChange={boxValue} name="login[password]" id='ConfirmPassword' type="password" className="form-control" placeholder="Confirm Password" />
                                                </div>
                                                <div className="form-terms">
                                                    <div className="form-check mesm-2">
                                                        <input type="checkbox" className="form-check-input" id="customControlAutosizing1" />
                                                        <label className="form-check-label ps-2" htmlFor="customControlAutosizing1"><span>I agree all statements in
                                                            <a href="#" className="pull-right">Terms &amp;
                                                                Conditions</a></span></label>
                                                    </div>
                                                </div>
                                                <div className="form-button">
                                                    <button className="btn btn-primary" onClick={createAccount} >Create Account</button>
                                                </div>
                                            </div>
                                            <div id='otpdiv' style={{ display: "none" }} >
                                                <div className="form-group">
                                                    <label htmlFor="Otp" className=' form-label '>OTP</label>

                                                    <input required onChange={boxValue} name="login[password]" id='Otp' type="text" className="form-control" placeholder="######" />
                                                </div>
                                                <div className="form-button" onClick={VerifyOtp} >
                                                    <button className="btn btn-primary" type="submit">Verify</button>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
