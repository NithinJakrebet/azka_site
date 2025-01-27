import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import useEvents from "../../hooks/useEvents";

const DeleteEvent = ({ event }) => {

  const { deleteEvent } = useEvents();

  return (
    <IconButton
      onClick={() => {
        const confirmed = window.confirm("Are you sure you want to delete this event?");
        if (confirmed) deleteEvent(event._id)
      }}
      color="error"
      sx={{ position: "absolute", top: 8, right: 8 }}
    >
      <DeleteIcon />
    </IconButton>
  );
     
}

export default DeleteEvent;