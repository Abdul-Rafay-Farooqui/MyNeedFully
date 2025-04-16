import Link from "next/link";
import Hero from "@/components/ui-components/Hero";
import Help from "@/components/resource/Help";
import Bottom from "@/components/resource/Bottom";

// Resources data


const ResourcesPage = () => {
  return (
    <>
      <Hero
        title="Resources"
        subtitle="Helpful links and contacts for those in need of support beyond material items."
        background="light"
      />
    <Help />
    <Bottom />
    </>
  );
};

export default ResourcesPage;
