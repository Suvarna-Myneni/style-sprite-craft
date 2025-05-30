
import React from "react";
import "./MobileWelcomeBanner.css";
import { ArrowRight } from "lucide-react";

export const MobileWelcomeBanner = () => {
    return (
        <div className="mobile-welcome-banner">
            <div className="welcome-content">
                <h3 className="welcome-title">Welcome to the new My eXp</h3>
                <p className="welcome-description">
                    These tiles will be used to help highlight new or important information for you.
                </p>
            </div>
            <ArrowRight className="welcome-arrow" size={24} />
        </div>
    );
};
