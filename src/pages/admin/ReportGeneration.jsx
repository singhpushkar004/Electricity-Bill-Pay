import React, { useState } from 'react';
import axios from 'axios';
import { CSVLink } from 'react-csv';

const ReportGeneration = () => {
  const [reportType, setReportType] = useState('daily');
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleReportTypeChange = (e) => {
    setReportType(e.target.value);
    setReportData(null); // Clear previous data when type changes
  };

  const generateReport = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`/api/reports/${reportType}`);
      setReportData(res.data);
    } catch (err) {
      console.error(err);
      setError('Error generating report. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const exportPDF = () => {
    window.open(`/api/reports/export/${reportType}/pdf`, '_blank');
  };

  const exportCSV = () => {
    if (!reportData) return [];
    return [
      ['Date', 'Amount', 'Status'],
      ...reportData.billingData.map(b => [
        new Date(b.date).toLocaleDateString(),
        b.amount,
        b.status
      ])
    ];
  };

  return (
    <div className="container mt-4">
      <h2>Report Generator</h2>
      <div className="form-group mt-3">
        <label>Select Report Type</label>
        <select className="form-control" value={reportType} onChange={handleReportTypeChange}>
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <button onClick={generateReport} className="btn btn-primary mt-2" disabled={loading}>
        {loading ? 'Generating...' : 'Generate Report'}
      </button>

      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {reportData?.billingData?.length > 0 && (
        <div className="mt-4">
          <h4>Billing Data</h4>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {reportData.billingData.map((item, i) => (
                <tr key={i}>
                  <td>{new Date(item.date).toLocaleDateString()}</td>
                  <td>{item.amount}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <CSVLink data={exportCSV()} filename={`report-${reportType}.csv`}>
            <button className="btn btn-success me-2">Export CSV</button>
          </CSVLink>

          <button className="btn btn-danger" onClick={exportPDF}>Export PDF</button>
        </div>
      )}
    </div>
  );
};

export default ReportGeneration;
