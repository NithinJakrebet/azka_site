import React from "react";
import "../styling/pages.css";
import AppearOnScroll from "../components/AppearOnScroll"; 

import AnimatedPage from "../components/AnimatedPage";
import Baliga from "../photos/exec_com/Baliga.jpeg";
import Nithin from "../photos/exec_com/Nithin.JPG";
import Kamath from "../photos/exec_com/Kamath.jpeg";
import Hema from "../photos/exec_com/Hema.jpeg";

/*
Presidents: Shreeja & Guru Baliga
Treasurer: Sasikala Kamath
Deputy Treasurer: Hema Prabhu
Director, Food Coordination: Gopika Pai
Deputy Directors, Food Coordination: Pavithra & Shirish Kamath
Cultural Activity & Entertainment Associate: Vyshali Mallya
 */


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
        <h1>Our Mission</h1>
        <h3 className="text-box">Sample TextSample TextSample TextSample TextSample TextSample TextSample TextSample TextSample TextSample TextSample Text
        Sample TextSample TextSample TextSample TextSample TextSample TextSample TextSample TextSample TextSample TextSample Text
        </h3>
        <h1>Executive Committee</h1>
        <AppearOnScroll>
            <CommitteeMember 
            name="Presidents: Shreeja & Guru Baliga" 
            bio="Gurudath fondly known as Guru is originally from Bantwal and moved to the US in 2000 landing at the city of dreams, New York.
            Shreeja has lived in Bengaluru for most of her life and moved to the US in 2004. They live in Chandler AZ, and are proud parents to 
            Tanisha, who is a U of A Freshman and Tanay, who is almost stepping into highschool this year. They also have a loving cat, Venezuela Baliga.
            Shreeja and Guru have lived in New Jersey, Florida and California prior to calling Arizona their home since 2008. 
            They love khavche, khavoche, hasche, Hossoche ani Gammat Korche." 
            imageUrl={Baliga} 
            />
        </AppearOnScroll>
        <AppearOnScroll>
            <CommitteeMember
            name="Website Manager: Nithin Jakrebet" 
            bio="Nithin has lived in Arizona his whole life, and is now a student at Arizona State University studying Computer Science. 
            He enjoys spending his free time playing guitar, playing basketball, and convincing his friends that Konkani is a real language." 
            imageUrl={Nithin} 
            />
        </AppearOnScroll>
        <AppearOnScroll>
            <CommitteeMember 
            name="Treasurer: Sasikala Kamath " 
            bio="" 
            imageUrl={Nithin} 
            />
        </AppearOnScroll>
        <AppearOnScroll>
            <CommitteeMember 
            name="Deputy Treasurer: Hema Prabhu" 
            bio="" 
            imageUrl={Hema} 
            />
        </AppearOnScroll>
        <AppearOnScroll>
            <CommitteeMember 
            name="Director, Food Coordination: Gopika Pai" 
            bio="" 
            imageUrl={Nithin} 
            />
        </AppearOnScroll>
        <AppearOnScroll>
            <CommitteeMember 
            name="Deputy Directors, Food Coordination: Pavithra & Shirish Kamath" 
            bio="Shirish is originally from Kumta and Pavithra from Tumakuru, now reside in Phoenix since 2016 with our two daughters.
            Together, our family shares a passion for travel, enjoying the thrill of exploring new destinations. The love for adventure extends
            to trying diverse cuisines, making our journey not only about places but also about savoring unique delicacies. 
            This shared enthusiasm for discovery binds our family together, creating memorable experiences." 
            imageUrl={Kamath} 
            />
        </AppearOnScroll>
        <AppearOnScroll>
            <CommitteeMember 
            name="Cultural Activity & Entertainment Associate: Vyshali Mallya" 
            bio="" 
            imageUrl={Nithin} 
            />
        </AppearOnScroll>
      </div>
    </AnimatedPage>
  );
}
