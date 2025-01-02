import AnimatedPage from "../components/AnimatedPage";
import "../styling/pages.css";

import fb from "../photos/fb_icon.png";

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
            src={fb}
            alt="Facebook icon"
          />
        </a>
      </Box>
    </AnimatedPage>
  );
}
