import React from 'react'

export default function InsertProductCategory() {
  return (
    <div><div className="page-body">
    {/* Container-fluid starts*/}
    <div className="container-fluid">
      <div className="page-header">
        <div className="row">
          <div className="col-lg-6">
            <div className="page-header-left">
              <h3>Category
                <small>Multikart Admin panel</small>
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
                  <input className="form-control-plaintext" type="search" placeholder="Search.." />
                </div>
              </form>
              <button type="button" className="btn btn-primary mt-md-0 mt-2" data-bs-toggle="modal" data-original-title="test" data-bs-target="#exampleModal">Add
                Category</button>
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
                    <tr>
                      <td>
                        <img src="assets/images/digital-product/graphic-design.png" data-field="image" alt />
                      </td>
                      <td data-field="name">Graphic Design</td>
                      <td data-field="price">$57.00</td>
                      <td className="order-success" data-field="status">
                        <span>Success</span>
                      </td>
                      <td data-field="name">Digital</td>
                      <td>
                        <a href="javascript:void(0)">
                          <i className="fa fa-edit" title="Edit" />
                        </a>
                        <a href="javascript:void(0)">
                          <i className="fa fa-trash" title="Delete" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="assets/images/digital-product/ebooks.png" alt />
                      </td>
                      <td data-field="name">eBook</td>
                      <td data-field="price">$462.00</td>
                      <td className="order-pending" data-field="status">
                        <span>Pending</span>
                      </td>
                      <td data-field="name">Digital</td>
                      <td>
                        <a href="javascript:void(0)">
                          <i className="fa fa-edit" title="Edit" />
                        </a>
                        <a href="javascript:void(0)">
                          <i className="fa fa-trash" title="Delete" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="assets/images/digital-product/lecture-video-recorder.jpg" alt />
                      </td>
                      <td data-field="name">Recorded lectures</td>
                      <td data-field="price">$54.00</td>
                      <td className="order-success" data-field="status">
                        <span>Success</span>
                      </td>
                      <td data-field="name">Digital</td>
                      <td>
                        <a href="javascript:void(0)">
                          <i className="fa fa-edit" title="Edit" />
                        </a>
                        <a href="javascript:void(0)">
                          <i className="fa fa-trash" title="Delete" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="assets/images/digital-product/application.jpg" alt />
                      </td>
                      <td data-field="name">Application</td>
                      <td data-field="price">$576.00</td>
                      <td className="order-warning" data-field="status">
                        <span>Waiting</span>
                      </td>
                      <td data-field="name">Digital</td>
                      <td>
                        <a href="javascript:void(0)">
                          <i className="fa fa-edit" title="Edit" />
                        </a>
                        <a href="javascript:void(0)">
                          <i className="fa fa-trash" title="Delete" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="assets/images/digital-product/web-dev.jpg" alt />
                      </td>
                      <td data-field="name">Websites</td>
                      <td data-field="price">$782.00</td>
                      <td className="order-success" data-field="status">
                        <span>Success</span>
                      </td>
                      <td data-field="name">Digital</td>
                      <td>
                        <a href="javascript:void(0)">
                          <i className="fa fa-edit" title="Edit" />
                        </a>
                        <a href="javascript:void(0)">
                          <i className="fa fa-trash" title="Delete" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Container-fluid Ends*/}
  </div></div>

  )
}
