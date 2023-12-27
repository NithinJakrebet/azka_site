import React from "react";
import "../styling/footer.css";
import "../styling/pages.css"
import fb from "../photos/fb_icon.png"
import ig from "../photos/Instagram_logo.png"
import tk from "../photos/tiktok.png"

export default function Footer() {
	return (
        <div className="logo">
            AZKA
            <a href="#" target="blank"><img className="rounded-image" src={ fb }></img></a>
            <a href="#" target="blank"><img className="rounded-image" src={ ig }></img></a>
            <a href="#" target="blank"><img className="rounded-image" src={ tk }></img></a>
        </div>
    )
}

