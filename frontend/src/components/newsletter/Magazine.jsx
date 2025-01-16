import "../../styling/magazine.css";
import "../../styling/pages.css";

const Magazine = ({ title, imgURL, pdfURL }) => {
      return (
        <div className="magazine-container">
          <img className="magazine-image" src={imgURL} alt="year_pic" />
          <a 
            href={pdfURL}
            target="_blank" 
            rel="noopener noreferrer" 
            className="magazine-url"
          >
            {title}
          </a>
        </div>
      );
}

export default Magazine;