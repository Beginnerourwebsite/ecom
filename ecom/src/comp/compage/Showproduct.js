import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/Showproductcss.css"
import AllFirebaseCmd from '../all/Allfirebasecmd'
import Categories from './Categoriesapi'
import Autocreatedatabase from '../all/Autocreatedatabase'

export default function Showproduct() {
    const [offer, setOffer] = useState({});
    let [apidata, setapidata] = useState({})
    let DiscountRate = useRef()
    let DiscountType = useRef()
    let Actual_Price = useRef()
    let productPrice = useRef()
    const [filter, setFilter] = useState({})
    useEffect(() => {
        setTimeout(() => {
            // console.clear()
        }, 500);


        // firebase code start

        // AllFirebaseCmd("products/list", "show").then(datas => {
        //     if (datas != null) {
        //         setapidata(datas)
        //         setFilter(datas)
        //     }
        // })
        // firebase code end
        // mysql database code start
        fetch("http://localhost:5000/").then(data => {
            
            data.json().then(data => {
                console.log(data)
                setapidata(data)
                setFilter(data)
            })
        })
        // mysql database code end

    }, [])



    // search data in table start
    const requestSearch = (searchedVal) => {
        let inputValue = searchedVal.target.value.toString().toLowerCase()
        let searchWord = new RegExp(inputValue)
        const filteredRows = Object.values(apidata).filter((row) => {
            return searchWord.test(row.Productname.toString().toLowerCase())
        });
        if (searchedVal.target.value.length < 1) {
            setFilter(apidata)
            // apidata
        }
        else {
            console.log(filteredRows)
            setFilter(filteredRows)
        }
    };
    // search data in table end

    // delete product start

    function deletes(e) {
        let keys = (e.target.id)
        console.log(keys)
        fetch("http://localhost:5000/", {
            method: "delete",
            body: JSON.stringify({ key: keys }),
            headers: {
                "content-type": "application/json"
            }
        }).then(status => {
            status.json().then(status => {

                if (status.status == "Remove") {
                    alert("delete")
                    fetch("http://localhost:5000/").then(data => {
                        data.json().then(data => {
                            setapidata(data)
                            setFilter(data)
                        })
                    })
                }
            })
        })
        // AllFirebaseCmd(`/products/list/${keys}`, "delete").then(status => {
        //     if (status == "Deleted successfully") {
        //         AllFirebaseCmd("/products/list", "show").then(datas => {
        //             if (datas == null) {
        //                 setapidata({})
        //                 setFilter({})
        //             }
        //             else {
        //                 setapidata(datas)
        //                 setFilter(datas)
        //             }
        //         })
        //     }
        // })
    }

    // delete product end

    // window size time code start
    let page_body = useRef()
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
            // insert("block")
            page_body.current.style.marginLeft = "255px"
            // document.getElementsByClassName("page-body")[0].style.marginLeft="255px"
        }
        else {
            page_body.current.style.marginLeft = "0px"

        }

    }, [windowWidth])


    // window size time code end

    // update code start
    const [insertall, setInsertAll] = useState({});
    function edits(e) {
        let obj = {
            database: "ecom",
            table: "product"
        }
        Autocreatedatabase(obj, "user", "get", [{ id: e.target.id }]).then(data => {
            setInsertAll(...data)
            console.log(data[0])
            setOffer((data[0].Offer))
            // console.log(JSON.parse(data[0]))
            document.getElementById(data[0].Status).checked = true
            let Categories = Object.values(document.getElementById("Categories").options)
            Categories.map((element, index) => {
                if (element.value == data[0].Categories) {
                    (document.getElementById("Categories").options.selectedIndex = index)
                }
            })
        })
    }

    useEffect(() => {
        if (offer.OfferStatus != undefined) {
            console.log(offer.OfferStatus)
            if (offer.OfferStatus == "enable") {
                document.getElementById("Offer").checked = true
                document.getElementById("discount").style.display = "block"
            }
            else if (offer.OfferStatus == "disable") {
                document.getElementById("Offer").checked = false
                document.getElementById("discount").style.display = "none"


            }
        }
    }, [offer])


    // update code end
    // update input box code start
    let [updateboxvalue, setupdateboxvalue] = useState({})

    const updatesbox = (e) => {
        if (e.target.id === 'Offer') {
            // Handle changes to the 'Offer' checkbox
            setOffer({
                ...offer,
                OfferStatus: e.target.checked ? 'enable' : 'disable',
            });
        } else {
            // Update the state when other inputs change
            setInsertAll({
                ...insertall,
                [e.target.id]: e.target.value,
            });
        }
    };


    // update input box code end
    // Offer code start
   

    function offertypechange(e) {
        let DiscountTypeValue = DiscountType.current.value
        if (DiscountTypeValue == "Amount") {
            let diffInProductAndDiscount = parseInt(productPrice.current.value) - parseInt(DiscountRate.current.value)
            Actual_Price.current.value = Math.random(diffInProductAndDiscount)
        }
        else {
            let diffInProductAndDiscount = parseInt(productPrice.current.value) - ((parseInt(productPrice.current.value) * parseInt(DiscountRate.current.value)) / 100)
            Actual_Price.current.value = Math.round(diffInProductAndDiscount)

        }
    }

    // Offer code end
    function changedata() {

    }
    function showandhide(e) {
        if (e.target.checked == true) {
            document.getElementById("discount").style.display = "block"

        }
        else if (e.target.checked == false) {
            document.getElementById("discount").style.display = "none"
        }
    }

    return (
        <div>
            <div ref={page_body} className="page-body">
                {/* Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="page-header-left">
                                    <h3>Product

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
                                    <li className="breadcrumb-item">Digital</li>
                                    <li className="breadcrumb-item active">Category</li>
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
                                <div className="card-header">
                                    <form className="form-inline search-form search-box">
                                        <div className="form-group">
                                            <input list='productlists' onChange={requestSearch} className="form-control-plaintext" type="search" placeholder="Search.." />
                                            <datalist id='productlists'>
                                                {Object.values(apidata).map(element => {
                                                    return (
                                                        <option value={element.Productname}>{element.Productname}</option>
                                                    )
                                                })}

                                            </datalist>
                                        </div>
                                    </form>
                                    <Link to="/Product"> <button type="button" className="btn btn-primary mt-md-0 mt-2" >Add
                                        product</button></Link>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive table-desi">
                                        <table className="table all-package table-category " id="editableTable">
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Status</th>
                                                    <th>Category</th>
                                                    <th>Option</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {

                                                    Object.values(filter).reverse().map((element, index) => {

                                                        if (element.Status == "enable")
                                                            return (
                                                                <tr>
                                                                    {/* mysql code start for image */}
                                                                    {/* <td>
                                                                        <img src={JSON.parse(element.Image)[0].url} data-field="image" alt />
                                                                    </td> */}
                                                                    {/* mysql code end for image */}

                                                                    <td>
                                                                    <img src={element.Image[0].url} alt="" />
                                                                </td>
                                                                    <td data-field="name">{element.Productname}</td>
                                                                    <td data-field="price">{element.Product_Price}</td>

                                                                    <td className="order-success" data-field="status">
                                                                        <span>{element.Status}</span>
                                                                    </td>
                                                                    <td data-field="name">{element.Categories}</td>
                                                                    <td>
                                                                        {/* <Link to="/Update"> */}
                                                                        <i className="fa fa-edit" onClick={edits} id={element.id} data-bs-toggle="modal" data-bs-target="#exampleModal" title="Edit" />
                                                                        {/* </Link> */}
                                                                        {/* <Link to="#">
                                                                        <i className="fa fa-trash" onClick={deletes} id={Object.keys(filter)[index]} title="Delete" />
                                                                    </Link> */}
                                                                        <Link to="#">
                                                                            <i className="fa fa-trash" onClick={deletes} id={element.id} title="Delete" />
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        else {
                                                            return (
                                                                <tr>
                                                                    {/* mysql code start for image */}
                                                                    {/* <td>
                                                                        <img src={JSON.parse(element.Image)[0].url} data-field="image" alt />
                                                                    </td> */}
                                                                    {/* mysql code end for image */}

                                                                    <td>
                                                                    <img src={element.Image[0].url} alt="" />
                                                                </td>
                                                                    <td data-field="name">{element.Productname}</td>
                                                                    <td data-field="price">{element.Product_Price}</td>

                                                                    <td className="order-pending" data-field="status">
                                                                        <span>{element.Status}</span>
                                                                    </td>
                                                                    <td data-field="name">{element.Categories}</td>
                                                                    <td>

                                                                        <i className="fa fa-edit" title="Edit" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={edits} id={element.id} />

                                                                        {/* <Link to="#">
                                                                        <i className="fa fa-trash" onClick={deletes} id={Object.keys(filter)[index]} title="Delete" />
                                                                    </Link> */}
                                                                        <Link to="#">
                                                                            <i className="fa fa-trash" onClick={deletes} id={element.id} title="Delete" />
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        }
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Container-fluid Ends*/}
            </div>
            <div className="modal fade" id="exampleModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title f-w-600" id="exampleModalLabel">Edit
                                Product</h5>
                            <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="needs-validation">
                                <div className="form">
                                    <div className="form-group">
                                        <label htmlFor="Productname" className="mb-1">Product Name :</label>
                                        <input className="form-control" value={insertall.Productname} onChange={updatesbox} id="Productname" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Categories" className="mb-1">Product Categories :</label>
                                        <select name="" value={insertall.Categories} className="form-control" onChange={updatesbox} id="Categories">
                                            {
                                                Categories.map(element => {
                                                    return (
                                                        <option value={element}>{element}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group ">
                                        <label htmlFor="ProductImage" className="mb-1">Product Image :</label>
                                        <input className="form-control" id="ProductImage" multiple type="file" />
                                    </div>
                                    <div className="form-group ">
                                        <label htmlFor="Quantity" className="mb-1">Product Quantity :</label>
                                        <input className="form-control" value={insertall.Quantity} onChange={updatesbox} id="Quantity" type="number" />
                                    </div>
                                    <div className="form-group ">
                                        <label htmlFor="Product_Price" className="mb-1">Product Price :</label>
                                        <input className="form-control" value={insertall.Product_Price} onChange={updatesbox} id="Product_Price" type="number" />
                                    </div>
                                    <div className="form-group  ">
                                        <label htmlFor="ProductPrice" className="mb-1">Product Status :</label>
                                        <div className=' d-flex justify-content-evenly ' >
                                            {/* <input className="form-control" onChange={updatesbox} id="ProductPrice" type="text" /> */}
                                            <div className=''> <input type="radio" name="showornot" id="enable" /> <label htmlFor="enable">Enable</label></div>
                                            <div className=''><input type="radio" name="showornot" id="disable" /> <label htmlFor="disable">Disable</label></div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ProductPrice" className="mb-1">Product Offer :</label>
                                        <div className=' border '>
                                            <div className='form-control border-0 '><input type="checkbox" name="" id="Offer" onChange={showandhide} /><label htmlFor="Offer" style={{ marginLeft: "10px" }}> Offer</label></div>
                                            {offer.OfferStatus === 'enable' && (
                                                <div className='form-control border-0 bor ' style={{ display: "none" }} id='discount'>
                                                    <p>Discount</p>
                                                    <div className='row container '>
                                                        <select
                                                            ref={DiscountType}
                                                            name="DiscountType"
                                                            onChange={(e) => setOffer({ ...offer, DiscountType: e.target.value })}
                                                            className='form-control w-25 '
                                                            value={offer.DiscountType}
                                                        >
                                                            <option value="%">%</option>
                                                            <option value="Amount">Amount</option>
                                                        </select>
                                                        <input
                                                            type="text"
                                                            ref={productPrice}
                                                            value={offer.ProductPrice}
                                                            onChange={(e) => setOffer({ ...offer, ProductPrice: e.target.value })}
                                                            disabled
                                                            className='col-9'
                                                        />
                                                    </div>
                                                    <div className='row container '>
                                                        <input type="number" onInput={offertypechange} onChange={(e) => setOffer({ ...offer, DiscountRate: e.target.value })} name="" value={(offer.DiscountRate)} id="DiscountRate" ref={DiscountRate} className='form-control w-50' />
                                                        <input type="text" name="" value={(insertall.Offer).Actual_Price} id="Actual_Price" ref={Actual_Price} disabled className='col-6' />
                                                    </div>
                                                </div>
                                            )}
                                            {offer.OfferStatus === 'disable' && (
                                                <div className='form-control border-0 bor ' style={{ display: "none" }} id='discount'>
                                                    <p>Discount</p>
                                                    <div className='row container '>
                                                        <select
                                                            ref={DiscountType}
                                                            name="DiscountType"
                                                            onChange={(e) => setOffer({ ...offer, DiscountType: e.target.value })}
                                                            className='form-control w-25 '
                                                            value={offer.DiscountType}
                                                        >
                                                            <option value="%">%</option>
                                                            <option value="Amount">Amount</option>
                                                        </select>
                                                        <input
                                                            type="text"
                                                            ref={productPrice}
                                                            value={offer.ProductPrice}
                                                            onChange={(e) => setOffer({ ...offer, ProductPrice: e.target.value })}
                                                            disabled
                                                            className='col-9'
                                                        />
                                                    </div>
                                                    <div className='row container '>
                                                        <input type="number" onInput={offertypechange} onChange={(e) => setOffer({ ...offer, DiscountRate: e.target.value })} name="" value={(offer.DiscountRate)} id="DiscountRate" ref={DiscountRate} className='form-control w-50' />
                                                        <input type="text" name="" value={(insertall.Offer).Actual_Price} id="Actual_Price" ref={Actual_Price} disabled className='col-6' />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description" className="mb-1">Product Description :</label>
                                    <div className='container'>
                                        <textarea name="" onChange={updatesbox} value={insertall.description} className='form-control' id="description" rows="5"></textarea>
                                    </div>
                                </div>
                            </form>
                            <button onClick={changedata}>change</button>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" type="button">Save</button>
                            <button className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div >

    )
}
