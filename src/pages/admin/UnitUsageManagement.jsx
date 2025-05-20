import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UnitUsageManagement = () => {
  const [meterReadings, setMeterReadings] = useState([]);
  const [user, setUser] = useState('');
  const [reading, setReading] = useState('');
  const [csvFile, setCsvFile] = useState(null);
  const [users, setUsers] = useState([]);

  // Fetch users and readings
  useEffect(() => {
    const fetchUsers = async () => {


        // 
        
        
  

        // 
      try {
        axios.get('http://localhost:5000/api/users') // Change to the correct API endpoint
        .then(response => {
        //   console.log('Users fetched:', response.data);  // Check the structure of the response
          setUsers(response.data);  // Assume response.data is an array of users
        })
      } catch (err) {
        console.error('Error fetching users:', err);
        setUsers([]);
      }
    };

    const fetchReadings = async () => {
      try {
        const res = await axios.get('/api/unit-usage');
        const responseReadings = res.data.readings || res.data || [];
        setMeterReadings(Array.isArray(responseReadings) ? responseReadings : []);
      } catch (err) {
        console.error('Error fetching meter readings:', err);
        setMeterReadings([]);
      }
    };

    fetchUsers();
    fetchReadings();
  }, []);

  // Submit manual reading
  const handleManualSubmit = (e) => {
    e.preventDefault();
    const newReading = {
      user,
      reading: parseFloat(reading),
    };

    axios.post('/api/unit-usage/manual', newReading)
      .then((res) => {
        setMeterReadings((prev) => [...prev, res.data]);
        setUser('');
        setReading('');
      })
      .catch((err) => {
        console.error('Error submitting reading:', err);
      });
  };

  // Upload CSV
  const handleCsvUpload = () => {
    if (!csvFile || !user) {
      return alert("Please select a CSV file and a user.");
    }

    const formData = new FormData();
    formData.append('file', csvFile);
    formData.append('user', user); // Send user ID with upload

    axios.post('/api/unit-usage/upload-csv', formData)
      .then((res) => {
        if (Array.isArray(res.data.readings)) {
          setMeterReadings((prev) => [...prev, ...res.data.readings]);
        }
        setCsvFile(null);
        setUser('');
      })
      .catch((err) => {
        console.error('Error uploading CSV:', err);
      });
  };

  // Verify a reading
  const handleVerifyReading = (id) => {
    axios.put(`/api/unit-usage/verify/${id}`)
      .then((res) => {
        setMeterReadings((prev) =>
          prev.map((r) => (r._id === id ? { ...r, status: 'Verified' } : r))
        );
      })
      .catch((err) => {
        console.error('Error verifying reading:', err);
      });
  };

  // Generate bill
  const handleGenerateBill = (readingId, userId) => {
    axios.post('/api/unit-usage/generate-bill', {
      readingId,
      userId,
      ratePerUnit: 5
    })
      .then(() => {
        alert('Bill generated successfully!');
      })
      .catch((err) => {
        console.error('Error generating bill:', err);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Unit Usage Management</h2>

      {/* Manual Reading Form */}
      <form onSubmit={handleManualSubmit} className="mb-4">
        <div className="form-group">
          <label>User</label>
          <select
            className="form-control"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          >
            <option value="">-- Select User --</option>
            {users.map((u) => (
              <option key={u._id} value={u._id}>{u.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group mt-2">
          <label>Reading (Units)</label>
          <input
            type="number"
            className="form-control"
            value={reading}
            onChange={(e) => setReading(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit Reading</button>
      </form>

      {/* CSV Upload Form */}
      <div className="mb-4">
        <label>Select User for CSV Upload</label>
        <select
          className="form-control mb-2"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        >
          <option value="">-- Select User --</option>
          {users.map((u) => (
            <option key={u._id} value={u._id}>{u.name}</option>
          ))}
        </select>

        <label>Upload CSV</label>
        <input
          type="file"
          accept=".csv"
          onChange={(e) => setCsvFile(e.target.files[0])}
          className="form-control mb-2"
        />
        <button onClick={handleCsvUpload} className="btn btn-success">Upload CSV</button>
      </div>

      {/* Meter Readings Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>User</th>
            <th>Reading (Units)</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {meterReadings.map((r) => (
            <tr key={r._id}>
              <td>{r.user?.name || 'N/A'}</td>
              <td>{r.reading}</td>
              <td>{new Date(r.date).toLocaleDateString()}</td>
              <td>{r.status || 'Pending'}</td>
              <td>
                {r.status !== 'Verified' && (
                  <button
                    onClick={() => handleVerifyReading(r._id)}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Verify
                  </button>
                )}
                <button
                  onClick={() => handleGenerateBill(r._id, r.user?._id)}
                  className="btn btn-success btn-sm"
                >
                  Generate Bill
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnitUsageManagement;
