import { Link } from 'react-router';
import React from 'react';
// import './SidebarLink.css';

const SidebarLink = ({ to, icon: Icon, label, collapsed }) => {
  return (
    <div className="sidebar-item">
      <Link to={to} className="sidebar-link text-decoration-none text-white">
        <Icon className="sidebar-icon" />
        {!collapsed && <span className="sidebar-label">{label}</span>}
      </Link>
    </div>
  );
};

export default SidebarLink;
