import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';

export default function CreateBasicInfo() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    facebook_link: '',
    linkedin_link: '',
    github_link: '',
    gitlab_link: '',
    insta_link: '',
    degree: '',
    phone_no: '',
    email: '',
    location: '',
    experience: '',
    summary: '',
    education: '',
    job_experience: '',
    image: null,
    cover_image: null,
    cv: null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0]
    }));
  };

  const handleEditorChange = (content, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: content
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
        if (key !== 'image' && key !== 'cover_image' && key !== 'cv') {
          formDataToSend.append(key, formData[key]);
        }
      });

      // Append files if they exist
      if (formData.image) formDataToSend.append('image', formData.image);
      if (formData.cover_image) formDataToSend.append('cover_image', formData.cover_image);
      if (formData.cv) formDataToSend.append('cv', formData.cv);

      const response = await axios.post(`${import.meta.env.VITE_API}/admin/basic-info`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 201) {
        navigate('/admin/basic-info');
      }
    } catch (error) {
      console.error('Error creating basic info:', error);
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError('Failed to create basic info');
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
              <h4 className="mb-sm-0 font-size-18">Create Basic Information</h4>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Basic Info</a>
                  </li>
                  <li className="breadcrumb-item active">Create Basic Info</li>
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
                  <a href="/admin/basic-info">
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
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          maxLength={255}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="degree" className="form-label">Degree</label>
                        <input
                          type="text"
                          className="form-control"
                          id="degree"
                          name="degree"
                          value={formData.degree}
                          onChange={handleInputChange}
                          required
                          maxLength={255}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="phone_no" className="form-label">Phone Number</label>
                        <input
                          type="number"
                          className="form-control"
                          id="phone_no"
                          name="phone_no"
                          value={formData.phone_no}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          maxLength={255}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input
                          type="text"
                          className="form-control"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          required
                          maxLength={255}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="experience" className="form-label">Experience</label>
                        <input
                          type="text"
                          className="form-control"
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          required
                          maxLength={255}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="facebook_link" className="form-label">Facebook Link</label>
                        <input
                          type="url"
                          className="form-control"
                          id="facebook_link"
                          name="facebook_link"
                          value={formData.facebook_link}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="linkedin_link" className="form-label">LinkedIn Link</label>
                        <input
                          type="url"
                          className="form-control"
                          id="linkedin_link"
                          name="linkedin_link"
                          value={formData.linkedin_link}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="github_link" className="form-label">GitHub Link</label>
                        <input
                          type="url"
                          className="form-control"
                          id="github_link"
                          name="github_link"
                          value={formData.github_link}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="gitlab_link" className="form-label">GitLab Link</label>
                        <input
                          type="url"
                          className="form-control"
                          id="gitlab_link"
                          name="gitlab_link"
                          value={formData.gitlab_link}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="insta_link" className="form-label">Instagram Link</label>
                        <input
                          type="url"
                          className="form-control"
                          id="insta_link"
                          name="insta_link"
                          value={formData.insta_link}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Summary</label>
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
                          onEditorChange={(content) => handleEditorChange(content, 'summary')}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Education</label>
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
                          onEditorChange={(content) => handleEditorChange(content, 'education')}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Job Experience</label>
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
                          onEditorChange={(content) => handleEditorChange(content, 'job_experience')}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="mb-3">
                        <label htmlFor="image" className="form-label">Profile Image</label>
                        <input
                          type="file"
                          className="form-control"
                          id="image"
                          name="image"
                          onChange={handleFileChange}
                          accept="image/*"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="mb-3">
                        <label htmlFor="cover_image" className="form-label">Cover Image</label>
                        <input
                          type="file"
                          className="form-control"
                          id="cover_image"
                          name="cover_image"
                          onChange={handleFileChange}
                          accept="image/*"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="mb-3">
                        <label htmlFor="cv" className="form-label">CV/Resume</label>
                        <input
                          type="file"
                          className="form-control"
                          id="cv"
                          name="cv"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
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
                      {loading ? 'Creating...' : 'Create Basic Info'}
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
