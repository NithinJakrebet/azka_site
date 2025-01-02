import AnimatedPage from "../components/AnimatedPage";
import AppearOnScroll from "../components/AppearOnScroll";
import "../styling/magazine.css";
import "../styling/pages.css";

import pdf2023 from "../newsletter_pdfs/2023AZKANEWS.pdf";
import pic2023 from "../photos/picnic_2023/group.jpg";

import pdf2024 from "../newsletter_pdfs/2024AZKANEWS.pdf";
import pic2024 from "../photos/picnic_2024/group.JPG";

function Magazine({ title, imgURL, pdfURL }) {
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
  const newsletters = [
    {
      title: "2023 Newsletter",
      imgURL: pic2023,
      pdfURL: pdf2023
    },
    {
      title: "2024 Newsletter",
      imgURL: pic2024,
      pdfURL: pdf2024
    }
  ];

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
