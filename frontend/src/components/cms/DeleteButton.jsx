import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

/**
 * Reusable Delete Button
 *
 * @param {Function} onDelete - a function to be called when delete is confirmed (e.g., deleteEvent or deleteCommitteeMember)
 * @param {string} confirmMessage - the message to display in the confirmation dialog
 * @param {string|number} itemId - the unique ID to be passed to onDelete
 * @param {Object} ...props - any additional props to pass to the IconButton
 */


const DeleteButton = ({
  onDelete,
  confirmMessage = "Are you sure you want to delete this item?",
  itemId,
  sx,
}) => {

  function handleClick() {
    const confirmed = window.confirm(confirmMessage);
    if (confirmed) onDelete(itemId);
  };

  return (
    <IconButton
      onClick={handleClick}
      color="error"
      sx={sx}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;
