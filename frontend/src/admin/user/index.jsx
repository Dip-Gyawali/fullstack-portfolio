import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserIndex() {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/admin/user`);
      setUserData(res?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API}/admin/user/${id}`
      );
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
              <h4 className="mb-sm-0 font-size-18">User List</h4>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Users</a>
                  </li>
                  <li className="breadcrumb-item active">User List</li>
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
                  <a href="/admin/user/create">
                    <button
                      type="button"
                      className="btn btn-light waves-effect waves-light"
                    >
                      <i className="bx bx-plus me-1" /> Add User
                    </button>
                  </a>
                </div>
              </div>
              <div className="card-body">
                <table
                  id="datatable"
                  className="table table-bordered dt-responsive  nowrap w-100"
                >
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Created At</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.map((item) => (
                      <tr key={item._id}>
                        <td>{item.email}</td>
                        <td>{new Date(item.createdAt).toLocaleString()}</td>
                        <td>
                          <a href={`/admin/user/${item._id}/edit`}>
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
