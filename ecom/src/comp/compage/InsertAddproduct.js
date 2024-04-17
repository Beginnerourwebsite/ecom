import React, { useContext, useEffect, useRef, useState } from 'react'
import "../css/insertitem.css"
import Fileselectinproduct from '../Fileselectinproduct'
import { Units } from '../looptime/AllLoopitems'
import { Optionsloops } from '../looptime/useOptionloop'
import Categories from './Categoriesapi'
// import Allfirebasecmd from '../all/Allfirebasecmd'
// import Fire from "../../Fire"
export default function InsertAddproduct() {

    let [insertselect, setinsertselect] = useState("")
    var Image = useRef()

    useEffect(() => {
        let allotions = Optionsloops(Units(), "Productunit", "Abbreviation")

        setinsertselect(allotions)
    }, [Units])

    useEffect(() => {
        setTimeout(() => {
            console.clear()

        }, (500));
    }, [])



    // its for image code start------------------------------------------------------

    let [AllImage, SetAllImage] = useState([])
    function image(data) {
        return new Promise((resolve) => {
            let reader = new FileReader();

            reader.onload = function () {
                let Obj = {
                    url: reader.result,
                    Name: data.name,
                    lastModified: data.lastModified,
                    type: data.type,
                    size: data.size,
                    webkitRelativePath: data.webkitRelativePath,
                };

                resolve(Obj);
            };

            reader.readAsDataURL(data);
        });
    }
    async function dd() {
        Image.current.click();
        let a = 0
        let arr = []
        Image.current.addEventListener("change", async (e) => {
            if (a == 0) {
                for (let i = 0; i <= e.target.files.length - 1; i++) {
                    let data = e.target.files[i];
                    let ourfile = await image(data);
                    arr.push(ourfile)

                }
                SetAllImage([...AllImage, ...arr]);
                a = 1
            }
        });
    }
    // its for image code end----------------------------------------------------------------------------



    // its for Measurement code start----------------------------------------------------------------------------

    let [MeasurementUnitState, setMeasurementUnitState] = useState([])
    let Measurement = useRef()
    let UnitMeasurementinput = useRef()
    let UnitMeasurementBtn = useRef()
    let Multyunit = useRef()
    function Measurementchange(e) {
        let selectValue = Measurement.current.value
        if (selectValue == "") {
            Measurement.current.setAttribute("class", "custom-select form-control")
            UnitMeasurementinput.current.style.display = "none"
            UnitMeasurementBtn.current.style.display = "none"
            Multyunit.current.style.display = "none"
            setMeasurementUnitState([])
        }
        else {
            Measurement.current.setAttribute("class", "float-start custom-select form-control w-25 ")
            UnitMeasurementinput.current.style.display = "block"
            UnitMeasurementBtn.current.style.display = "block"

        }


    }

    let Addunit = () => {
        let selectValue = Measurement.current.value
        let inputValue = UnitMeasurementinput.current.value
        let mainValue = `${inputValue}${selectValue}`
        setMeasurementUnitState([...MeasurementUnitState, mainValue])

    }

    let MeasurementData = []
    let deleteMeasurementUnits = (e) => {

        let boxId = e.target.id

        MeasurementUnitState.splice(boxId, 1)

        MeasurementData = MeasurementUnitState
        setMeasurementUnitState([...MeasurementUnitState])
    }

    useEffect(() => {
        if (MeasurementUnitState.length == 0) {
            Multyunit.current.style.display = "none"
        } else {
            Multyunit.current.style.display = "block"
        }
    }, [MeasurementUnitState])

    // its for Measurement code end----------------------------------------------------------------------------


    // its for Discount code start----------------------------------------------------------------------------


    let discountRate = useRef()
    let Discountsection = useRef()
    let discountType = useRef()
    let productPrice = useRef()
    let Actual_Price = useRef()
    let Product_Price_disable = useRef()
    function changediscounttype(e) {
        discountRate.current.value = ""
    }
    let [discounts, setdiscounts] = useState({
        "OfferStatus": "disable"
    })
    function offerornot(e) {
        console.log(e.target.checked)
        let CheckorNot = e.target.checked
        if (CheckorNot == true) {
            Discountsection.current.style.display = "block"
            setdiscounts({
                OfferStatus: "enable",
                DiscountType: "",
                ProductPrice: "",
                DiscountRate: "",
                Actual_Price: ""
            })
        }
        else {

            setdiscounts({
                "OfferStatus": "disable"
            })
            Discountsection.current.style.display = "none"

        }

    }


    let fetchvalue = (e) => {
        Product_Price_disable.current.value = e.target.value
    }
    let changediscountrate = (e) => {
        let Typevalue = e.target.value
        let product_price = Product_Price_disable.current.value
        let discountTypevalue = discountType.current.value
        if (product_price == "") alert("please enter product price")
        else {
            if (discountTypevalue == "%") {
                let ActualPrice = product_price - (product_price * Typevalue / 100)
                Actual_Price.current.value = ActualPrice
                setdiscounts({
                    OfferStatus: "enable",
                    DiscountType: "%",
                    ProductPrice: product_price,
                    DiscountRate: Typevalue,
                    Actual_Price: ActualPrice
                })

            }
            else {
                let ActualPrice = product_price - Typevalue
                Actual_Price.current.value = ActualPrice
                setdiscounts({
                    OfferStatus: "enable",
                    DiscountType: "Amount",
                    DiscountRate: Typevalue,
                    ProductPrice: product_price,
                    Actual_Price: ActualPrice
                })
            }
        }

    }

    // its for Discount code end----------------------------------------------------------------------------
    // input box value start
    let [myallinput, setmyallinput] = useState({})
    function allInput(e) {
        setmyallinput({ ...myallinput, [e.target.id]: e.target.value })
    }


    // input box value end
    // submit and discard start
    let [confirmation, setconfirmation] = useState(0)
    function save() {
        // setmyallinput({
        //     ...myallinput, "Image": AllImage, "Measurement": MeasurementUnitState,
        //     Offer: discounts
        // })
        setmyallinput({
            ...myallinput, Image: AllImage,
            Offer: discounts
        })


        setconfirmation(confirmation + 1)
    }
    useEffect(() => {
        if (confirmation != 0) {

            let datalengths = Object.keys(myallinput).length

            if (datalengths >= 5) {
                // firebase code start
                // let getStatus = Allfirebasecmd("products/list", "insert", myallinput)
                // firebase code end
                // mysql code start
                fetch("http://localhost:5000/", {
                    method: "post",
                    body: JSON.stringify(myallinput),
                    headers: {
                        "content-type": "application/json"
                    }
                }).then(data => {
                    data.json().then(data => {
                        // console.log(data.data)
                        if(data.data=="saves"){
                            alert("save")
                            window.location.reload()
                        }
                    })
                })
                // mysql code end
            }

        }
    }, [confirmation])


    function discard() {
        window.location.reload()
    }


    // submit and discard end


    return (
        <div className="page-body">
            {/* Container-fluid starts*/}
            <div className="container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="page-header-left">
                                <h3>Add Products

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
                                <li className="breadcrumb-item active">Add Product</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            {/* Container-fluid Ends*/}
            {/* Container-fluid starts*/}
            <div className="container-fluid">
                <div className="row product-adding">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>General</h5>
                            </div>
                            <div className="card-body">
                                <div className="digital-add needs-validation">
                                    <div className="form-group">
                                        <label htmlFor="Productname" className="col-form-label pt-0"><span>*</span>
                                            Name</label>
                                        <input className="form-control" onChange={allInput} id="Productname" type="text" required />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor='Categories' className="col-form-label categories-basic" ><span>*</span>
                                            Categories</label>
                                        <select className="custom-select form-control" onChange={allInput} id={"Categories"} required>
                                            <option value>--Select--</option>
                                            {
                                                Categories.map(element => {
                                                    return (
                                                        <option value={element}>{element}</option>
                                                    )
                                                })
                                            }

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label categories-basic"><span>*</span>
                                            Units of Measurement </label>
                                        <br />
                                        <select name="" ref={Measurement} onClick={Measurementchange} onChange={Measurementchange} className="custom-select form-control">
                                            {insertselect}
                                        </select>
                                        <input className="form-control w-50 float-start" ref={UnitMeasurementinput} style={{ display: "none" }} type="number" />
                                        <button className='btn btn-info w-25 text-white ' ref={UnitMeasurementBtn} onClick={Addunit} style={{ display: "none" }}>Add</button>
                                        <div className='form-control mt-3  border ' id={"Multyunit"} ref={Multyunit} style={{ display: "none" }}>
                                            {
                                                MeasurementUnitState.map((element, index) => {
                                                    return (
                                                        <div id={index} onClick={deleteMeasurementUnits}>{element}</div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div> 

                                    <div className="form-group">
                                        <label htmlFor="Quantity" className="col-form-label pt-0"><span>*</span>
                                            Quantity</label>
                                        <input className="form-control" onChange={allInput} id="Quantity" placeholder='Min 2' type="number" min={2} required />
                                    </div>
                                    {/* <div className="form-group">
                                        <label className="col-form-label" htmlFor='Sort_Summary'>Sort Summary</label>
                                        <textarea rows={5} id='Sort_Summary' onChange={allInput} cols={12} defaultValue={""} />
                                    </div> */}
                                    <div className="form-group">
                                        <label htmlFor="Product_Price" className="col-form-label"><span>*</span>
                                            Product Price</label>
                                        <br />
                                        <input className="form-control w-75 float-start " onChange={allInput} ref={productPrice} onKeyUp={fetchvalue} id="Product_Price" type="number" min={10} required />
                                        {/* <input className="form-control w-25 float-start  " placeholder="Currency" id="validationCustomtitle" type="text" min={10} required /> */}
                                        <select className="form-control w-25 float-start " onChange={allInput} name="" id="Currency">
                                            <option value="#" selected>Choose Currency</option>
                                            <option title='$' value='$'>Dollar Symbol - $</option>
                                            <option title='€' value='€'>Euro Symbol - €</option>
                                            <option title='£' value='£'>Pound Sterling Symbol – £</option>
                                            <option title='¥' value='¥'>Yen Symbol – ¥</option>
                                            <option title='₣' value='₣'>Franc Symbol – ₣</option>
                                            <option title='₹' value='₹'>Rupee Symbol – ₹</option>
                                            <option title='ك' value='.ك'>Dinar Symbol – د.ك</option>
                                            <option title='د.إ' value='د.إ'>Dirham Symbol – د.إ</option>
                                            <option title='₻' value='₻'>Mark Symbol – ₻</option>
                                            <option title='₽' value='₽'>Ruouble Symbol – ₽</option>
                                            <option title='₾' value='₾'>Lari Symbol - ₾</option>
                                            <option title='₺' value='₺'>Lira Symbol - ₺</option>
                                            <option title='₼' value='₼'>Manat Symbol – ₼</option>
                                            <option title='₸' value='₸'>Tenge Symbol – ₸</option>
                                            <option title='₴' value='₴'>Hryvnia Symbol – ₴</option>
                                            <option title='₷' value='₷'>Spesmilo Symbol – ₷</option>
                                            <option title='฿' value='฿'>Baht Symbol - ฿</option>
                                            <option title='원' value='원'>Won Symbol – 원</option>
                                            <option title='₫' value='₫'>Dong Symbol – ₫</option>
                                            <option title='₮' value='₮'>Tugrik Symbol – ₮</option>
                                            <option title='₯' value='₯'>Drachma Symbol – ₯</option>
                                            <option title='₱' value='₱'>Peso Symbol – ₱</option>
                                            <option title='₳' value='₳'>Austral Symbol – ₳</option>
                                            <option title='₵' value='₵'>Cedi Symbol – ₵</option>
                                            <option title='₲' value='₲'>Guarani Symbol – ₲</option>
                                            <option title='₪' value='₪'>Sheqel Symbol – ₪</option>
                                            <option title='₰' value='₰'>Penny Symbol – ₰</option>

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label"><span>*</span> Status</label>
                                        <div className="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                                            <label className="d-block" htmlFor="Statusradio">
                                                <input className="radio_animated" onChange={(e) => setmyallinput({ ...myallinput, "Status": "enable" })} value="Enable" id="Statusradio" type="radio" name="rdo-ani" />
                                                Enable
                                            </label>
                                            <label className="d-block" htmlFor="Statusradio1">
                                                <input value={"Disable"} onChange={(e) => setmyallinput({ ...myallinput, "Status": "disable" })} className="radio_animated" id="Statusradio1" type="radio" name="rdo-ani" />
                                                Disable
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">

                                        <label className="d-block" htmlFor="Offer">
                                            <input value={"Disable"} className="radio_animated" id="Offer" onChange={offerornot} type="checkbox" name="rdo-ani" />
                                            Offer
                                        </label>

                                        <section>
                                            <dir ref={Discountsection} style={{ display: "none" }}>
                                                <label htmlFor="Discountrate" className="col-form-label pt-0"> Discount</label>
                                                <br />

                                                <select className="form-control w-25 float-start  " onClick={changediscounttype} ref={discountType} name="" id="">
                                                    <option value="%">%</option>
                                                    <option value="Amount">Amount</option>
                                                </select>
                                                <input className="form-control w-75 float-start " ref={Product_Price_disable} placeholder="Product Price" disabled id="validationCustomtitle" type="number" min={10} required />
                                                <input className="form-control w-50 float-start  " onChange={changediscountrate} ref={discountRate} id="Discountrate" type="number" min={10} required />
                                                <input className="form-control w-50 float-start  " ref={Actual_Price} placeholder="Actual Price" disabled id="validationCustomtitle" type="number" min={10} required />

                                            </dir>

                                        </section>
                                    </div>
                                    <div className="form-group">

                                        <label className="col-form-label pt-0"><span>*</span> Product Upload</label>
                                        <input type="file" name="" hidden accept='image/*' ref={Image} multiple />
                                        <form className="dropzone digits dz-clickable" onClick={dd} id="multiFileUpload" action="https://themes.pixelstrap.com/upload.php">
                                            <div className="dz-message needsclick imgchild" style={{ cursor: "pointer" }}><i className="fa fa-cloud-upload" />
                                                <h4 className="mb-0 f-w-600 imgchild"  >Drop files here or click to upload.</h4>
                                            </div>
                                            {
                                                AllImage ? AllImage.map(function (obj) {



                                                    // if()
                                                    return (
                                                        <div className="dz-preview dz-processing dz-image-preview dz-error dz-complete" style={{ height: "100%" }} >
                                                            <div className="dz-image"><img width={"100%"} data-dz-thumbnail src={obj.url} alt={obj.name} /></div>
                                                            <div className="dz-details">
                                                                <div className="dz-filename"><span data-dz-name>{obj.name}</span></div>
                                                            </div>
                                                        </div>
                                                    )
                                                }) : ""
                                            }
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5>Add Description</h5>
                            </div>
                            <div className="card-body">
                                <div className="digital-add needs-validation">
                                    <div className="form-group mb-0">
                                        <div className="description-sm">
                                            <textarea id="description" onChange={allInput} name="editor1" cols={10} rows={4} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3  mb-0">
                                        <div className="product-buttons">
                                            <button onClick={save} type="button" className="btn btn-primary">Add</button>
                                            <button type="button" onClick={discard} className="btn btn-light">Discard</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="card">
                            <div className="card-header">
                                <h5>Meta Data</h5>
                            </div>
                            <div className="card-body">
                                <div className="digital-add needs-validation">
                                    <div className="form-group">
                                        <label htmlFor="validationCustom05" className="col-form-label pt-0"> Meta
                                            Title</label>
                                        <input className="form-control" id="validationCustom05" type="text" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Meta Description</label>
                                        <textarea rows={4} cols={12} defaultValue={""} />
                                    </div>
                                    <div className="form-group mb-0">
                                        <div className="product-buttons">
                                            <button type="button" className="btn btn-primary">Add</button>
                                            <button type="button" className="btn btn-light">Discard</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* Container-fluid Ends*/}
        </div>

    )
}
