// Upcoming events, pics Slideshow type 

import React from "react";
import { ImageSlider } from "../components/ImageSlider.tsx";
import "../Home.css"

import male from "../photos/male_diwali.jpg"
import female from "../photos/female.jpg"
import picnic from "../photos/picnic.jpg"
import jakrebets from "../photos/jakrebets.jpg"
import ya from "../photos/young_adults.jpg"

const IMAGES = [
    male, 
    female, 
    picnic,
    ya,
    jakrebets
]

export default function Home() {
    return (
        <div>
            <div 
                style={{
                    maxWidth: "1200px",
                    width: "100%",
                    height: "500px",
                    aspectRatio: "10/6",
                    margin: "0 auto"
                }}> 
                <ImageSlider imageUrls = {IMAGES} />
            </div>
            <div className="text_box">
                <h1>Upcoming Events</h1>
                <h2>Event 1</h2>
                <h3>Date, Time</h3>
                <h4 className="">Address</h4> 
                <h2>Event 2</h2>
                <h3>Date, Time</h3>
                <h4 className="">Address</h4> 
                <h2>Event 1</h2>
                <h3>Date, Time</h3>
                <h4 className="">Address</h4>
            </div>
        </div>
    )
}

