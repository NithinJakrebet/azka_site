import AppearOnScroll from "../components/aesthetics/AppearOnScroll";
import AnimatedPage from "../components/aesthetics/AnimatedPage";
import NewsletterCard from "../components/newsletter/organisms/NewsletterCard";
import useNewsletters from "../hooks/useNewsletters";
import AddButton from "../components/cms/AddButton";
import { Box, CircularProgress, Grid2 as Grid } from "@mui/material";
import PageContainer from "../components/layout/PageContainter";
import PageTitle from "../components/layout/PageTitle";

const Newsletter = () => {
  const { newsletters, loading, addNewsletter } = useNewsletters();
  const isInEditorMode = localStorage.getItem("isInEditorMode") === "true";

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress color="primary" size={60} />
      </Box>
    );
  }

  const emptyForm = {
    title: "",
    date: "",
    imgURL: "",
    pdfURL: ""
  };

  const formFields = [
    { label: "Title", name: "title", type: "text" },
    { label: "Date", name: "date", type: "date" },
    { label: "Image URL", name: "imgURL", type: "text" },
    { label: "PDF URL", name: "pdfURL", type: "text" },
  ];

  const convertGoogleDriveLink = (url) => {
    if (!url) return "";
    let fileId;
    let match = url.match(/\/d\/([^\/]+)/);
    if (match && match[1]) {
      fileId = match[1];
    } else {
      match = url.match(/\/folders\/([^\/]+)/);
      if (match && match[1]) {
        fileId = match[1];
      }
    }
    return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url;
  };

  return (
    <AnimatedPage>
      <PageContainer>
        <PageTitle>
          Our Newsletters
        </PageTitle>
        {isInEditorMode && (
          <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
            <AddButton
              formFields={formFields}
              item="Newsletter"
              addItem={addNewsletter}
              emptyForm={emptyForm}
            />
          </Box>
        )}
        <Grid container spacing={4} justifyContent="center">
          {newsletters.map((newsletter) => (
            <Grid item key={newsletter._id} xs={12} sm={6} md={4}>
              <AppearOnScroll>
                <NewsletterCard
                  newsletter={{
                    ...newsletter,
                    pdfURL: convertGoogleDriveLink(newsletter.pdfURL)
                  }}
                  formFields={formFields}
                />
              </AppearOnScroll>
            </Grid>
          ))}
        </Grid>
      </PageContainer>
    </AnimatedPage>
  );
};

export default Newsletter;