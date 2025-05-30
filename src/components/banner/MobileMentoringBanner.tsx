
import React from "react";
import "./MobileMentoringBanner.css";
import { Mail, Phone } from "lucide-react";

export const MobileMentoringBanner = () => {
    return (
        <div className="mobile-mentoring-banner">
            <h3 className="mentoring-title">Need Mentoring?</h3>
            <div className="mentoring-bottom-section">
                <div className="mentoring-contact">Charles Smith</div>
                <div className="mentoring-actions">
                    <Mail className="mentoring-icon" size={24} />
                    <Phone className="mentoring-icon" size={24} />
                </div>
            </div>
        </div>
    );
};
