import CTA from "../components/CTA";
import Blogs from "./Blogs";
import Hero from "./Hero";
import Highlights from "./Highlights";
import News from "./News";
import Podcasts from "./Podcasts";
import Rankings from "./Rankings";
import Webinars from "./Webinars";



export default function Home() {
  return (
    <>
      <Hero />
      <Blogs />
      <Webinars />
      <Podcasts/>
      <Highlights/>
      <Rankings />
      <News/>
      <CTA />
    </>
  );
}