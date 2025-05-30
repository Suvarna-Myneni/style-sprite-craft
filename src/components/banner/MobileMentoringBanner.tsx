
import React from "react";
import "./MobileMentoringBanner.css";
import { Mail, Phone } from "lucide-react";

export const MobileMentoringBanner = () => {
    return (
        <div className="mobile-mentoring-banner">
            <div className="mentoring-content">
                <h3 className="mentoring-title">Need Mentoring?</h3>
                <p className="mentoring-contact">Charles Smith</p>
            </div>
            <div className="mentoring-actions">
                <Mail className="mentoring-icon" size={24} />
                <Phone className="mentoring-icon" size={24} />
            </div>
        </div>
    );
};
