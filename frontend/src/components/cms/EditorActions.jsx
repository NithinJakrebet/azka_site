import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { ActionsContainer } from "./styles";

const EditorActions = ({ formFields, item, existingData, editItem, onDelete, confirmMessage, itemId }) => {
  const isInEditorMode = localStorage.getItem("isInEditorMode") === "true";

  if (!isInEditorMode) {
    return null;
  }

  return (
    <ActionsContainer>
      <EditButton
        formFields={formFields}
        item={item}
        existingData={existingData}
        editItem={editItem}
      />
      <DeleteButton
        onDelete={onDelete}
        confirmMessage={confirmMessage}
        itemId={itemId}
      />
    </ActionsContainer>
  );
};

export default EditorActions;