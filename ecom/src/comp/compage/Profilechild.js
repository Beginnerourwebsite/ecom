import React from 'react'
import { CiEdit } from "react-icons/ci";
export default function Profilechild() {
    return (
        <div className="page-body">
            {/* Container-fluid starts*/}
            <div className="container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="page-header-left">
                                <h3>Profile
                                    <small> Admin panel</small>
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
                                <li className="breadcrumb-item">Settings</li>
                                <li className="breadcrumb-item active">Profile</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            {/* Container-fluid Ends*/}
            {/* Container-fluid starts*/}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="profile-details text-center">
                                    <img src="assets/images/dashboard/designer.jpg" alt className="img-fluid img-90 rounded-circle blur-up lazyloaded" />
                                    <h5 className="f-w-600 mb-0">John deo</h5>
                                    <span>johndeo@gmail.com</span>

                                </div>
                                <hr />
                                {/* <div className="project-status">
              <h5 className="f-w-600">Employee Status</h5>
              <div className="media">
                <div className="media-body">
                  <h6>Performance<span className="pull-right">80%</span></h6>
                  <div className="progress sm-progress-bar">
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '90%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
              <div className="media">
                <div className="media-body">
                  <h6>Overtime <span className="pull-right">60%</span></h6>
                  <div className="progress sm-progress-bar">
                    <div className="progress-bar bg-secondary" role="progressbar" style={{width: '60%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
              <div className="media">
                <div className="media-body">
                  <h6>Leaves taken<span className="pull-right">70%</span></h6>
                  <div className="progress sm-progress-bar">
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '70%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="card tab2-card">
                            <div className="card-body">
                                <ul className="nav nav-tabs nav-material" id="top-tab" role="tablist">
                                    <li className="nav-item"><a className="nav-link active" id="top-profile-tab" data-bs-toggle="tab" href="#top-profile" role="tab" aria-controls="top-profile" aria-selected="true"><i data-feather="user" className="me-2" />Profile</a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" id="contact-top-tab" data-bs-toggle="tab" href="#top-contact" role="tab" aria-controls="top-contact" aria-selected="false"><i data-feather="settings" className="me-2" />Contact</a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" id="contact-top-tab" data-bs-toggle="tab" href="#top-pankaj" role="tab" aria-controls="top-pankaj" aria-selected="false"><i data-feather="settings" className="me-2" />panakj</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="top-tabContent">
                                    <div className="tab-pane fade show active" id="top-profile" role="tabpanel" aria-labelledby="top-profile-tab">
                                        <h5 className="f-w-600">Profile</h5>
                                        <div className="table-responsive profile-table">
                                            <table className="table table-borderless">
                                                <tbody>
                                                    <tr>
                                                        <td>First Name:</td>
                                                        <td><input type="text" style={{ border: "none" }} disabled value="Not Set" name="" id="" /></td>
                                                        <td title='edit'><CiEdit /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Last Name:</td>
                                                        <td><input type="text" style={{ border: "none" }} disabled value="Not set" name="" id="" /></td>
                                                        <td title='edit'><CiEdit /></td>


                                                    </tr>
                                                    <tr>
                                                        <td>Email:</td>
                                                        <td><input type="text" style={{ border: "none" }} disabled value="Not set" name="" id="" /></td>
                                                        <td title='edit'><CiEdit /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gender:</td>
                                                        <td><input type="text" style={{ border: "none" }} disabled value="Not set" name="" id="" /></td>
                                                        <td title='edit'><CiEdit /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mobile Number:</td>
                                                        <td><input type="text" style={{ border: "none" }} disabled value="Not set" name="" id="" /></td>
                                                        <td title='edit'><CiEdit /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>DOB:</td>
                                                        <td><input type="text" style={{ border: "none" }} disabled value="Not set" name="" id="" /></td>
                                                        <td title='edit'><CiEdit /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Location:</td>
                                                        <td>USA</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="top-contact" role="tabpanel" aria-labelledby="contact-top-tab">
                                        <div className="account-setting">
                                            <h5 className="f-w-600">Notifications</h5>
                                            <div className="row">
                                                <div className="col">
                                                    <label className="d-block" htmlFor="chk-ani">
                                                        <input className="checkbox_animated" id="chk-ani" type="checkbox" />
                                                        Allow Desktop Notifications
                                                    </label>
                                                    <label className="d-block" htmlFor="chk-ani1">
                                                        <input className="checkbox_animated" id="chk-ani1" type="checkbox" />
                                                        Enable Notifications
                                                    </label>
                                                    <label className="d-block" htmlFor="chk-ani2">
                                                        <input className="checkbox_animated" id="chk-ani2" type="checkbox" />
                                                        Get notification for my own activity
                                                    </label>
                                                    <label className="d-block mb-0" htmlFor="chk-ani3">
                                                        <input className="checkbox_animated" id="chk-ani3" type="checkbox" defaultChecked />
                                                        DND
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="account-setting deactivate-account">
                                            <h5 className="f-w-600">Deactivate Account</h5>
                                            <div className="row">
                                                <div className="col">
                                                    <label className="d-block" htmlFor="edo-ani">
                                                        <input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" defaultChecked />
                                                        I have a privacy concern
                                                    </label>
                                                    <label className="d-block" htmlFor="edo-ani1">
                                                        <input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" />
                                                        This is temporary
                                                    </label>
                                                    <label className="d-block mb-0" htmlFor="edo-ani2">
                                                        <input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" defaultChecked />
                                                        Other
                                                    </label>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-primary">Deactivate
                                                Account</button>
                                        </div>
                                        <div className="account-setting deactivate-account">
                                            <h5 className="f-w-600">Delete Account</h5>
                                            <div className="row">
                                                <div className="col">
                                                    <label className="d-block" htmlFor="edo-ani3">
                                                        <input className="radio_animated" id="edo-ani3" type="radio" name="rdo-ani1" defaultChecked />
                                                        No longer usable
                                                    </label>
                                                    <label className="d-block" htmlFor="edo-ani4">
                                                        <input className="radio_animated" id="edo-ani4" type="radio" name="rdo-ani1" />
                                                        Want to switch on other account
                                                    </label>
                                                    <label className="d-block mb-0" htmlFor="edo-ani5">
                                                        <input className="radio_animated" id="edo-ani5" type="radio" name="rdo-ani1" defaultChecked />
                                                        Other
                                                    </label>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-primary">Delete Account</button>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="top-pankaj" role="tabpanel" aria-labelledby="contact-top-tab">
                                        <div className="account-setting">
                                            <h5 className="f-w-600">pankaj</h5>
                                            <div className="row">
                                                <div className="col">
                                                    <label className="d-block" htmlFor="chk-ani">
                                                        <input className="checkbox_animated" id="chk-ani" type="checkbox" />
                                                        Allow Desktop Notifications
                                                    </label>
                                                    <label className="d-block" htmlFor="chk-ani1">
                                                        <input className="checkbox_animated" id="chk-ani1" type="checkbox" />
                                                        Enable Notifications
                                                    </label>
                                                    <label className="d-block" htmlFor="chk-ani2">
                                                        <input className="checkbox_animated" id="chk-ani2" type="checkbox" />
                                                        Get notification for my own activity
                                                    </label>
                                                    <label className="d-block mb-0" htmlFor="chk-ani3">
                                                        <input className="checkbox_animated" id="chk-ani3" type="checkbox" defaultChecked />
                                                        DND
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="account-setting deactivate-account">
                                            <h5 className="f-w-600">Deactivate Account</h5>
                                            <div className="row">
                                                <div className="col">
                                                    <label className="d-block" htmlFor="edo-ani">
                                                        <input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" defaultChecked />
                                                        I have a privacy concern
                                                    </label>
                                                    <label className="d-block" htmlFor="edo-ani1">
                                                        <input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" />
                                                        This is temporary
                                                    </label>
                                                    <label className="d-block mb-0" htmlFor="edo-ani2">
                                                        <input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" defaultChecked />
                                                        Other
                                                    </label>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-primary">Deactivate
                                                Account</button>
                                        </div>
                                        <div className="account-setting deactivate-account">
                                            <h5 className="f-w-600">Delete Account</h5>
                                            <div className="row">
                                                <div className="col">
                                                    <label className="d-block" htmlFor="edo-ani3">
                                                        <input className="radio_animated" id="edo-ani3" type="radio" name="rdo-ani1" defaultChecked />
                                                        No longer usable
                                                    </label>
                                                    <label className="d-block" htmlFor="edo-ani4">
                                                        <input className="radio_animated" id="edo-ani4" type="radio" name="rdo-ani1" />
                                                        Want to switch on other account
                                                    </label>
                                                    <label className="d-block mb-0" htmlFor="edo-ani5">
                                                        <input className="radio_animated" id="edo-ani5" type="radio" name="rdo-ani1" defaultChecked />
                                                        Other
                                                    </label>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-primary">Delete Account</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Container-fluid Ends*/}
        </div>

    )
}
