// Upcoming events, pics Slideshow type 

import React from "react";
import { ImageSlider } from "../components/ImageSlider.tsx";
import './pages.css';
import AnimatedPage from "../components/AnimatedPage.jsx";
import AppearOnScroll from "../components/AppearOnScroll"; // Import the new component


import male from "../photos/male_diwali.jpg"
import female from "../photos/female.jpg"
import jakrebets from "../photos/jakrebets.jpg"
import mensvb from "../photos/mensvb.JPG"
import foodline from "../photos/food_line.JPG"
import picnic2022 from "../photos/picnic22.JPG"




const IMAGES = [
    male, 
    female, 
    jakrebets,
    mensvb,
    foodline,
    picnic2022
]

export default function Home() {
    return (
        <AnimatedPage>
            <div>
                <div 
                    style={{
                        maxWidth: "1000px",
                        width: "100%",
                        maxHeight: "400px",
                        aspectRatio: "10/6",
                        margin: "0 auto"
                    }}> 
                    <ImageSlider imageUrls = {IMAGES} />
                </div>
                <AppearOnScroll>
                    <div className="om_text_box">
                        <h1>Upcoming Events</h1>
                        <h2>Event 1</h2>
                        <h3>Date, Time</h3>
                        <h3 className="">Address</h3> 
                        <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod voluptate iure</p>
                        <h2>Event 2</h2>
                        <h3>Date, Time</h3>
                        <h3 className="">Address</h3> 
                        <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod voluptate iure</p>
                        <h2>Event 1</h2>
                        <h3>Date, Time</h3>
                        <h3 className="">Address</h3>
                        <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod voluptate iure</p>
                    </div>
                </AppearOnScroll>
            </div>
        </AnimatedPage>
    )
}

