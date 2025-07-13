import AnimatedPage from "../aesthetics/AnimatedPage";
import AddButton from "../cms/AddButton";
import { CircularProgress } from "@mui/material";
import { PageContainer, PageTitle, AddButtonContainer, LoadingContainer } from "../../pages/styles";

const PageLayout = ({ pageTitle, loading, addButtonProps, children }) => {
  const isInEditorMode = localStorage.getItem("isInEditorMode") === "true";

  if (loading) {
    return (
      <LoadingContainer>
        <CircularProgress color="primary" size={60} />
      </LoadingContainer>
    );
  }

  return (
    <AnimatedPage>
      <PageContainer>
        <PageTitle variant="h2" component="h1">
          {pageTitle}
        </PageTitle>
        {isInEditorMode && addButtonProps && (
          <AddButtonContainer>
            <AddButton {...addButtonProps} />
          </AddButtonContainer>
        )}
        {children}
      </PageContainer>
    </AnimatedPage>
  );
};

export default PageLayout;