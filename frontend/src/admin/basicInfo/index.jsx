import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function BasicInfoIndex() {
  const [basicInfo, setBasicInfo] = useState(null);
  
  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}/admin/basic-info`);
      setBasicInfo(response.data.data);
    } catch (error) {
      console.error('Error fetching basic info:', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${import.meta.env.VITE_API}/admin/basic-info/${id}`);
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
              <h4 className="mb-sm-0 font-size-18">Basic Information</h4>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Basic Info</a>
                  </li>
                  <li className="breadcrumb-item active">Basic Info List</li>
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
                  <a href="/admin/basic-info/create">
                    <button
                      type="button"
                      className="btn btn-light waves-effect waves-light"
                    >
                      <i className="bx bx-plus me-1" /> Add Basic Info
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
                      <th>Degree</th>
                      <th>Phone Number</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {basicInfo && basicInfo.map((info) => (
                      <tr key={info._id}>
                        <td>{info.name}</td>
                        <td>{info.degree}</td>
                        <td>{info.phone_no}</td>
                        <td>{info.email}</td>
                        <td>
                          <a href={`/admin/basic-info/${info._id}/edit`} className="btn btn-primary btn-sm">
                            Edit
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
