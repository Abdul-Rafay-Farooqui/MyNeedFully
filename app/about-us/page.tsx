

import Hero from "@/components/ui-components/Hero";
import Story from "@/components/about-us/Story";
import Values from "@/components/about-us/Values";
import Bottom from "@/components/about-us/Bottom";

const AboutPage = () => {
  return (
    <>
      <Hero
        title="About MyNeedfully"
        subtitle="Our mission is to connect people in crisis with the community support they need."
        background="light"
      />
      <Story />
      <Values />  
      <Bottom />
    </>
  );
};

export default AboutPage;
