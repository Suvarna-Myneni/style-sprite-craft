
import React from "react";
import "./BannersWebFrame.css";

export const BannersWebFrame = () => {
    return (
        <div className="banners-web-frame">
            <div className="content-wrapper">
                <h2 className="disc-title">Take your DISC assessment now!</h2>
                <p className="disc-description">
                    The results from your assessment may be shared with eXp and your upline partners.
                </p>
                <a href="#" className="start-assessment-link">Start Assessment</a>
            </div>
            <div className="disc-circle">
                <div className="disc-quadrant disc-d">D</div>
                <div className="disc-quadrant disc-i">I</div>
                <div className="disc-quadrant disc-s">S</div>
                <div className="disc-quadrant disc-c">C</div>
            </div>
        </div>
    );
};
