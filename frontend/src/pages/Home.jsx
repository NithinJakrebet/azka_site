import useEvents from "../hooks/useEvents";
import "../styling/home.css";
import ArchivedEvents from "../components/home/ArchivedEvents";
import UpcomingEvents from "../components/home/UpcomingEvents";
const Home = () => {
  const { loading, error } = useEvents();

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "1rem" }} className="text_box">
      <UpcomingEvents />
      <ArchivedEvents />
    </div>
  );
};

export default Home;
