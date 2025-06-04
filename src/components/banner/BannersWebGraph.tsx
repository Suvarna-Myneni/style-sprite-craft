
import React from "react";
import "./BannersWebGraph.css";
import { ArrowRight } from "lucide-react";

export const BannersWebGraph = () => {
    return (
        <div className="banners-web-graph">
            <div className="banner-content">
                <div className="banner-header">
                    <h3 className="banner-title">Welcome to the new My eXp</h3>
                    <ArrowRight className="banner-arrow" size={24} />
                </div>
                <p className="banner-description">
                    These tiles will be used to help highlight new or important information for you.
                </p>
            </div>
        </div>
    );
};
