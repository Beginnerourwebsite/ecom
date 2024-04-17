import React, { useContext, useEffect, useState } from 'react'
import Context from '../Context'
import { Link } from 'react-router-dom'
import "../css/Navbar.css"
export default function Navbar() {
  let { show, insert } = useContext(Context)
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);
  useEffect(() => {
    if (windowWidth >= 990) {
      insert("block")
    }
    
  }, [windowWidth])

  function hidenav() {
    insert("none")

  }

  useEffect(() => {
    document.getElementById("navbar").style.display = show
  }, [show])
  // alert("run")
  // console.log(document.getElementsByClassName("sidebar-header")[1].nextSibling.innerHTML)  
  return (
    <div className="page-sidebar" id='navbar' >
      <div className="main-header-left d-none d-lg-block">
        <div className="logo-wrapper">
          <a href="index.html">
            <img width={"100%"} className="d-none d-lg-block blur-up lazyloaded" src="Picture4.png" />
          </a>
        </div>
      </div>
      <div className="sidebar custom-scrollbar"  >
        <a href="javascript:void(0)" onClick={hidenav} className="sidebar-back d-lg-none d-block"><i className="fa fa-times" aria-hidden="true" /></a>
        <div className="sidebar-user">
          <img className="img-160" src="logo.png" width={"100px"} alt="#" />
          <div>
            <h6 className="f-14">BV_Olx</h6>
            <p>general manager.</p>
          </div>
        </div>
        <ul className="sidebar-menu">
          <li class="active">
            <Link class="sidebar-header " to="/Product">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              <span>Product</span>
            </Link>
          </li>
          <li class="active">
            <Link class="sidebar-header " to="/Productlist">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              <span>Product List</span>
            </Link>
          </li>
          <li class="active">
            <Link class="sidebar-header " to="/order">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-archive"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>
              <span>Order List</span>
            </Link>
          </li>
        </ul>
        {/* <ul className="sidebar-menu">
      <li>
        <a className="sidebar-header active" href="index.html">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <span>Dashboard</span>
        </a>
      </li>
      <li>
        <a className="sidebar-header" href="javascript:void(0)">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
          <span>Products</span>
          <i className="fa fa-angle-right pull-right" />
        </a>
        <ul style={{display:"block"}} className="sidebar-submenu" >
          <li style={{display:"block"}}>
            <a href="javascript:void(0)" style={{display:"block"}}>
              <i className="fa fa-circle" style={{display:"block"}}/>
              <span>Physical</span>
              <i className="fa fa-angle-right pull-right" />
            </a>
            <ul className="sidebar-submenu">
              <li>
                <a href="category.html">
                  <i className="fa fa-circle" />Category
                </a>
              </li>
              <li>
                <a href="category-sub.html">
                  <i className="fa fa-circle" />Sub Category</a>
              </li>
              <li>
                <a href="product-list.html">
                  <i className="fa fa-circle" />Product List</a>
              </li>
              <li>
                <a href="product-detail.html">
                  <i className="fa fa-circle" />Product Detail</a>
              </li>
              <li>
                <a href="add-product.html">
                  <i className="fa fa-circle" />Add Product
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-circle" />
              <span>Digital</span>
              <i className="fa fa-angle-right pull-right" />
            </a>
            <ul className="sidebar-submenu">
              <li>
                <a href="category-digital.html">
                  <i className="fa fa-circle" />Category
                </a>
              </li>
              <li>
                <a href="category-digitalsub.html">
                  <i className="fa fa-circle" />Sub Category
                </a>
              </li>
              <li>
                <a href="product-listdigital.html">
                  <i className="fa fa-circle" />Product List
                </a>
              </li>
              <li>
                <a href="add-digital-product.html">
                  <i className="fa fa-circle" />Add Product
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="product-review.html">
              <i className="fa fa-circle" />
              <span>product Review</span>
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a className="sidebar-header" href="javascript:void(0)">
          <i data-feather="archive" />
          <span>Orders</span>
          <i className="fa fa-angle-right pull-right" />
        </a>
        <ul className="sidebar-submenu">
          <li>
            <a href="order-list.html">
              <i className="fa fa-circle" />
              <span>Order List</span>
            </a>
          </li>
          <li>
            <a href="order-tracking.html">
              <i className="fa fa-circle" />
              <span>Order Tracking</span>
            </a>
          </li>
          <li>
            <a href="order-detail.html">
              <i className="fa fa-circle" />
              <span>Order Details</span>
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a className="sidebar-header" href="javascript:void(0)">
          <i data-feather="dollar-sign" />
          <span>Sales</span>
          <i className="fa fa-angle-right pull-right" />
        </a>
        <ul className="sidebar-submenu">
          <li>
            <a href="order.html">
              <i className="fa fa-circle" />Orders
            </a>
          </li>
          <li>
            <a href="transactions.html">
              <i className="fa fa-circle" />Transactions
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a className="sidebar-header" href="javascript:void(0)">
          <i data-feather="tag" />
          <span>Coupons</span>
          <i className="fa fa-angle-right pull-right" />
        </a>
        <ul className="sidebar-submenu">
          <li>
            <a href="coupon-list.html">
              <i className="fa fa-circle" />List Coupons
            </a>
          </li>
          <li>
            <a href="coupon-create.html">
              <i className="fa fa-circle" />Create Coupons
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a className="sidebar-header" href="javascript:void(0)">
          <i data-feather="clipboard" />
          <span>Pages</span>
          <i className="fa fa-angle-right pull-right" />
        </a>
        <ul className="sidebar-submenu">
          <li>
            <a href="pages-list.html">
              <i className="fa fa-circle" />List Page
            </a>
          </li>
          <li>
            <a href="page-create.html">
              <i className="fa fa-circle" />Create Page
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a className="sidebar-header" href="media.html">
          <i data-feather="camera" />
          <span>Media</span>
        </a>
      </li>
      <li>
        <a className="sidebar-header" href="javascript:void(0)">
          <i data-feather="align-left" />
          <span>Menus</span>
          <i className="fa fa-angle-right pull-right" />
        </a>
        <ul className="sidebar-submenu">
          <li>
            <a href="menu-list.html">
              <i className="fa fa-circle" />Menu Lists
            </a>
          </li>
          <li>
            <a href="create-menu.html">
              <i className="fa fa-circle" />Create Menu
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a className="sidebar-header" href="javascript:void(0)">
          <i data-feather="user-plus" />
          <span>Users</span>
          <i className="fa fa-angle-right pull-right" />
        </a>
        <ul className="sidebar-submenu">
          <li>
            <a href="user-list.html">
              <i className="fa fa-circle" />User List
            </a>
          </li>
          <li>
            <a href="create-user.html">
              <i className="fa fa-circle" />Create User
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a className="sidebar-header" href="javascript:void(0)">
          <i data-feather="users" />
          <span>Vendors</span>
          <i className="fa fa-angle-right pull-right" />
        </a>
        <ul className="sidebar-submenu">
          <li>
            <a href="list-vendor.html">
              <i className="fa fa-circle" />Vendor List
            </a>
          </li>
          <li>
            <a href="create-vendors.html">
              <i className="fa fa-circle" />Create Vendor
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a className="sidebar-header" href="javascript:void(0)">
          <i data-feather="chrome" />
          <span>Localization</span>
          <i className="fa fa-angle-right pull-right" />
        </a>
        <ul className="sidebar-submenu">
          <li>
            <a href="translations.html"><i className="fa fa-circle" />Translations
            </a>
          </li>
          <li>
            <a href="currency-rates.html"><i className="fa fa-circle" />Currency Rates
            </a>
          </li>
          <li>
            <a href="taxes.html"><i className="fa fa-circle" />Taxes
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a className="sidebar-header" href="support-ticket.html"><i data-feather="phone" /><span>Support Ticket</span>
        </a>
      </li>
      <li>
        <a className="sidebar-header" href="reports.html"><i data-feather="bar-chart" /><span>Reports</span>
        </a>
      </li>
      <li>
        <a className="sidebar-header" href="javascript:void(0)"><i data-feather="settings" /><span>Settings</span><i className="fa fa-angle-right pull-right" /></a>
        <ul className="sidebar-submenu">
          <li>
            <a href="profile.html"><i className="fa fa-circle" />Profile
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a className="sidebar-header" href="invoice.html"><i data-feather="archive" /><span>Invoice</span></a>
      </li>
      <li>
        <a className="sidebar-header" href="forgot-password.html">
          <i data-feather="key" />
          <span>Forgot Password</span>
        </a>
      </li>
      <li>
        <a className="sidebar-header" href="login.html">
          <i data-feather="log-in" />
          <span>Login</span>
        </a>
      </li>
    </ul> */}
      </div>
    </div>

  )
}
