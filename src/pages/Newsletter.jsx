import React from "react";
import AnimatedPage from "../components/AnimatedPage";
import AppearOnScroll from "../components/AppearOnScroll";
import "../styling/magazine.css"
import "../styling/pages.css"

import pic2022 from "../photos/2022.jpeg";
import pdf2022 from "../newsletter_pdfs/AZKA2022Example.pdf"
import pdf2023 from "../newsletter_pdfs/AZKA2023Example.pdf"
import pic2023 from "../photos/2023.png";



function Magazine ({ title, imgURL, pdfURL }) {
    return (
        <div className="magazine-container">
          {/* <img
            className="magazine-image"
            src={imgURL} alt="year_pic" 
          /> */}
          <a 
            href={pdfURL}
            target="_blank" 
            rel="noopener noreferrer" 
            className="magazine-url"
          >
            {title}
          </a>
        </div>    
    )
}

export default function Newsletter() {
    return (
        <AnimatedPage>
          <div className="text_box">Nothing Here Yet!</div>
            {/* <AppearOnScroll>
                <Magazine
                title="2023 Newsletter"
                imgURL={pic2022}
                pdfURL={pdf2023}
                />
            </AppearOnScroll> */}
            {/* <AppearOnScroll>
                <Magazine
                title="2022 Newsletter"
                imgURL={pic2023}
                pdfURL={pdf2022}
                />
            </AppearOnScroll>      */}
        </AnimatedPage>
    )
}



