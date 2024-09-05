import { ImageSlider } from "../components/ImageSlider.tsx";
import '../styling/pages.css';
import AnimatedPage from "../components/AnimatedPage.jsx";
import AppearOnScroll from "../components/AppearOnScroll";

import chairs from "../photos/picnic_2024/chairs.JPG"
import group from "../photos/picnic_2024/group.JPG"
import intro_line from "../photos/picnic_2024/intro_line.jpg"
import kite from "../photos/picnic_2024/kite.JPG"
import line_food from "../photos/picnic_2024/line_food.JPG"

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

import cover from "../photos/papago_hike/cover.jpg"
import ducks from "../photos/papago_hike/ducks.jpg"
import flex from "../photos/papago_hike/flex.jpg"
import hike_group from "../photos/papago_hike/hike_group.jpg"
import sign from "../photos/papago_hike/sign.jpg"

const HIKE_IMAGES = [
    cover,
    ducks,
    flex,
    hike_group,
    sign
]

const PICNIC_2024_IMAGES = [
    group,
    chairs,
    intro_line,
    kite,
    line_food
]

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

/* */

export  default function Gallery() {
    return(
        <AnimatedPage>
            <AppearOnScroll> 
                <div className="slideshow_container">
                    <h1 className="title">Hike at Papago Park 2024</h1>
                <a 
                    href= "https://photos.app.goo.gl/okAyaXBKE43wLjUC6 "
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
                        <ImageSlider imageUrls = {HIKE_IMAGES} />
                    </div>
                </div>
            </AppearOnScroll>

            <AppearOnScroll> 
                <div className="slideshow_container">
                    <h1 className="title">2024 Picnic</h1>
                <a 
                    href= "https://photos.app.goo.gl/PyKaeB7SLgsmC3zM7"
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
                        <ImageSlider imageUrls = {PICNIC_2024_IMAGES} />
                    </div>
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

    );
    
}