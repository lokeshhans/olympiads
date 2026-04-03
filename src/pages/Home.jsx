import CTA from "../components/CTA";
import Blogs from "./Blogs";
import Hero from "./Hero";
import Rankings from "./Rankings";
import Webinars from "./Webinars";



export default function Home() {
  return (
    <>
      <Hero />
      <Rankings />
      <Blogs />
      <Webinars />
      <CTA />
    </>
  );
}