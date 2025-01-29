import "../../styling/magazine.css";
import "../../styling/home.css";
import EditButton from "../cms/EditButton"
import DeleteButton from "../cms/DeleteButton";
import useNewsletters from "../../hooks/useNewsletters";

const Magazine = ({ newsletter, formFields }) => {

  const { deleteNewsletter, updateNewsletter } = useNewsletters();

  return (
    <div className="magazine-container">
      <img className="magazine-image" src={newsletter.imgURL} alt="year_pic" />
      <a 
        href={newsletter.pdfURL}
        target="_blank" 
        rel="noopener noreferrer" 
        className="magazine-url"
      >
        {newsletter.title}
      </a>
      <div className="cms-container">
        <EditButton
          formFields={formFields}
          item="Newsletter"
          existingData={newsletter}
          editItem={updateNewsletter}
        />
        <DeleteButton
          onDelete={deleteNewsletter}
          confirmMessage={`Are you sure you want to delete this Newsletter: ${newsletter.name}`}
          itemId={newsletter._id}
          sx={{ backgroundColor: "#f092b6" }}
        />
      </div>
    </div>
  );
}

export default Magazine;