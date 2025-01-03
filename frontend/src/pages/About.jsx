import "../styling/pages.css";
import AppearOnScroll from "../components/AppearOnScroll"; 
import AnimatedPage from "../components/AnimatedPage";


import Baliga from "../photos/exec_com/Baliga.jpeg";
import Nithin from "../photos/exec_com/Nithin3.jpg";
import Hema from "../photos/exec_com/Hema3.jpeg";
import Vyshali from "../photos/exec_com/Vyshali.jpeg";
import PreetiAndHarish from "../photos/exec_com/PreetiAndHarish.jpeg";
import Vasudeva from "../photos/exec_com/Vasudeva.jpg"
import Veena from "../photos/exec_com/Veena2.png"
import Aswhini from "../photos/exec_com/Ashwini.png"

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
    name: "Treasurer: Durga Nayak and Samanjay Shenoy",
    bio: '' ,
    // imageUrl: 
  },
  {
    name: "Deputy Treasurer: Hema Prabhu",
    bio: "Hema Prabhu, from Kanhangad, Kerala, moved to Phoenix, AZ in 1999. She is married to Panduranga Prabhu from Mangaluru. They have two loving children Nisha and Nithin, and currently reside in South Phoenix.",
    imageUrl: Hema
  },
  {
    name: "Director, Food Coordination: Preeti Kamat",
    bio: "",
    // imageUrl: 
  },
  {
    name: "Deputy Director, Food Coordination: Vasudeva Kamat ",
    bio: 
    `Vasudeva is originally from Mangalore, proud alumnus of Canara High School and St. Aloysius College |
     Masters from KMC Mangalore, PhD from Mysore University | Moved to the U.S. in 2008, with post doctoral career stops in Michigan, Indiana, 
     and New York before settling in Arizona in 2023 | Living in Gilbert with my wife Neeta of 20 years, son Vinay(sophomore at Northeastern University, Boston), 
     and 6-year-old daughter at BASIS Chandler | Outdoor enthusiast, foodie, and passionate about cooking and sharing meals | Dedicated to preserving and promoting Konkani 
     culture and traditions.`,
    imageUrl: Vasudeva
  },
  {
    name: "Deputy Director, Food Coordination: Dr Ashwini Ammunje",
    bio:`Ashwini Ammunje is a practicing internist in Peoria AZ for the past 15 years.
    She is passionate about practicing medicine and supporting the Konkani community.
    Being a Dermatologist from India she is keen on preventing skin cancer in the community. Please learn more at our practice website www.stellarmgaz.com.`
    ,
    imageUrl: Aswhini
  },
  {
    name: "Cultural Director: Veena Nerurkar",
    bio: "Hello Bharshi Upkari mandali, I am Veena Nerurkar, originally from Karwar but raised in Mumbai. I moved to Arizona in 2018 with my husband and son after residing 17 years in Illinois.  I enjoy meeting new people, love to travel, avid fan of home improvement shows, and foodie. One of my favorite food is madgane.  I am looking forward to contributing to the 2025 Entertainment Committee.",
    imageUrl: Veena
  },
  {
    name: "Cultural Activity & Entertainment Associate: Pavithra",
    bio: "",
    // imageUrl: 
  },
  {
    name: "Cultural Activity & Entertainment Associate; Chudi Puja: Vyshali Mallya",
    bio: "Vyshali has been living in Phoenix for a decade with Ravikiran (spouse) and Rayansh (son). She loves music and has learned and taught Carnatic Music in the valley for 5 years.",
    imageUrl: Vyshali
  },
  {
    name: "Cultural Activity Associate: Preeti Kamath",
    bio: "Preeti (right) is originally from Mumbai and has been living in Arizona with her husband, Harish (left), and their daughter, Nidhi. Since 2007, Arizona has become a deeply cherished home with Konkani friends who have added warmth and joy to their lives!",
    imageUrl: PreetiAndHarish
  },
  {
    name: "PR Specialist: Tanisha Baliga",
    bio: "",
    // imageUrl: 
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
