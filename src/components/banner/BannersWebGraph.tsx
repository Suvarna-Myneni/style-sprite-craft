
import React from "react";
import { ArrowRight } from "lucide-react";
import "./BannersWebGraph.css";

export const BannersWebGraph = () => {
    return (
        <div className="banners-web-graph">
            <div className="frame">
                <div className="div">
                    <p className="navigation">Welcome to the new My eXp</p>
                    <ArrowRight className="arrow-forward" size={20} />
                </div>

                <p className="text-wrapper">
                    These tiles will be used to help highlight new or important
                    information for you.
                </p>
            </div>
        </div>
    );
};
