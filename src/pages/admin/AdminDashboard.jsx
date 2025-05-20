// AdminDashboard.jsx
import React, { useState ,useEffect } from 'react';
import {
  FaTachometerAlt, FaUsers, FaFileInvoice, FaMoneyCheckAlt,
  FaChartLine, FaLightbulb, FaBell, FaCommentDots,
  FaCog, FaUserShield, FaBars
} from 'react-icons/fa';
import {  useNavigate } from 'react-router';
import { Outlet  } from 'react-router';
import SidebarLink from '../../components/SidebarLink';
const SidebarItem = ({ icon: Icon, label, collapsed }) => (
  <div className="sidebar-item">
    <Icon className="sidebar-icon" />
    {!collapsed && <span className="sidebar-label">{label}</span>}
  </div>
);

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const validate =()=>{
    if(!localStorage.getItem('admin')){
      navigate('/adlogin');
    }
  }
useEffect(()=>{
validate();
},[]);
  return (
    <div className="admin-dashboard">
      <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
          <FaBars />
        </div>
        <SidebarLink icon={FaTachometerAlt} label="Dashboard" to="/admin" collapsed={collapsed} />
        <SidebarLink icon={FaUsers} label="User Management" to="/admin/users" collapsed={collapsed} />
        <SidebarLink icon={FaFileInvoice} label="Billing" to="/admin/billing" collapsed={collapsed} />
        <SidebarLink icon={FaMoneyCheckAlt} label="Payments" to="/admin/payments" collapsed={collapsed} />
        <SidebarLink icon={FaLightbulb} label="Usage" to="/admin/usage" collapsed={collapsed} />
        <SidebarLink icon={FaCommentDots} label="Complaints" to="/admin/complaints" collapsed={collapsed} />
        <SidebarLink icon={FaChartLine} label="Reports" to="/admin/reports" collapsed={collapsed} />
        <SidebarLink icon={FaUserShield} label="Logout" to="/" collapsed={collapsed} />
        <SidebarLink icon={FaCog} label="Settings" to="/admin/settings" collapsed={collapsed} />
      </div>
      <div className="main-content">
        <div className="topbar">
          <div className="topbar-title">Admin Dashboard</div>
          <div className="admin-profile">Welcome, Admin</div>
        </div>
        <div className="dashboard-content p-4">
            <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
