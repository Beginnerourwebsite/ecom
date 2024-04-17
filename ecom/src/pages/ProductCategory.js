import React, { useState } from 'react'
import PageHeader from '../comp/all/PageHeader'
import Navbar from '../comp/all/Navbar'
import InsertAddproduct from '../comp/compage/InsertAddproduct'
import InsertProductCategory from '../comp/compage/InsertProductCategory'
import Categories, { Categoriesimage } from "../comp/compage/Categoriesapi"
export default function ProductCategory() {
    var [all_image_arr, setall_image_arr] = useState([])
    function geturl(e) {
        console.log(e.target.src)
    }
    function checkornot(e) {
        if (e.target.checked == true) {

            document.getElementById("validationCustom02").files = null
            document.getElementById("validationCustom02").style.display = "none"
            document.getElementById("search_image").style.display = "block"
        }
        else {
            document.getElementById("validationCustom02").style.display = "block"
            document.getElementById("search_image").value = ""
            document.getElementById("search_image").style.display = "none"

        }

    }
    function selectchange(e) {
        let mydata = Object.keys(Categoriesimage).filter(data => {
            return data == e.target.value
        })
        console.log(mydata)
        setall_image_arr(Categoriesimage[mydata])
    }

    return (
        <div>
            <div class="page-wrapper">
                <PageHeader />
                <div class="page-body-wrapper">
                    <Navbar />
                    <InsertProductCategory />
                </div>
            </div>
            <div className="modal fade" id="exampleModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title f-w-600" id="exampleModalLabel">Add
                                Digital Product</h5>
                            <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="needs-validation">
                                <div className="form">
                                    <div className="form-group">
                                        <label htmlFor="validationCustom01" className="mb-1">Category Name :</label>
                                        <input className="form-control" id="validationCustom01" type="text" />
                                    </div>
                                    <div className="form-group mb-0">
                                        <label htmlFor="validationCustom02" className="mb-1">Category Image :</label>
                                        <input className="form-control" id="validationCustom02" type="file" />
                                    </div>
                                    <br />
                                    <input type="checkbox" name="" id="checkboxSys" onChange={checkornot} /><label htmlFor="checkboxSys"> Choose System Image</label>
                                    <input list='productlists' onChange={selectchange} style={{ display: "none" }} className="form-control" id="search_image" type="search" />
                                    <datalist id='productlists'>
                                        {
                                            Categories.map(element => {
                                                return <option value={element}>{element}</option>
                                            })
                                        }
                                    </datalist>
                                    <br />
                                    <div>
                                        {
                                            all_image_arr != undefined ? all_image_arr.map(images => {
                                                console.log(images)
                                                return <img onClick={geturl} src={images} width={"100px"} style={{ boxShadow: "0px 0px 2px gray", borderRadius: "5px", margin: "5px", cursor: "pointer" }} height={"100px"} alt="" />
                                            }) : setall_image_arr([])
                                        }

                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" type="button">Save</button>
                            <button className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
