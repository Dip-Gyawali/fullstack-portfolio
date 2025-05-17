import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';

export default function ServiceEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    desc: '',
    excerpt: '',
    cover_img: null,
    currentImage: null 
  });

  useEffect(() => {
    const getService = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API}/admin/service/${id}`);
        const service = response.data;
        setFormData({
          title: service.title,
          slug: service.slug,
          desc: service.desc,
          excerpt: service.excerpt,
          cover_img: null,
          currentImage: service.cover_img 
        });
      } catch (error) {
        console.error('Error fetching service:', error);
        setError('Failed to fetch service details');
      }
    };
    getService();
  }, [id]);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  useEffect(() => {
    if (formData.title) {
      setFormData(prev => ({
        ...prev,
        slug: generateSlug(prev.title)
      }));
    }
  }, [formData.title]);

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
      cover_img: e.target.files[0]
    }));
  };

  const handleEditorChange = (content) => {
    setFormData(prev => ({
      ...prev,
      desc: content
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('slug', formData.slug);
      formDataToSend.append('desc', formData.desc);
      formDataToSend.append('excerpt', formData.excerpt);
      if (formData.cover_img) {
        formDataToSend.append('cover_img', formData.cover_img);
      }
      formDataToSend.append('_method', 'PUT');

      const response = await axios.put(`${import.meta.env.VITE_API}/admin/service/${id}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        navigate('/admin/service');
      }
    } catch (error) {
      console.error('Error updating service:', error);
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError('Failed to update service');
      }
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
              <h4 className="mb-sm-0 font-size-18">Edit Service</h4>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Services</a>
                  </li>
                  <li className="breadcrumb-item active">Edit Service</li>
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
                  <a href="/admin/service">
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
                        {error && (
                          <div className="alert alert-danger" role="alert">
                            {error}
                          </div>
                        )}
                        <div className="mb-3">
                          <label htmlFor="title" className="form-label">
                            Service Title
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter service title"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="slug" className="form-label">
                            Slug
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="slug"
                            name="slug"
                            value={formData.slug}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter slug"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="excerpt" className="form-label">
                            Excerpt
                          </label>
                          <textarea
                            className="form-control"
                            id="excerpt"
                            name="excerpt"
                            value={formData.excerpt}
                            onChange={handleInputChange}
                            rows="3"
                            placeholder="Enter excerpt"
                          ></textarea>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="desc" className="form-label">
                            Description
                          </label>
                          <Editor
                          apiKey="9kp5xb6yatz2q6waohzmrffy7bhqqo02307mgo0ced26kp9k"
                            value={formData.desc}
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
                        
                        {formData.currentImage && (
                          <div className="mb-3">
                            <label className="form-label">Current Cover Image</label>
                            <div>
                              <img 
                                src={`${import.meta.env.VITE_IMAGE_URL}/uploads/${formData.currentImage}`}
                                alt="Current service cover"
                                style={{ maxWidth: '200px' }}
                                className="img-thumbnail"
                              />
                            </div>
                          </div>
                        )}
                        
                        <div className="mb-3">
                          <label htmlFor="cover_img" className="form-label">
                            {formData.currentImage ? 'Change Cover Image (optional)' : 'Cover Image'}
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="cover_img"
                            name="cover_img"
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
                            {loading ? 'Updating...' : 'Update Service'}
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