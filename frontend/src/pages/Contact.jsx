import AnimatedPage from "../components/aesthetics/AnimatedPage";
import "../styling/contact.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Contact() {
  return (
    <AnimatedPage>
      <Box 
        className="text_box2"
        sx={{ 
          display: "flex",
          flexDirection: "column",
          gap: "1rem" /* spacing between elements */,
        }}
      >
        <h1>Contact Us!</h1>

        <a href="mailto:azkonkanispresident@gmail.com">Email Us</a>

        <Button
          sx={{
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
            backgroundColor: "#1976d2",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
          }}
          href="https://form.jotform.com/242000714755145"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate to SVK Temple
        </Button>

        <h2>Follow our Socials Below</h2>
        <a
          href="https://www.facebook.com/groups/2620372688125086"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="rounded-image"
            src="https://lh3.googleusercontent.com/pw/AP1GczNQYm2JXAaouwivvfxfR-6ZgKWmlng1ed3rgsL9Zu_McouxeOqv_A5PTbEsVkcErOs3akGUYbop0SphapAccuOJfN37A23p4axnnTOTyp_HYhyRRnJU9QbFJCCOgwzy4_kz8Ag3XzWMGHh47rM1Jjz06w=w325-h325-s-no?authuser=0"
            alt="Facebook icon"
          />
        </a>
      </Box>
    </AnimatedPage>
  );
}
