import { Typography } from "@mui/material";

const PageTitle = ({ children, ...props }) => {
  return (
    <Typography variant="h2" component="h1" align="center" gutterBottom {...props}>
      {children}
    </Typography>
  );
};

export default PageTitle;