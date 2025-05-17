import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function PortfolioIndex() {
  const [portfolio, setPortfolio] = useState([]);

  const getData = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API}/admin/portfolio`);
    setPortfolio(response.data.data);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${import.meta.env.VITE_API}/admin/portfolio/${id}`);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page-content">
      <div className="container-fluid">
        {/* start page title */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Portfolio List</h4>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Portfolio</a>
                  </li>
                  <li className="breadcrumb-item active">Portfolio List</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* end page title */}
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="col-sm">
                <div className="mb-4">
                  <a href="/admin/portfolio/create">
                    <button
                      type="button"
                      className="btn btn-light waves-effect waves-light"
                    >
                      <i className="bx bx-plus me-1" /> Add Portfolio
                    </button>
                  </a>
                </div>
              </div>
              <div className="card-body">
                <table
                  id="datatable"
                  className="table table-bordered dt-responsive nowrap w-100"
                >
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Slug</th>
                      <th>Client Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {portfolio.map((item) => (
                      <tr key={item._id}>
                        <td>{item.title}</td>
                        <td>{item.slug}</td>
                        <td>{item.client_name}</td>
                        <td>
                          <a href={`/admin/portfolio/${item._id}/edit`}>
                            <i className="bx bx-pencil" />
                          </a>
                          <a onClick={() => handleDelete(item._id)}>
                            <i className="bx bx-trash"></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
