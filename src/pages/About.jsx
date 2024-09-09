import "../styling/pages.css";
import AppearOnScroll from "../components/AppearOnScroll"; 
import AnimatedPage from "../components/AnimatedPage";

import Baliga from "../photos/exec_com/Baliga.jpeg";
import Nithin from "../photos/exec_com/Nithin2.jpg";
import Kamath from "../photos/exec_com/Kamath.jpeg";
import Hema from "../photos/exec_com/Hema3.jpeg";
import Gopika from "../photos/exec_com/Gopika.jpeg";
import Sasikala from "../photos/exec_com/Sasikala.jpeg";
import Vyshali from "../photos/exec_com/Vyshali.jpeg";
import PreetiAndHarish from "../photos/exec_com/PreetiAndHarish.jpeg";

const CommitteeMember = ({ name, bio, imageUrl }) => {
  return (
    <div className="member-container">
      <img src={imageUrl} alt={name} className="member-image" />
      <div className="member-bio">
        <h2 style={{ fontWeight: "bold" }}>{name}</h2>
        <p>{bio}</p>
      </div>
    </div>
  );
}

// Data for committee members
const committeeMembers = [
  {
    name: "Presidents: Guru & Shreeja Baliga",
    bio: "Gurudath, AKA Guru, is originally from Bantwal and moved to the US in 2000, landing at the city of dreams, NYC. Shreeja has lived in Bengaluru for most of her life and moved to the US in 2004. They both currently live in Chandler, AZ, and are proud parents to Tanisha, who is a UofA Freshman and Tanay, who is stepping into highschool this year. They also have a loving cat, Venezuela Baliga. Shreeja and Guru have lived in New Jersey, Florida and California prior to calling Arizona their home since 2008. They love khavche, khavoche, hasche, Hossoche ani Gammat Korche.",
    imageUrl: Baliga
  },
  {
    name: "Treasurer: Sasikala Kamath",
    bio: "Sasikala Kamath and family moved to Arizona in 2004. Sasikala grew up in Vizianagarm, AP. Her parents' native place is Koteswar, Karnataka. She speaks Telugu very well other than Konkani. Her husband Shankar Kamath is from Manchkal, near Shirva. They have 2 kids, Sanketh and Samantha. Sanketh is working at Meta and Samantha is working at IBM. She enjoys eating Amchi food, and family gatherings.",
    imageUrl: Sasikala
  },
  {
    name: "Deputy Treasurer: Hema Prabhu",
    bio: "Hema Prabhu, from Kanhangad, Kerala, moved to Phoenix, AZ in 1999. She is married to Panduranga Prabhu from Mangaluru. They have two loving children Nisha and Nithin, and currently reside in South Phoenix.",
    imageUrl: Hema
  },
  {
    name: "Director, Food Coordination: Gopika Pai",
    bio: "Gopika is a fun loving individual who loves to laugh and crack jokes (though only her husband laughs at her jokes) and is always up for an adventure. She is a proud amchi and Dalitoy is her joy!",
    imageUrl: Gopika
  },
  {
    name: "Deputy Directors, Food Coordination: Pavithra & Shirish Kamath",
    bio: "Shirish is originally from Kumta and Pavithra from Tumakuru. They have been living in Phoenix since 2016 with their two daughters. Their family shares a passion for travel, enjoying the thrill of exploring new destinations. The love for adventure extends to trying diverse cuisines, making our journey not only about places but also about savoring unique delicacies. This shared enthusiasm for discovery binds our family together, creating memorable experiences.",
    imageUrl: Kamath
  },
  {
    name: "Cultural Activity & Entertainment Associate: Vyshali Mallya",
    bio: "Vyshali has been living in Phoenix for a decade with Ravikiran (spouse) and Rayansh (son). She loves music and has learned and taught Carnatic Music in the valley for 5 years.",
    imageUrl: Vyshali
  },
  {
    name: "Cultural Activity Associate: Preeti Kamath",
    bio: "Preeti (right) is originally from Mumbai and has been living in Arizona with her husband, Harish (left), and their daughter, Nidhi. Since 2007, Arizona has become a deeply cherished home with Konkani friends who have added warmth and joy to their lives!",
    imageUrl: PreetiAndHarish
  },
  {
    name: "Website Manager: Nithin Jakrebet",
    bio: "Nithin has lived in Arizona his whole life, and is now a student at Arizona State University studying Computer Science.",
    imageUrl: Nithin
  }
];

export default function About() {
  return (
    <AnimatedPage>
      <div>
        <h1 className="title">Executive Committee</h1>
        {committeeMembers.map((member, index) => (
          <AppearOnScroll key={index}>
            <CommitteeMember
              name={member.name}
              bio={member.bio}
              imageUrl={member.imageUrl}
            />
          </AppearOnScroll>
        ))}
      </div>
    </AnimatedPage>
  );
}
