import AnimatedPage from "../components/AnimatedPage";
import AppearOnScroll from "../components/AppearOnScroll";
import "../styling/magazine.css";
import "../styling/pages.css";
import { newsletters } from "../data/newsletterData";

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

export default function Newsletter() {
  return (
    <AnimatedPage>
      {newsletters.map((newsletter, idx) => (
        <AppearOnScroll key={idx}>
          <Magazine
            title={newsletter.title}
            imgURL={newsletter.imgURL}
            pdfURL={newsletter.pdfURL}
          />
        </AppearOnScroll>
      ))}
    </AnimatedPage>
  );
}
