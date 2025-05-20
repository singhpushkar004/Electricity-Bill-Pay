import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ComplaintManagement = () => {
  const [complaints, setComplaints] = useState([]);
  const [supportTeam, setSupportTeam] = useState([]);
  const [selectedSupport, setSelectedSupport] = useState({});
  const [status, setStatus] = useState({});
  const [responses, setResponses] = useState({});

  // Fetch complaints and support team data
  useEffect(() => {
    // Fetch complaints
    axios.get('/api/complaints')
      .then((res) => {
        // console.log('Fetched complaints:', res.data);  // Add logging to check response
        // Ensure it's an array before setting the state
        if (Array.isArray(res.data)) {
          setComplaints(res.data);
        } else {
          setComplaints([]);  // Default to empty array if data isn't an array
        }
      })
      .catch((err) => {
        console.error('Error fetching complaints:', err);
        setComplaints([]);  // Fallback to empty array in case of error
      });

    // Fetch support team members
    axios.get('/api/support-team')
      .then((res) => {
        setSupportTeam(res.data);
      })
      .catch((err) => {
        console.error('Error fetching support team:', err);
      });
  }, []);

  // Handle response change
  const handleResponseChange = (complaintId, e) => {
    setResponses(prev => ({
      ...prev,
      [complaintId]: e.target.value,
    }));
  };

  // Handle response submission
  const handleResponseSubmit = (complaintId) => {
    axios.put(`/api/complaints/respond/${complaintId}`, { response: responses[complaintId] })
      .then((res) => {
        setComplaints(prev => prev.map(c =>
          c._id === complaintId ? { ...c, response: res.data.response } : c
        ));
        setResponses(prev => ({
          ...prev,
          [complaintId]: '',
        }));
      })
      .catch((err) => {
        console.error('Error submitting response:', err);
      });
  };

  // Handle complaint assignment
  const handleAssignSupport = (complaintId) => {
    axios.put(`/api/complaints/assign/${complaintId}`, { supportId: selectedSupport[complaintId] })
      .then((res) => {
        setComplaints(prev => prev.map(c =>
          c._id === complaintId ? { ...c, supportAssigned: res.data.supportAssigned } : c
        ));
      })
      .catch((err) => {
        console.error('Error assigning support:', err);
      });
  };

  // Handle status update
  const handleStatusUpdate = (complaintId) => {
    axios.put(`/api/complaints/status/${complaintId}`, { status: status[complaintId] })
      .then((res) => {
        setComplaints(prev => prev.map(c =>
          c._id === complaintId ? { ...c, status: res.data.status } : c
        ));
      })
      .catch((err) => {
        console.error('Error updating status:', err);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Complaint/Support Management</h2>

      {/* Complaints List */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Complaint ID</th>
            <th>Description</th>
            <th>Assigned Support</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(complaints) && complaints.length > 0 ? (
            complaints.map((complaint) => (
              <tr key={complaint._id}>
                <td>{complaint._id}</td>
                <td>{complaint.description}</td>
                <td>{complaint.supportAssigned ? complaint.supportAssigned.name : 'Not Assigned'}</td>
                <td>{complaint.status}</td>
                <td>
                  {/* Respond to Complaint */}
                  <textarea
                    value={responses[complaint._id] || ''}
                    onChange={(e) => handleResponseChange(complaint._id, e)}
                    className="form-control mb-2"
                    placeholder="Write your response here..."
                  />
                  <button
                    onClick={() => handleResponseSubmit(complaint._id)}
                    className="btn btn-info btn-sm me-2"
                  >
                    Respond
                  </button>

                  {/* Assign Support */}
                  <select
                    className="form-control mb-2"
                    value={selectedSupport[complaint._id] || ''}
                    onChange={(e) => setSelectedSupport(prev => ({ ...prev, [complaint._id]: e.target.value }))}
                  >
                    <option value="">-- Assign Support --</option>
                    {supportTeam.map((member) => (
                      <option key={member._id} value={member._id}>
                        {member.name}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => handleAssignSupport(complaint._id)}
                    className="btn btn-warning btn-sm"
                  >
                    Assign
                  </button>

                  {/* Update Status */}
                  <select
                    className="form-control mb-2 mt-2"
                    value={status[complaint._id] || ''}
                    onChange={(e) => setStatus(prev => ({ ...prev, [complaint._id]: e.target.value }))}
                  >
                    <option value="">-- Update Status --</option>
                    <option value="Resolved">Resolved</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Pending">Pending</option>
                  </select>
                  <button
                    onClick={() => handleStatusUpdate(complaint._id)}
                    className="btn btn-success btn-sm"
                  >
                    Update Status
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No complaints found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ComplaintManagement;
