import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminSettings = () => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const adminId = localStorage.getItem('admin') // replace with dynamic ID (from auth context or route param)

 useEffect(() => {
  const fetchAdmin = async () => {
    try {
      const res = await axios.get(`/api/admin/settings/${adminId}`);
      const data = res.data;

      // Ensure defaults if missing
      if (!data.preferences) {
        data.preferences = { language: 'English', notifications: true };
      }
      if (!data.systemSettings) {
        data.systemSettings = { maintenanceMode: false, allowRegistrations: true };
      }

      setAdmin(data);
    } catch (err) {
      setError('Failed to load settings');
    } finally {
      setLoading(false);
    }
  };
  fetchAdmin();
}, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === 'checkbox' ? checked : value;

    if (name.startsWith('preferences.')) {
      setAdmin({ ...admin, preferences: { ...admin.preferences, [name.split('.')[1]]: updatedValue } });
    } else if (name.startsWith('systemSettings.')) {
      setAdmin({ ...admin, systemSettings: { ...admin.systemSettings, [name.split('.')[1]]: updatedValue } });
    } else {
      setAdmin({ ...admin, [name]: updatedValue });
    }
  };

  const handleSave = async () => {
    try {
      const res = await axios.put(`/api/admin/settings/${adminId}`, admin);
      setAdmin(res.data);
      setSuccess('Settings updated successfully');
      setError('');
    } catch (err) {
      setError('Failed to update settings');
      setSuccess('');
    }
  };

  if (loading) return <div>Loading settings...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-4">
      <h2>Admin Settings</h2>

      {success && <div className="alert alert-success">{success}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="form-group">
        <label>Name</label>
        <input name="name" value={admin.name} onChange={handleChange} className="form-control" />
      </div>

      <div className="form-group mt-2">
        <label>Email</label>
        <input name="email" value={admin.email} onChange={handleChange} className="form-control" />
      </div>

      <h5 className="mt-4">Preferences</h5>
      <div className="form-group">
        <label>Language</label>
        <select
          name="preferences.language"
          value={admin.preferences.language}
          onChange={handleChange}
          className="form-control"
        >
          <option>English</option>
          <option>Hindi</option>
        </select>
      </div>
      <div className="form-check mt-2">
        <input
          className="form-check-input"
          type="checkbox"
          name="preferences.notifications"
          checked={admin.preferences.notifications}
          onChange={handleChange}
        />
        <label className="form-check-label">Enable Notifications</label>
      </div>

      <h5 className="mt-4">System Settings</h5>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="systemSettings.maintenanceMode"
          checked={admin.systemSettings.maintenanceMode}
          onChange={handleChange}
        />
        <label className="form-check-label">Maintenance Mode</label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="systemSettings.allowRegistrations"
          checked={admin.systemSettings.allowRegistrations}
          onChange={handleChange}
        />
        <label className="form-check-label">Allow User Registrations</label>
      </div>

      <button className="btn btn-primary mt-3" onClick={handleSave}>
        Save Settings
      </button>
    </div>
  );
};

export default AdminSettings;
