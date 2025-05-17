import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Editor } from '@tinymce/tinymce-react';

export default function PortfolioEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    rank: '',
    client_name: "",
    link: "",
    category: "", 
    desc: "",
    cover_img: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesResponse, portfolioResponse] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API}/admin/portfolio-category`),
          axios.get(`${import.meta.env.VITE_API}/admin/portfolio/${id}`)
        ]);
        
        setCategories(categoriesResponse.data.data);
        setFormData({
          ...portfolioResponse.data,
          cover_img: null,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data');
      }
    };
    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditorChange = (content, editor) => {
    setFormData(prev => ({
      ...prev,
      desc: content
    }));
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      cover_img: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formDataToSend = new FormData();
      
      // Append all text fields
      Object.keys(formData).forEach(key => {
        if (key !== 'cover_img') {
          formDataToSend.append(key, formData[key]);
        }
      });

      // Append cover image
      if (formData.cover_img) {
        formDataToSend.append('cover_img', formData.cover_img);
      }

      const response = await axios.put(
        `${import.meta.env.VITE_API}/admin/portfolio/${id}`, 
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      if (response.status === 200) {
        navigate('/admin/portfolio');
      }
    } catch (error) {
      console.error('Error updating portfolio:', error);
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError('Failed to update portfolio');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Edit Portfolio</h4>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="/admin/portfolio">Portfolio</a>
                  </li>
                  <li className="breadcrumb-item active">Edit Portfolio</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="col-sm">
                <div className="mb-4">
                  <a href="/admin/portfolio">
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
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="rank" className="form-label">Rank</label>
                        <input
                          type="number"
                          className="form-control"
                          id="rank"
                          name="rank" 
                          value={formData.rank}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Slug</label>
                        <input
                          type="text"
                          className="form-control"
                          id="slug"
                          name="slug"
                          value={formData.slug}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <select
                          className="form-select"
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select Category</option>
                          {categories.map((category) => (
                            <option key={category._id} value={category.name}> 
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="client_name" className="form-label">Client Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="client_name"
                          name="client_name"
                          value={formData.client_name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="link" className="form-label">Project Link</label>
                        <input
                          type="url"
                          className="form-control"
                          id="link"
                          name="link"
                          value={formData.link}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="cover_img" className="form-label">Cover Image</label>
                        <input
                          type="file"
                          className="form-control"
                          id="cover_img"
                          name="cover_img"
                          onChange={handleCoverImageChange}
                          accept="image/*"
                        />
                        {formData.cover_img && (
                          <div className="mt-2">
                            <span className="text-success">
                              File selected: {formData.cover_img.name}
                            </span>
                          </div>
                        )}
                        {formData.cover_img === null && formData._id && (
                          <div className="mt-2">
                            <span className="text-info">
                              Current image will be retained unless you select a new one
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Project Description</label>
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
                          value={formData.desc}
                          onEditorChange={handleEditorChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary waves-effect waves-light"
                      disabled={loading}
                    >
                      {loading ? 'Updating...' : 'Update Portfolio'}
                    </button>
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