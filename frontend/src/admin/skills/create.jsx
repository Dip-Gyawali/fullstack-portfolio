import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateSkill() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${import.meta.env.VITE_API}/admin/skill`, formData);
      if (response.status === 201) {
        navigate('/admin/skills');
      }
    } catch (error) {
      console.error('Error creating skill:', error);
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError('Failed to create skill');
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
              <h4 className="mb-sm-0 font-size-18">Create Skill</h4>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Skills</a>
                  </li>
                  <li className="breadcrumb-item active">Create Skill</li>
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
                  <a href="/admin/skills">
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
                          <label htmlFor="name" className="form-label">
                            Skill Name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter skill name"
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="rating" className="form-label">
                            Skill Rating (1-100)
                          </label>
                          <input
                            className="form-control"
                            type="number"
                            id="rating"
                            name="rating"
                            value={formData.rating}
                            onChange={handleInputChange}
                            required
                            max="100"
                            placeholder="Enter rating"
                          />
                        </div>
                        <div className="mt-4">
                          <button
                            type="submit"
                            className="btn btn-primary waves-effect waves-light"
                            disabled={loading}
                          >
                            {loading ? 'Creating...' : 'Create Skill'}
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
