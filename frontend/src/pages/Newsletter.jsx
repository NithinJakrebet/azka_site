import AppearOnScroll from "../components/aesthetics/AppearOnScroll" 
import AnimatedPage from "../components/aesthetics/AnimatedPage";
import Magazine from "../components/newsletter/Magazine";
import useNewsletters from "../hooks/useNewsletters";
import AddButton from "../components/cms/AddButton";

const Newsletter = () => {
  
  const { newsletters, loading, addNewsletter } = useNewsletters();
  const isInEditorMode = localStorage.getItem("isInEditorMode") === "true";


  if (loading) return <h1>Loading...</h1>

    // empty form for adding event
    const emptyForm = {
      title: "",
      imgURL: "",
      pdfURL: ""
    };
  
    // Form fields for adding member
    const formFields = [
      { label: "Title", name: "title", type: "text" },
      { label: "Image URL", name: "imgURL", type: "text" },
      { label: "PDF URL", name: "pdfURL", type: "text" },
    ];
  

  return (
    <AnimatedPage>
      {isInEditorMode &&
        <div style={{margin: "10px"}}>
          <AddButton 
            formFields={formFields} 
            item="Newsletter" 
            addItem={addNewsletter} 
            emptyForm={emptyForm}
          />
        </div>
      }
      {newsletters.map((newsletter, idx) => (
        <AppearOnScroll key={idx}>
          <Magazine
            newsletter={newsletter}
            formFields={formFields}
          />
        </AppearOnScroll>
      ))}
    </AnimatedPage>
  );
}

export default Newsletter;