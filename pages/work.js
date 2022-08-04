import { createClient } from "../prismicio";
import Hero from "@/components/@/Hero/Hero";
import MetaTags from "@/components/@/MetaTags/MetaTags";
import PortfolioSection from "../components/PortfolioSection/PortfolioSection";

const Work = ({work}) => {
  return (
    <div>
      <MetaTags
        title="Work"
        description="A few of the projects i've woked on"
        image={0}
      />

      <Hero />
      <PortfolioSection data={work}/>

    </div>
  );
};

export default Work;

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData });


  const work = await client.getByUID("portfolio", "portfolio");


  return {
    props: { work }, // Will be passed to the page component as props
  };
}
