
import React from "react";
import "./BannersWebGraph.css";
import { ArrowRight } from "lucide-react";

export const BannersWebGraph = () => {
    return (
        <div className="banners-web-graph">
            <div className="banner-content">
                <div className="banner-header">
                    <h3 className="banner-title">Navigation</h3>
                    <ArrowRight className="banner-arrow" size={24} />
                </div>
                <p className="banner-description">
                    Navigation description text goes here to provide more information about this feature.
                </p>
            </div>
        </div>
    );
};
