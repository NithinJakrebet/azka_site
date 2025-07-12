import { Box, Container, Typography, Stack, Divider, IconButton, Link } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // Using as a placeholder for TikTok

const socialLinks = [
  { icon: <FacebookIcon />, href: "https://www.facebook.com/groups/2620372688125086", name: "Facebook" },
  { icon: <InstagramIcon />, href: "#", name: "Instagram" }, // Replace with your Instagram link
  { icon: <MusicNoteIcon />, href: "#", name: "TikTok" },    // Replace with your TikTok link
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[900],
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="center"
          spacing={1}
          // sx={{ mb: 2 }}
        >
          {socialLinks.map((social) => (
            <IconButton
              key={social.name}
              component="a"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'text.secondary',
                transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.2)',
                  color: 'primary.main'
                }
              }}
            >
              {social.icon}
            </IconButton>
          ))}
           <Box>
            <Link 
              href="mailto:azkonkanispresident@gmail.com" 
              variant="body2" 
              underline="hover"
              sx={{ color: 'text.secondary', transition: 'color 0.2s ease-in-out', '&:hover': { color: 'primary.main' } }}
            >
              azkonkanispresident@gmail.com
            </Link>
          </Box>
        </Stack>
        <Divider />
        <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 2 }}>
          {'© '}
          {new Date().getFullYear()}
          {' AZ Konkanis'}
        </Typography>
      </Container>
    </Box>
  );
}