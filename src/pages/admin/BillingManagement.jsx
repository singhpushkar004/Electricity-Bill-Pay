import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BillingManagement = () => {
  const [bills, setBills] = useState([]);
  const [form, setForm] = useState({ user: '', usage: '', rate: 5, status: 'Unpaid' });
  const [editingId, setEditingId] = useState(null);
  const [ratePerUnit, setRatePerUnit] = useState(5);

  useEffect(() => {
    fetchBills();
  }, []);

  const [users, setUsers] = useState([]);
    useEffect(() => {
  axios.get('http://localhost:5000/api/users')
    .then(res => setUsers(res.data))
    .catch(err => console.error(err));
}, []);

  const fetchBills = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/bills');
      setBills(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const billData = {
      ...form,
      usage: Number(form.usage),
      rate: Number(form.rate),
      status: form.status
    };

    try {
      if (editingId) {
        const res = await axios.put(`http://localhost:5000/api/bills/${editingId}`, billData);
        setBills(bills.map(b => (b._id === editingId ? res.data : b)));
        setEditingId(null);
      } else {
        const res = await axios.post('http://localhost:5000/api/bills', billData);
        setBills([...bills, res.data]);
      }

      setForm({ user: '', usage: '', rate: ratePerUnit, status: 'Unpaid' });
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (bill) => {
    setForm({ user: bill.user, usage: bill.usage, rate: bill.rate, status: bill.status });
    setEditingId(bill._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this bill?')) {
      await axios.delete(`http://localhost:5000/api/bills/${id}`);
      setBills(bills.filter(b => b._id !== id));
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    const bill = bills.find(b => b._id === id);
    if (!bill) return;

    const updatedBill = { ...bill, status: newStatus };
    const res = await axios.put(`http://localhost:5000/api/bills/${id}`, updatedBill);
    setBills(bills.map(b => (b._id === id ? res.data : b)));
  };

  const updateGlobalRate = () => {
    setRatePerUnit(Number(ratePerUnit));
    alert(`Global rate updated to ₹${ratePerUnit}/unit`);
  };

  return (
    <div className="container mt-4">
      <h2>Billing Management</h2>

      <div className="mb-3">
        <label>Rate per Unit:</label>
        <input
          type="number"
          value={ratePerUnit}
          onChange={e => setRatePerUnit(e.target.value)}
          className="form-control w-25 d-inline-block mx-2"
        />
        <button className="btn btn-sm btn-success" onClick={updateGlobalRate}>Update Rate</button>
      </div>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={form.user}
          onChange={e => setForm({ ...form, user: e.target.value })}
          placeholder="User Name"
          className="form-control mb-2"
          required
        />
        <input
          type="number"
          value={form.usage}
          onChange={e => setForm({ ...form, usage: e.target.value })}
          placeholder="Usage (units)"
          className="form-control mb-2"
          required
        />
        <input
          type="number"
          value={form.rate}
          onChange={e => setForm({ ...form, rate: e.target.value })}
          placeholder="Rate per Unit"
          className="form-control mb-2"
        />
        <select
          value={form.status}
          onChange={e => setForm({ ...form, status: e.target.value })}
          className="form-control mb-2"
        >
          <option>Unpaid</option>
          <option>Paid</option>
          <option>Overdue</option>
        </select>
        <select
            value={form.user}
            onChange={e => setForm({ ...form, user: e.target.value })}
            className="form-control mb-2"
            required
            >
            <option value="">Select User</option>
            {users.map(u => (
                <option key={u._id} value={u._id}>{u.name}</option>
            ))}
        </select>
        <button className="btn btn-primary">{editingId ? 'Update Bill' : 'Add Bill'}</button>
      </form>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>User</th>
            <th>Usage</th>
            <th>Rate</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bills.map(b => (
            <tr key={b._id}>
              <td>{b.user?.name || 'N/A'}</td>
              <td>{b.usage} units</td>
              <td>₹{b.rate}/unit</td>
              <td>₹{b.amount}</td>
              <td>{b.date}</td>
              <td>{b.status}</td>
              <td>
                <button className="btn btn-sm btn-warning me-1" onClick={() => handleEdit(b)}>Edit</button>
                <button className="btn btn-sm btn-danger me-1" onClick={() => handleDelete(b._id)}>Delete</button>
                <select
                  value={b.status}
                  onChange={e => handleStatusChange(b._id, e.target.value)}
                  className="form-select form-select-sm d-inline w-auto"
                >
                  <option>Unpaid</option>
                  <option>Paid</option>
                  <option>Overdue</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillingManagement;
