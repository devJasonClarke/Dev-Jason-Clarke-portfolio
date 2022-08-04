import { createClient } from "../prismicio";
import AboutSection from "../components/AboutSection/AboutSection";
import Hero from "../components/Hero/Hero";
import MetaTags from "../components/MetaTags/MetaTags";

const About = ({about}) => {
  return (
    <div>
      <MetaTags
        title="About"
        description="I heard you wanted to learn more about me. What do you want to know?"
        image={0}
      />
      <Hero data={about}/>
      <AboutSection data={about}/>
    </div>
  );
};
export default About;

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData });

  const about = await client.getByUID("about", "about");


  return {
    props: { about }, // Will be passed to the page component as props
  };
}