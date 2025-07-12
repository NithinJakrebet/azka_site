import { Container } from "@mui/material";

const PageContainer = ({ children, ...props }) => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }} {...props}>
      {children}
    </Container>
  );
};

export default PageContainer;