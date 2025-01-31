import "../styling/about.css";
import AppearOnScroll from "../components/aesthetics/AppearOnScroll" 
import AnimatedPage from "../components/aesthetics/AnimatedPage";
import useCommitteeMembers from "../hooks/useCommitteeMembers"
import CommitteeMember from "../components/about/CommitteeMember";
import AddButton from "../components/cms/AddButton";

const About = () => {

  const { committeeMembers, loading, addCommitteeMember } = useCommitteeMembers();

  const isInEditorMode = localStorage.getItem("isInEditorMode") === "true";


  if (loading) return <h1>Loading...</h1>

  // empty form for adding event
  const emptyForm = {
    name: "",
    bio: "",
    imageUrl: ""
  };

  // Form fields for adding member
  const formFields = [
    { label: "Name", name: "name", type: "text" },
    { label: "Bio", name: "bio", type: "text", multiline: true, rows: 4 },
    { label: "Image URL", name: "imageUrl", type: "text" },
  ];


  return (
    <AnimatedPage>
      {isInEditorMode &&
        <div style={{margin: "30px"}}>
          <AddButton formFields={formFields} item="Committee Member" addItem={addCommitteeMember} emptyForm={emptyForm}/>
        </div> 
      }   
      
      <h1 className="title">Executive Committee</h1>
      {committeeMembers.map((member, index) => (
        <AppearOnScroll key={index}>
          <CommitteeMember member={member} formFields={formFields}/>
        </AppearOnScroll>          
      ))}
    </AnimatedPage>
  );
}

export default About;