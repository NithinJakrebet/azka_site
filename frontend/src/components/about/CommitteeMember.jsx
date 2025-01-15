import "../../styling/pages.css";

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

    
export default CommitteeMember;