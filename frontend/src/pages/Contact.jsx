import AnimatedPage from "../components/aesthetics/AnimatedPage";
import { Container, Box, Typography, Button, Link, Stack, Avatar } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Contact() {
  return (
    <AnimatedPage>
      <Container maxWidth="sm" sx={{ py: 5, textAlign: 'center' }}>
        <Stack spacing={4} alignItems="center">
          <Typography variant="h2" component="h1">
            Contact Us
          </Typography>

          <Box>
            <Typography variant="h6" component="h2" gutterBottom>
              General Inquiries
            </Typography>
            <Link 
              href="mailto:azkonkanispresident@gmail.com" 
              variant="body1" 
              underline="hover"
              sx={{ fontSize: '1.2rem' }}
            >
              azkonkanispresident@gmail.com
            </Link>
          </Box>

          <Button
            variant="contained"
            color="primary"
            size="large"
            href="https://form.jotform.com/242000714755145"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ 
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.05)' }
            }}
          >
            Donate to SVK Temple
          </Button>

          <Box>
            <Typography variant="h6" component="h2" gutterBottom>
              Follow our Socials
            </Typography>
            <Link
              href="https://www.facebook.com/groups/2620372688125086"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Avatar sx={{ 
                bgcolor: '#1877F2', // Facebook blue
                width: 56, 
                height: 56,
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.1)' }
              }}>
                <FacebookIcon sx={{ fontSize: 40 }} />
              </Avatar>
            </Link>
          </Box>

        </Stack>
      </Container>
    </AnimatedPage>
  );
}