import Hero from "../components/Hero/Hero";
import MetaTags from "../components/MetaTags/MetaTags";

const About = () => {
  return (
    <div>
      <MetaTags
        title="About"
        description="I heard you wanted to learn more about me. What do you want to know?"
        image={0}
      />
      <Hero />
      <h1>About</h1>
    </div>
  );
};
export default About;
