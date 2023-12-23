import React from "react";
import "../styling/pages.css";
import AnimatedPage from "../components/AnimatedPage";
import shreeja from "../photos/exec_com/Shreeja.JPG";
import Nithin from "../photos/exec_com/Nithin.JPG";
import AppearOnScroll from "../components/AppearOnScroll"; // Import the new component


function CommitteeMember({ name, bio, imageUrl }) {
  return (
    <div className="member-container">
      <img src={imageUrl} alt={name} className="member-image" />
      <div className="member-bio">
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <AnimatedPage>
      <div>
        <h1>Executive Committee</h1>
        <AppearOnScroll>
            <CommitteeMember 
            name="Shreeja Baliga, President" 
            bio="Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod voluptate iure...
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod voluptate iure...
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod voluptate iure...
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod voluptate iure..." 
            imageUrl={shreeja} 
            />
        </AppearOnScroll>
        <AppearOnScroll>
            <CommitteeMember 
            name="Nithin Jakrebet, Website Manager" 
            bio="Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod voluptate iure..." 
            imageUrl={Nithin} 
            />
        </AppearOnScroll>
        <AppearOnScroll>
            <CommitteeMember 
            name="Nithin Jakrebet, Website Manager" 
            bio="Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod voluptate iure..." 
            imageUrl={Nithin} 
            />
        </AppearOnScroll>
        <AppearOnScroll>
            <CommitteeMember 
            name="Nithin Jakrebet, Website Manager" 
            bio="Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod voluptate iure..." 
            imageUrl={Nithin} 
            />
        </AppearOnScroll>
        {/* Add other members as needed */}
      </div>
    </AnimatedPage>
  );
}
