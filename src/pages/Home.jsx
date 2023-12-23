// Upcoming events, pics Slideshow type 

import React from "react";
import { ImageSlider } from "../components/ImageSlider.tsx";
import './pages.css';
import AnimatedPage from "../components/AnimatedPage.jsx";
import AppearOnScroll from "../components/AppearOnScroll"; // Import the new component

import jakrebets from "../photos/picnic_2023/jakrebets.jpg"
import foodline from "../photos/picnic_2023/food_line.JPG"
import checkin from "../photos/picnic_2023/checkin.JPG"
import group2023 from "../photos/picnic_2023/group.jpg"
import kids_lunch from "../photos/picnic_2023/kids_lunch.jpg"
import ladies_lunch from "../photos/picnic_2023/ladies_lunch.JPG"
import musical_chairs from "../photos/picnic_2023/musical_chairs.JPG"


import picnic2022 from "../photos/picnic_2022/picnic22.JPG"
import mensvb from "../photos/picnic_2022/mensvb.JPG"
import group22 from "../photos/picnic_2022/2022_group.jpg"
import active from "../photos/picnic_2022/active.jpg"
import cricket from "../photos/picnic_2022/cricket.jpg"
import serving from "../photos/picnic_2022/serving.jpg"
import laughing from "../photos/picnic_2022/laughing.jpg"
import table from "../photos/picnic_2022/table.jpg"



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
    picnic2022,
    active,
    cricket,
    serving,
    laughing,
    table
]

export default function Home() {
    return (
        <AnimatedPage>
            <AppearOnScroll>
                    <div className="text_box">
                        <h1>Upcoming Events</h1>
                        <h2>Event 1</h2>
                        <h3>Date, Time</h3>
                        <h3 className="">Address</h3> 
                        <h2>Event 2</h2>
                        <h3>Date, Time</h3>
                        <h3 className="">Address</h3> 
                        <h2>Event 1</h2>
                        <h3>Date, Time</h3>
                        <h3 className="">Address</h3>
                    </div>
            </AppearOnScroll>
            <div>
                <AppearOnScroll> 
                    <div className="slideshow_container">
                        <h1>2023 Picnic</h1>   
                        <div 
                            style={{
                                maxWidth: "1000px",
                                width: "100%",
                                maxHeight: "600px",
                                aspectRatio: "10/6",
                                margin: "0 auto"
                            }}> 
                            <ImageSlider imageUrls = {PICNIC_2023_IMAGES} />
                        </div>
                    </div>
                </AppearOnScroll>
            </div>
            <div>
                <AppearOnScroll> 
                    <div className="slideshow_container">
                        <h1>2022 Picnic</h1>   
                        <div 
                            style={{
                                maxWidth: "1000px",
                                width: "100%",
                                maxHeight: "600px",
                                aspectRatio: "10/6",
                                margin: "0 auto"
                            }}> 
                            <ImageSlider imageUrls = {PICNIC_2022_IMAGES} />
                        </div>
                    </div>
                </AppearOnScroll>
            </div>
        </AnimatedPage>
    )
}

