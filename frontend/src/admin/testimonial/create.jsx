import React, { useState } from "react";
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateTestimonial() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    testimonial_name: '',
    testimonial_designation: '',
    testimonial_message: '',
    image: null
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setFormData(prev => ({
      ...prev,
      image: e.target.files[0]
    }));
  };

  const handleEditorChange = (content) => {
    setFormData(prev => ({
      ...prev,
      testimonial_message: content
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('testimonial_name', formData.testimonial_name);
      formDataToSend.append('testimonial_designation', formData.testimonial_designation);
      formDataToSend.append('testimonial_message', formData.testimonial_message);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      const response = await axios.post(`${import.meta.env.VITE_API}/admin/testimonial`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 201) {
        navigate('/admin/testimonials');
      }
    } catch (error) {
      console.error('Error creating testimonial:', error);
      alert('Failed to create testimonial');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-content">
      <div className="container-fluid">
        {/* start page title */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Create Testimonial</h4>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Testimonials</a>
                  </li>
                  <li className="breadcrumb-item active">Create Testimonial</li>
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
                  <a href="/admin/testimonials">
                    <button
                      type="button"
                      className="btn btn-light waves-effect waves-light"
                    >
                      <i className="bx bx-arrow-back me-1" /> Back
                    </button>
                  </a>
                </div>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div>
                        <div className="mb-3">
                          <label htmlFor="testimonial_name" className="form-label">
                            Testimonial Name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="testimonial_name"
                            name="testimonial_name"
                            value={formData.testimonial_name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="testimonial_designation" className="form-label">
                            Testimonial Designation
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="testimonial_designation"
                            name="testimonial_designation"
                            value={formData.testimonial_designation}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Testimonial Message</label>
                          <Editor
                            apiKey="9kp5xb6yatz2q6waohzmrffy7bhqqo02307mgo0ced26kp9k"
                            init={{
                              height: 300,
                              menubar: false,
                              plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                              ],
                              toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                            onEditorChange={handleEditorChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="image" className="form-label">
                            Testimonial Image
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleImageChange}
                            accept="image/*"
                          />
                        </div>
                        <div className="mt-4">
                          <button
                            type="submit"
                            className="btn btn-primary waves-effect waves-light"
                            disabled={loading}
                          >
                            {loading ? 'Creating...' : 'Create Testimonial'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
