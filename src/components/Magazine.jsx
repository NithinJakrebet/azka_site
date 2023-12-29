import React from "react";
import "../styling/magazine.css"

export default function Magazine ({ title, imgURL, pdfURL }) {
    return (
        <div className="magazine-container">
            <img src={imgURL} alt="year_pic" className="magazine-image"/>
            <a href={pdfURL}>{title}</a>
        </div>    
    
    )
}
  

/*
function CommitteeMember({ name, bio, imageUrl }) {
  return (
    <div className="member-container">
      <img src={imageUrl} alt={name} className="member-image" />
      <div className="member-bio">
        <h2 style={{fontWeight: "bold"}}>{name}</h2>
        <p>{bio}</p>
      </div>
    </div>
  );
}
 */