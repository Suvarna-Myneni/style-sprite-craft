
import React from "react";
import "./DesktopLeftNav.css";

export const DesktopLeftNav = () => {
  return (
    <div className="desktop-left-nav">
      <div className="nav-logo">eXp</div>
      <nav className="nav-menu">
        <div className="nav-item active">Home</div>
        <div className="nav-item">Getting Started</div>
        <div className="nav-item">Agent</div>
        <div className="nav-item">Team</div>
        <div className="nav-item">RevShare</div>
        <div className="nav-item">Documents</div>
        <div className="nav-item">Events Calendar</div>
        <div className="nav-item">Mentor Program</div>
        <div className="nav-item">Tools</div>
        <div className="nav-item">Knowledge Base</div>
        <div className="nav-item">eXp Solutions</div>
        <div className="nav-item">Help Center</div>
      </nav>
    </div>
  );
};
