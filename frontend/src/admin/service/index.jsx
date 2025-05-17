import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ServiceIndex() {
  const [services, setServices] = useState([]);
  const getData = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API}/admin/service`);
    setServices(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${import.meta.env.VITE_API}/admin/service/${id}`);
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
              <h4 className="mb-sm-0 font-size-18">Services List</h4>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Services</a>
                  </li>
                  <li className="breadcrumb-item active">Services List</li>
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
                  <a href="/admin/service/create">
                    <button
                      type="button"
                      className="btn btn-light waves-effect waves-light"
                    >
                      <i className="bx bx-plus me-1" /> Add Service
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
                      <th>Name</th>
                      <th>Slug</th>
                      <th>Created At</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((service) => (
                      <tr key={service._id}>
                        <td>{service.title}</td>
                        <td>{service.slug}</td>
                        <td>{new Date(service.createdAt).toLocaleString()}</td>
                        <td>
                          <a href={`/admin/service/${service._id}/edit`}>
                            <i className="bx bx-pencil" />
                          </a>
                          <a onClick={() => handleDelete(service._id)}>
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
