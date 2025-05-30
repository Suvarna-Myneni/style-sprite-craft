
import React from "react";
import "./MobileDISCBanner.css";

export const MobileDISCBanner = () => {
    return (
        <div className="mobile-disc-banner">
            <div className="content-frame">
                <h3 className="title">Take your DISC assessment now!</h3>
                <p className="description">
                    The results from your assessment may be shared with eXp and your upline partners.
                </p>
                <a href="#" className="start-link">Start Assessment</a>
            </div>
            <div className="disc-icon">
                <div className="disc-circle-border"></div>
                <div className="disc-segments">
                    <div className="segment segment-d">
                        <span>D</span>
                    </div>
                    <div className="segment segment-i">
                        <span>I</span>
                    </div>
                    <div className="segment segment-s">
                        <span>S</span>
                    </div>
                    <div className="segment segment-c">
                        <span>C</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
