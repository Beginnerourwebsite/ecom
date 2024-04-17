import React, { useContext } from 'react'
import Context from '../Context'
import { Link, useNavigate } from 'react-router-dom'


export default function PageHeader() {
  let {insert}=useContext(Context)
  function navbarshow(){
  
   insert("block")
}
let navigate=useNavigate()

function Logout(){
  sessionStorage.clear()
  navigate("/")
}

  return (
    <div><div className="page-main-header">
    <div className="main-header-right row">
      <div className="main-header-left d-lg-none w-auto">
        <div className="logo-wrapper">
          <a href="index.html">
            <img className="blur-up lazyloaded d-block d-lg-none" src="assets/images/dashboard/multikart-logo-black.png" />
          </a>
        </div>
      </div>
      <div className="mobile-sidebar w-auto" >
        <div className="media-body text-end switch-sm" >
          <label className="switch" onClick={navbarshow}>
            <a href="javascript:void(0)" >
              {/* <i id="sidebar-toggle" data-feather="align-left" /> */}
              <svg xmlns="http://www.w3.org/2000/svg"   width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-align-left" id="sidebar-toggle"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
            </a>
          </label>
        </div>
      </div>
      <div className="nav-right col">
        <ul className="nav-menus">
          <li>
            {/* <form className="form-inline search-form">
              <div className="form-group">
                <input className="form-control-plaintext" type="search" placeholder="Search.." />
                <span className="d-sm-none mobile-search">
                  <i data-feather="search" />
                </span>
              </div>
            </form> */}
          </li>
          
          <li className="onhover-dropdown">
            <div className="media align-items-center">
              <img className="align-self-center pull-right img-100 blur-up lazyloaded" src="logo.png" alt="header-user" />
             
            </div>
            <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
              <li>
                <Link to="/Profile">
                  <i data-feather="user" />Edit Profile
                </Link>
              </li>
              
              <li onClick={Logout}>
                {/* <a href="/login"> */}
                  <i data-feather="log-out"  />Logout
                {/* </a> */}
              </li>
            </ul>
          </li>
        </ul>
        <div className="d-lg-none mobile-toggle pull-right">
          <i data-feather="more-horizontal" />
        </div>
      </div>
    </div>
  </div></div>

  )
}
