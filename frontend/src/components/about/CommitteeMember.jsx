import DeleteButton from "../DeleteButton";
import useCommitteeMembers from "../../hooks/useCommitteeMembers";

// Reusable component for Name, Position, Bio, and Picture,

const CommitteeMember = ({ member }) => {

  const { deleteCommitteeMember } = useCommitteeMembers();
  
      return (
        <div className="member-container">
          <img src={member.imageUrl} alt={member.name} className="member-image" />
          <div className="member-bio">
            <h2 style={{ fontWeight: "bold" }}>{member.name}</h2>
            <p>{member.bio}</p>
          </div>
          <DeleteButton
            onDelete={deleteCommitteeMember}
            confirmMessage = {`Are you sure you want to delete this Committee Member: ${member.name}`}
            itemId={member._id}
          />
          <hr 
            style={{
              margin: "5px",
              height: "5"
            }} 
          />
        </div>
      );
    }

    
export default CommitteeMember;