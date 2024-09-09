import '../styling/pages.css';
import AnimatedPage from "../components/AnimatedPage.jsx";
import AppearOnScroll from "../components/AppearOnScroll";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const archivedEvents = [
    {
        title: "Spring Picnic",
        date: "March 20, 2024",
        description: "An exciting picnic event for families and friends at the local park. Games, food, and more!"
    },
    {
        title: "Hike",
        date: "July 14, 2024",
        description: "A scenic hike to raise funds."
    }
];

export default function Home() {
    return (
        <AnimatedPage>
            <AppearOnScroll>
                <div className="text_box">
                    <h2>Upcoming Events</h2>

                    {/* New Events */}
                    <h3>AZ Konkanis Volunteering Event</h3>
                    <h4>September 14th</h4>
                    <h4>4:30 PM to 6:15 PM</h4>
                    <h4>Address: 1345 S Alma School Road, Mesa, AZ 85210</h4>

                    <h3>AZ Konkanis Family Hike & Breakfast</h3>
                    <h4>October 26th</h4>
                    <h4>9:00 AM to 12:00 PM</h4>
                    <h4>Location: South Mountain</h4>

                    <h3>AZ Konkanis Diwali Event</h3>
                    <h4>November 16th</h4>
                    <h4>Details TBD</h4>

                    {/* Archived Events using Accordion */}
                    <h2>Archived Events</h2>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Archived Events</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {archivedEvents.map((event, index) => (
                                <div key={index}>
                                    <h4>{event.title}</h4>
                                    <p>Date: {event.date}</p>
                                    <p>{event.description}</p>
                                </div>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                </div>
            </AppearOnScroll>
        </AnimatedPage>
    )
}
