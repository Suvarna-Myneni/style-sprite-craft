
import React from "react";
import { Mail, Phone } from "lucide-react";
import "./BannersWebNeed.css";

export const BannersWebNeed = ({ className }: { className?: string }) => {
    return (
        <div className={`banners-web-need ${className || ''}`}>
            <h3 className="need-mentoring-title">Need Mentoring?</h3>
            <div className="content-frame">
                <p className="charles-smith">Charles Smith</p>
                <div className="contact-icons">
                    <Mail className="contact-icon email-icon" />
                    <Phone className="contact-icon call-icon" />
                </div>
            </div>
        </div>
    );
};
