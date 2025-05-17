import React, { useState, useEffect } from "react";
import axios from "axios";

export default function RolesIndex() {

  const [roles, setRoles] = useState([]);

  const getData = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API}/admin/role`);
    setRoles(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${import.meta.env.VITE_API}/admin/role/${id}`);
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
              <h4 className="mb-sm-0 font-size-18">Role List</h4>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Role</a>
                  </li>
                  <li className="breadcrumb-item active">Role List</li>
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
                  <a href="/admin/roles/create">
                    <button
                      type="button"
                      className="btn btn-light waves-effect waves-light"
                    >
                      <i className="bx bx-plus me-1" /> Add Role
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
                      <th>Created At</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roles.map((item) => (
                      <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{new Date(item.createdAt).toLocaleString()}</td>
                        <td>
                          <a href={`/admin/roles/${item._id}/edit`}>
                            <i className="bx bx-pencil"></i>
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
