import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminHome = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPayments: 0,
    pendingBills: 0,
    complaints: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/dashboard/stats', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setStats(res);
        // console.log(res.data);
        console.log(res[0]);
        
        
        setError('');
      } catch (err) {
        console.error('Error fetching stats:', err);
        setError('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 10000); // Refresh every 10s

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  if (loading) return <div>Loading dashboard...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container mt-4">
      <h2>System Overview</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="card shadow-sm p-3 mb-4 gradient-card">
            <h5>Total Users</h5>
            <p>{stats.totalUsers}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm p-3 mb-4 gradient-card">
            <h5>Payments Made</h5>
            <p>₹{stats.totalPayments}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm p-3 mb-4 gradient-card">
            <h5>Pending Bills</h5>
            <p>₹{stats.pendingBills}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm p-3 mb-4 gradient-card">
            <h5>Complaints</h5>
            <p>{stats.complaints}</p>
          </div>
        </div>
      </div>

      <div className="card shadow-sm p-4 gradient-card">
        <h5>Real-time Analytics</h5>
        <div
          className="chart-placeholder"
          style={{
            height: 150,
            background: '#f1f1f1',
            textAlign: 'center',
            lineHeight: '150px',
          }}
        >
          [Charts/Graphs Placeholder]
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
