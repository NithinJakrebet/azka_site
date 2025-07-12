import { Box, Typography } from "@mui/material";

const MemberInfo = ({ name, position, bio }) => (
  <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
    <Typography variant="h4" component="h2" fontWeight="bold">
      {name}
    </Typography>
    <Typography variant="h6" color="text.secondary" gutterBottom>
      {position}
    </Typography>
    <Typography variant="body1">{bio}</Typography>
  </Box>
);

export default MemberInfo;