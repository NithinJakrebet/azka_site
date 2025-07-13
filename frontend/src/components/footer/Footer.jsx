import { Container, Typography, Divider, Box } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import { FooterBox, SocialStack, StyledIconButton, EmailLink } from './styles'; // Import styled components

const socialLinks = [
  { icon: <FacebookIcon />, href: "https://www.facebook.com/groups/2620372688125086", name: "Facebook" },
];

export default function Footer() {
  return (
    <FooterBox component="footer">
      <Container maxWidth="lg">
        <SocialStack>
          <Box>
            {socialLinks.map((social) => (
              <StyledIconButton
                key={social.name}
                component="a"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </StyledIconButton>
            ))}
            <EmailLink href="mailto:azkonkanispresident@gmail.com" variant="body2" underline="hover">
              azkonkanispresident@gmail.com
            </EmailLink>
            {/* <StyledDonateButton
              variant="outlined"
              size="large"
              href="https://form.jotform.com/242000714755145"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate to SVK Temple
            </StyledDonateButton> */}
          </Box>
        </SocialStack>
        <Divider />
        <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 2 }}>
          {'© '}
          {new Date().getFullYear()}
          {' AZ Konkanis'}
        </Typography>
      </Container>
    </FooterBox>
  );
}