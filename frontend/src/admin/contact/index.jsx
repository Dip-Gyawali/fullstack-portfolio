import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function ContactIndex() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API}/admin/contact`);
      setContacts(response.data.data);
      console.log("ssda",response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      setError('Failed to fetch contacts');
    }
  };

  const handleStatusChange = async (contactId, newStatus) => {
    setLoading(true);
    try {
      await axios.put(`${import.meta.env.VITE_API}/admin/contact/${contactId}`, {
        status: newStatus
      });
      // Update the local state after successful API call
      setContacts(prevContacts => 
        prevContacts.map(contact => 
          contact.id === contactId 
            ? { ...contact, status: newStatus }
            : contact
        )
      );
    } catch (error) {
      console.error('Error updating status:', error);
      setError('Failed to update status');
    } finally {
      setLoading(false);
    }
  };

  const handleViewContact = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedContact(null);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="page-content">
      <div className="container-fluid">
        {/* start page title */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Contact List</h4>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="javascript: void(0);">Contact</a>
                  </li>
                  <li className="breadcrumb-item active">Contact List</li>
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
                </div>
              </div>
              <div className="card-body">
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                <table
                  id="datatable"
                  className="table table-bordered dt-responsive nowrap w-100"
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Subject</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <tr key={contact._id}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.subject}</td>
                        <td>
                          <select
                            className="form-select"
                            value={contact.status}
                            onChange={(e) => handleStatusChange(contact._id, e.target.value)}
                            disabled={loading}
                          >
                            <option value="unread">Unread</option>
                            <option value="read">Read</option>
                          </select>
                        </td>
                        <td>
                          <button 
                            onClick={() => handleViewContact(contact)}
                            className="btn btn-primary btn-sm"
                          >
                            View
                          </button>
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

      {/* Contact Details Modal */}
      {showModal && selectedContact && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Contact Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label fw-bold">Name:</label>
                  <p>{selectedContact.name}</p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Email:</label>
                  <p>{selectedContact.email}</p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Subject:</label>
                  <p>{selectedContact.subject}</p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Message:</label>
                  <p>{selectedContact.message}</p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Status:</label>
                  <select
                    className="form-select"
                    value={selectedContact.status}
                    onChange={(e) => {
                      handleStatusChange(selectedContact.id, e.target.value);
                      setSelectedContact({...selectedContact, status: e.target.value});
                    }}
                    disabled={loading}
                  >
                    <option value="unread">Unread</option>
                    <option value="read">Read</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </div>
      )}
    </div>
  );
}
