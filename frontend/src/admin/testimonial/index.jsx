import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TestimonialIndex() {
  const [testimonialData, setTestimonialData] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API}/admin/testimonial`
    );
    setTestimonialData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${import.meta.env.VITE_API}/admin/testimonial/${id}`);
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
              <h4 className="mb-sm-0 font-size-18">Testimonials List</h4>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Testimonials</a>
                  </li>
                  <li className="breadcrumb-item active">Testimonials List</li>
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
                  <a href="/admin/testimonials/create">
                    <button
                      type="button"
                      className="btn btn-light waves-effect waves-light"
                      onClick={() => navigate("/admin/testimonials/create")}
                    >
                      <i className="bx bx-plus me-1" /> Add Testimonial
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
                      <th>Position</th>
                      <th>Image</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {testimonialData.map((item) => (
                      <tr key={item._id}>
                        <td>{item.testimonial_name}</td>
                        <td>{item.testimonial_designation}</td>
                        <td>
                          <img
                            src={`${import.meta.env.VITE_IMAGE_URL}/uploads/${
                              item.image
                            }`}
                            alt="Testimonial"
                            style={{ width: "80px", height: "auto" }}
                          />
                        </td>
                        <td>
                          <a href={`/admin/testimonials/${item._id}/edit`}>
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
