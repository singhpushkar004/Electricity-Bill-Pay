import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentManagement = () => {
  const [payments, setPayments] = useState([]);
  const [form, setForm] = useState({ user: '', amount: '', status: 'Pending' });
  const [editingId, setEditingId] = useState(null);
  const [users, setUsers] = useState([]); // Store users for dropdown

  useEffect(() => {
    // Fetch all users for dropdown
    axios.get('http://localhost:5000/api/users') // Change to the correct API endpoint
      .then(response => {
        console.log('Users fetched:', response.data);  // Check the structure of the response
        setUsers(response.data);  // Assume response.data is an array of users
      })
      .catch(error => console.error('Error fetching users:', error));

    // Fetch payments
    axios.get('http://localhost:5000/api/payments') // Change to the correct API endpoint
      .then(response => setPayments(response.data))
      .catch(error => console.error('Error fetching payments:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPayment = {
      ...form,
      user: form.user,  // Store userId to save
      amount: parseFloat(form.amount),
      date: new Date().toISOString().split('T')[0]  // Format date as 'YYYY-MM-DD'
    };

    if (editingId) {
      axios.put(`http://localhost:5000/api/payments/${editingId}`, newPayment)
        .then(() => {
          setPayments(payments.map(p => (p.id === editingId ? newPayment : p)));
          alert('Payment updated successfully!');
        });
    } else {
      axios.post('http://localhost:5000/api/payments', newPayment)
        .then(response => {
          setPayments([...payments, response.data]);
          alert('Payment added successfully!');
        });
    }

    // Reset form
    setForm({ user: '', amount: '', status: 'Pending' });
    setEditingId(null);
  };

  const handleEdit = (payment) => {
    setForm({
      user: payment.user._id,  // Use the correct user ID for editing
      amount: payment.amount,
      status: payment.status
    });
    setEditingId(payment.id);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this payment?')) {
      axios.delete(`http://localhost:5000/api/payments/${id}`)
        .then(() => {
          setPayments(payments.filter(p => p.id !== id));
        });
    }
  };

  const handleStatusChange = (id, newStatus) => {
    axios.put(`http://localhost:5000/api/payments/${id}`, { status: newStatus })
      .then(() => {
        setPayments(payments.map(p => (p.id === id ? { ...p, status: newStatus } : p)));
      });
  };

  return (
    <div className="container mt-4">
      <h2>Payment Management</h2>

      {/* Add/Edit Payment Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <select
          value={form.user}
          onChange={e => setForm({ ...form, user: e.target.value })}
          className="form-control mb-2"
          required
        >
          <option value="">Select User</option>
          {users.map(user => (
            <option key={user._id} value={user._id}>
              {user.name} {/* Use a user property like 'name' */}
            </option>
          ))}
        </select>

        <input
          type="number"
          value={form.amount}
          onChange={e => setForm({ ...form, amount: e.target.value })}
          placeholder="Amount"
          className="form-control mb-2"
          required
        />
        <select
          value={form.status}
          onChange={e => setForm({ ...form, status: e.target.value })}
          className="form-control mb-2"
        >
          <option value="Pending">Pending</option>
          <option value="Paid">Paid</option>
          <option value="Failed">Failed</option>
          <option value="Refunded">Refunded</option>
        </select>
        <button className="btn btn-primary">{editingId ? 'Update Payment' : 'Add Payment'}</button>
      </form>

      {/* Payment Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>User</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {payments.map(p => (
                <tr key={p.id}>
                <td>{p.user.name}</td>
                <td>₹{p.amount}</td>
                <td>{p.status}</td>
                <td>{p.date}</td>
                <td>
                    <button className="btn btn-sm btn-warning me-1" onClick={() => handleEdit(p)}>Edit</button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(p.id)}>Delete</button>
                    <select
                    value={p.status}
                    onChange={e => handleStatusChange(p.id, e.target.value)}
                    className="form-select form-select-sm d-inline w-auto"
                    >
                    <option value="Pending">Pending</option>
                    <option value="Paid">Paid</option>
                    <option value="Failed">Failed</option>
                    <option value="Refunded">Refunded</option>
                    </select>
                </td>
                </tr>
            ))}
        </tbody>

      </table>
    </div>
  );
};

export default PaymentManagement;
