import React from "react";
import AnimatedPage from "../components/AnimatedPage";
import "../styling/pages.css";
import fb from "../photos/fb_icon.png"
import ig from "../photos/Instagram_logo.png"
import tk from "../photos/tiktok.png"

function Contact() {
    return (
        <AnimatedPage>
            <div className="text_box2">
                <h1>Feel free to contact us at the following</h1>
                <h3>Shreeja Baliga (President)</h3>
                <h4>shreejapai@yahoo.com</h4>
                {/* <h3>Person 2 (position)</h3>
                <h4>Insert Email Here</h4>
                <h3>Person 3 (position)</h3>
                <h4>Insert Email Here</h4> */}
                <h2>Follow our Socials Below</h2>
                <a href="https://www.facebook.com/groups/2620372688125086"
                 target="blank"
                 ><img className="rounded-image" src={ fb }></img></a>
                {/* <a href="#" target="blank"><img className="rounded-image" src={ ig }></img></a>
                <a href="#" target="blank"><img className="rounded-image" src={ tk }></img></a> */}
            </div>
        </AnimatedPage>
    );
  }
  
  export default Contact;
  