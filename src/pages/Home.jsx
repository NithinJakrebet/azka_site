import React from "react";
import '../styling/pages.css';
import AnimatedPage from "../components/AnimatedPage.jsx";
import AppearOnScroll from "../components/AppearOnScroll";
import Dropdown from "../components/Dropdown.jsx";
import App from "../App";

const zelleInfo = {
    springPicnic: [
        { label: 'Zelle Number: 623-271-5137'},
        { label: 'Memo: Spring Picnic' },

        { label: 'BEFORE FEB 15TH' },
        { label: 'Kids (10yrs and below): $10' },
        { label: 'Adults and 11yrs+: $20' },

        { label: 'AFTER Feb 15TH' },
        { label: 'Kids (10yrs and below): $15' },
        { label: 'Adults and 11yrs+: $25' }
    ],

    hike: [
        {label: '8 remaining spots!'},
        {label: 'For further info, contact: shreejapai@yahoo.com'}
    ]
};

export default function Home() {
    return (
        <AnimatedPage>
            <AppearOnScroll>
                    <div className="text_box">
                        {/* AZ Konkanis Fundraiser Hike */}
                        <h2>Upcoming Events</h2>
                        <h3>AZ Konkanis Fundraiser Hike</h3>
                        <h4>March 16, 2024, 8AM-11AM</h4>
                        <h4>Papago Park: 625 N Galvin Pkwy, Phoenix, AZ 85008, Ramada 15 </h4> 
                        <Dropdown
                            label="Ticket Info "
                            info={zelleInfo.hike}
                        />
                    </div>
            </AppearOnScroll>
        </AnimatedPage>
    )
}

