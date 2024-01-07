// Upcoming events, pics Slideshow type 

import React from "react";
import { ImageSlider } from "../components/ImageSlider.tsx";
import '../styling/pages.css';
import AnimatedPage from "../components/AnimatedPage.jsx";
import AppearOnScroll from "../components/AppearOnScroll";
import Dropdown from "../components/Dropdown.jsx";

import jakrebets from "../photos/picnic_2023/jakrebets.jpg"
import foodline from "../photos/picnic_2023/food_line.JPG"
import checkin from "../photos/picnic_2023/checkin.JPG"
import group2023 from "../photos/picnic_2023/group.jpg"
import kids_lunch from "../photos/picnic_2023/kids_lunch.jpg"
import ladies_lunch from "../photos/picnic_2023/ladies_lunch.JPG"
import musical_chairs from "../photos/picnic_2023/musical_chairs.JPG"


import mensvb from "../photos/picnic_2022/mensvb.JPG"
import group22 from "../photos/picnic_2022/2022_group.jpg"
import active from "../photos/picnic_2022/active.jpg"
import serving from "../photos/picnic_2022/serving.jpg"
import laughing from "../photos/picnic_2022/laughing.jpg"
import table from "../photos/picnic_2022/table.jpg"

const zelleInfo = {
    springPicnic: [
        { label: 'Zelle Number: 623-271-5137 OR 602-373-7880' },
        { label: 'Memo: AZ Konkani Spring Picnic Ticket' },
        {label: "Ticket Price: $20"}
    ]
    // starvingChildren: [
    //     { label: 'Zelle Number: 123-456-7890' },
    //     { label: 'Memo: Starving Children Donation' }
    // ],
    // talentShow: [
    //     { label: 'Zelle Number: 123-456-7890' },
    //     { label: 'Memo: Talent Show Ticket' }
    // ]
};

const PICNIC_2023_IMAGES = [
    group2023,
    checkin,
    jakrebets,
    foodline,
    kids_lunch,
    ladies_lunch,
    musical_chairs
]

const PICNIC_2022_IMAGES = [
    group22,
    mensvb,
    active,
    serving,
    laughing,
    table
]

export default function Home() {
    return (
        <AnimatedPage>
            <AppearOnScroll>
                    <div className="text_box">
                        <h2>Upcoming Events</h2>
                        <h3>Spring Picnic</h3>
                        <h4>March 2, 2024, 10:30AM-4PM</h4>
                        <h4>El Dorado Park:  2311 N Miller Rd, Scottsdale, AZ 85257</h4> 
                        <Dropdown
                            label="Ticket Info "
                            info={zelleInfo.springPicnic}
                        />
                        {/* <h3>Feed My Starving Children</h3>
                        <h4>April 3, 2024 11:00AM</h4>
                        <h4>1345 South Alma School Road, Mesa, AZ</h4>
                        <Dropdown
                            label="Donation Info (optional)"
                            info={zelleInfo.starvingChildren}
                        /> 
                        <h3>Talent Show</h3>
                        <h4>May 10th, 2024 3:00PM</h4>
                        <h4>122 E Culver St</h4>
                        <Dropdown
                            label="Ticket Info"
                            info={zelleInfo.talentShow}
                        /> */}
                    </div>
            </AppearOnScroll>
            <AppearOnScroll> 
                <div className="slideshow_container">
                    <h1 className="title">2023 Picnic</h1>
                <a 
                    href= "https://photos.google.com/share/AF1QipNfzn8n5AYAFZGsZEnDr5p1s_nUZGVAFZ3K5VwooD_d69fMTIC6gOXO__LsUKwP3w?key=NTdwMVpjMW1hUEh4SDVWUUJHT3JEWG1hNE8yTGlB"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="full-album-link"
                >
                    Full Album 
                </a>
                    <div 
                        style={{
                            maxWidth: "1100px",
                            width: "100%",
                            maxHeight: "600",
                            aspectRatio: "11/6",
                            margin: "0 auto"
                        }}> 
                        <ImageSlider imageUrls = {PICNIC_2023_IMAGES} />
                    </div>
                </div>
            </AppearOnScroll>
            <AppearOnScroll> 
                <div className="slideshow_container">
                    <h1 className="title">2022 Picnic</h1>
                <a 
                href="https://photos.google.com/share/AF1QipNCunLLYO7Zx3P26CtrFbAOBjBZauYKE5rfR9-AcWQp3pJWttmz09FCQb8XSsQaXQ?key=X1RTcFh4aWZ1bXRaQ1U3MTZ5QXpjRW5GdFN4TWpn"
                target="_blank" 
                rel="noopener noreferrer"
                className="full-album-link"
                >
                Full Album
                </a>   
                    <div 
                        style={{
                            maxWidth: "1100px",
                            width: "100%",
                            maxHeight: "600px",
                            aspectRatio: "11/6",
                            margin: "0 auto"
                        }}> 
                        <ImageSlider imageUrls = {PICNIC_2022_IMAGES} />
                    </div>
                </div>
            </AppearOnScroll>
        </AnimatedPage>
    )
}

