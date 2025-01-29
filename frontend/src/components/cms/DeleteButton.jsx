import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

/**
 * Reusable Delete Button
 *
 * @param {Function} onDelete - a function called when deletion is confirmed
 * @param {string} confirmMessage - the message in the window.confirm dialog
 * @param {string|number} itemId - the unique ID to be passed to onDelete
 * @param {Object} sx - custom MUI sx prop to override default styling
 */

const DeleteButton = ({
  onDelete,
  confirmMessage = "Are you sure you want to delete this item?",
  itemId,
  sx: sxProp = {}
}) => {
  // Merge any sx from props with our default hover styles
  const mergedSx = {
    backgroundColor: "#edb9b9",        // Light red
    "&:hover": {
      backgroundColor: "#9e3a3a"      // Darker red on hover
    },
    ...sxProp,                        // spread user overrides last (if desired)
  };

  function handleClick() {
    const confirmed = window.confirm(confirmMessage);
    if (confirmed) onDelete(itemId);
  }

  return (
    <IconButton
      onClick={handleClick}
      color="error"
      sx={mergedSx}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;
