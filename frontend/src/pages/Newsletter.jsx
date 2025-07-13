import useNewsletters from "../hooks/useNewsletters";
import PageLayout from "../components/layout/PageLayout";
import NewsletterCard from "../components/pages/newsletter/NewsletterCard";
import { formConfig } from "../constants";
import { Grid2 as Grid } from "@mui/material";

const Newsletter = () => {
  const { newsletters, loading, addNewsletter } = useNewsletters();

  // Get form configuration for a newsletter
  const newsletterConfig = formConfig.newsletter;

  // Define the props for the AddButton, which will be passed to PageLayout
  const addButtonProps = {
    ...newsletterConfig,
    addItem: addNewsletter,
  };

  // This utility function is specific to this page's data, so it's fine for it to live here.
  const convertGoogleDriveLink = (url) => {
    if (!url) return "";
    const match = url.match(/\/d\/([^/]+)/);
    const fileId = match ? match[1] : null;
    return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url;
  };

  return (
    <PageLayout
      pageTitle="Our Newsletters"
      loading={loading}
      addButtonProps={addButtonProps}
    >
      <Grid container spacing={4} justifyContent="center">
        {newsletters.map((newsletter) => (
          <Grid item key={newsletter._id} xs={12} sm={6} md={4}>
            <NewsletterCard
              newsletter={{
                ...newsletter,
                pdfURL: convertGoogleDriveLink(newsletter.pdfURL),
              }}
              formFields={newsletterConfig.formFields}
            />
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
};

export default Newsletter;