import DeleteButton from "../cms/DeleteButton";
import EditButton from "../cms/EditButton";
import useCommitteeMembers from "../../hooks/useCommitteeMembers";

// Reusable component for Name, Position, Bio, and Picture
const CommitteeMember = ({ member, formFields }) => {
  const { deleteCommitteeMember, updateCommitteeMember } = useCommitteeMembers();

  const isInEditorMode = localStorage.getItem("isInEditorMode") === "true";


  return (
    <div className="member-container">
      <img src={member.imageUrl} alt={member.name} className="member-image" />

      <div className="member-bio">
        <h2 style={{ fontWeight: "bold" }}>{member.name}</h2>
        <p>{member.bio}</p>
      </div>

      {isInEditorMode &&
        <div className="cms-container">
          <EditButton
            formFields={formFields}
            item="Event"
            existingData={member}
            editItem={updateCommitteeMember}
          />
          <DeleteButton
            onDelete={deleteCommitteeMember}
            confirmMessage={`Are you sure you want to delete this Committee Member: ${member.name}`}
            itemId={member._id}
            sx={{ backgroundColor: "#f092b6" }}
          />
        </div>
      }
    </div>
  );
};

export default CommitteeMember;
