import "../styling/pages.css";
import AppearOnScroll from "../components/AppearOnScroll"; 
import AnimatedPage from "../components/AnimatedPage";
import { committeeMembers } from "../data/commiteeMemberData";

// Reusable component for Name, Position, Bio, and Picture,
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
