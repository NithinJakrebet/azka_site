import DeleteButton from "../cms/DeleteButton";
import EditButton from "../cms/EditButton";
import useCommitteeMembers from "../../hooks/useCommitteeMembers";

// Reusable component for Name, Position, Bio, and Picture
const CommitteeMember = ({ member, formFields }) => {
  const { deleteCommitteeMember, updateCommitteeMember } = useCommitteeMembers();

  return (
    <div className="member-container">
      <img src={member.imageUrl} alt={member.name} className="member-image" />

      <div className="member-bio">
        <h2 style={{ fontWeight: "bold" }}>{member.name}</h2>
        <p>{member.bio}</p>
      </div>

      <div className="cms-container">
        <DeleteButton
          onDelete={deleteCommitteeMember}
          confirmMessage={`Are you sure you want to delete this Committee Member: ${member.name}`}
          itemId={member._id}
          sx={{ backgroundColor: "#f092b6" }}
        />
        <EditButton
          formFields={formFields}
          item="Event"
          existingData={member}
          editItem={updateCommitteeMember}
        />
      </div>

      <hr style={{
        margin: "5px",
        height: "5px",
        minWidth: "800px",
        justifySelf: "center"
      }} />
    </div>
  );
};

export default CommitteeMember;
