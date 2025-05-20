import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Change if different

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', contact: '', address: '' });
  const [editingId, setEditingId] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/users`);
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${API_BASE_URL}/api/users/${editingId}`, form);
        setEditingId(null);
      } else {
        await axios.post(`${API_BASE_URL}/api/users`, form);
      }
      setForm({ name: '', email: '', contact: '', address: '' });
      fetchUsers();
    } catch (error) {
      console.error("Submission error:", error.response?.data || error.message);
    }
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email, contact: user.contact, address: user.address });
    setEditingId(user._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Delete error:", error.response?.data || error.message);
    }
  };

  const toggleStatus = async (id) => {
    try {
      await axios.patch(`${API_BASE_URL}/api/users/toggle/${id}`);
      fetchUsers();
    } catch (error) {
      console.error("Toggle status error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2>User Management</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Name" className="form-control mb-2" required />
        <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" className="form-control mb-2" required />
        <input value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} placeholder="Contact" className="form-control mb-2" required />
        <input value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} placeholder="Address" className="form-control mb-2" required />
        <button className="btn btn-primary">{editingId ? 'Update' : 'Add'} User</button>
      </form>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Contact</th><th>Address</th><th>Status</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(u => (
              <tr key={u._id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.contact}</td>
                <td>{u.address}</td>
                <td>{u.isActive ? 'Active' : 'Inactive'}</td>
                <td>
                  <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(u)}>Edit</button>
                  <button className="btn btn-sm btn-danger me-2" onClick={() => handleDelete(u._id)}>Delete</button>
                  <button className="btn btn-sm btn-secondary" onClick={() => toggleStatus(u._id)}>
                    {u.isActive ? 'Deactivate' : 'Activate'}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="6" className="text-center">No users found</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
