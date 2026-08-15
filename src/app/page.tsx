import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import WhyFPV from "@/components/sections/WhyFPV";
import Services from "@/components/sections/Services";
import FlightToFrame from "@/components/sections/FlightToFrame";
import Capabilities from "@/components/sections/Capabilities";
import About from "@/components/sections/About";
import Availability from "@/components/sections/Availability";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import SectionDivider from "@/components/ui/SectionDivider";

import { client } from "@/sanity/lib/client";
import { featuredProjects } from "@/data/projects";

export default async function HomePage() {
  let projects = featuredProjects;
  try {
    const sanityProjects = await client.fetch(`*[_type == "project"] | order(order asc)`);
    if (sanityProjects && sanityProjects.length > 0) {
      projects = sanityProjects;
    }
  } catch (e) {
    console.log("Sanity fetch failed (expected if CMS is not set up), using static data");
  }

  return (
    <>
      <Hero />
      <About />
      <SelectedWork projects={projects} />
      <WhyFPV />
      <Services />
      <FlightToFrame />
      <Capabilities />
      <Availability />
      <Testimonials />
      <Contact />
    </>
  );
}
