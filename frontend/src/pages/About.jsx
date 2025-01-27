import "../styling/about.css";
import AppearOnScroll from "../components/AppearOnScroll"; 
import AnimatedPage from "../components/AnimatedPage";
import useCommitteeMembers from "../hooks/useCommitteeMembers"
import CommitteeMember from "../components/about/CommitteeMember";

const About = () => {

  const { committeeMembers, loading } = useCommitteeMembers();

  if (loading) return <h1>Loading...</h1>

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

export default About;