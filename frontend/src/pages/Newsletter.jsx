import AnimatedPage from "../components/AnimatedPage";
import AppearOnScroll from "../components/AppearOnScroll";
import Magazine from "../components/newsletter/Magazine";
import useNewsletters from "../hooks/useNewsletters";

const Newsletter = () => {

  const { newsletters, loading } = useNewsletters();

  if (loading) return <h1>Loading...</h1>

  return (
    <AnimatedPage>
      {newsletters.map((newsletter, idx) => (
        <AppearOnScroll key={idx}>
          <Magazine
            title={newsletter.title}
            imgURL={newsletter.imgURL}
            pdfURL={newsletter.pdfURL}
          />
        </AppearOnScroll>
      ))}
    </AnimatedPage>
  );
}

export default Newsletter;