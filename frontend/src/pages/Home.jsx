import useEvents from "../hooks/useEvents";
import PageLayout from "../components/layout/PageLayout";
import UpcomingEvents from "../components/pages/home/molecules/UpcomingEvents";
import ArchivedEvents from "../components/pages/home/molecules/ArchivedEvents";
import { formConfig } from "../constants";
import { Divider } from "@mui/material";

const Home = () => {
  const {
    archivedEvents,
    upcomingEvents,
    loading,
    addEvent,
    updateEvent,
    deleteEvent,
  } = useEvents();

  // Get form configuration for an event
  const eventConfig = formConfig.event;

  // Define the props for the AddButton, which will be passed to PageLayout
  const addButtonProps = {
    ...eventConfig,
    addItem: addEvent,
  };

  return (
    <PageLayout
      pageTitle="Welcome to AZ Konkanis"
      loading={loading}
      addButtonProps={addButtonProps}
    >
      <UpcomingEvents
        events={upcomingEvents}
        formFields={eventConfig.formFields}
        onEdit={updateEvent}
        onDelete={deleteEvent}
      />
      <Divider sx={{ my: 5 }} />
      <ArchivedEvents archivedEvents={archivedEvents}/>
    </PageLayout>
  );
};

export default Home;