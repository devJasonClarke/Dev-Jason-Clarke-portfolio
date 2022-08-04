import { createClient } from "../prismicio";

import Hero from "@/components/@/Hero/Hero";
import MetaTags from "@/components/@/MetaTags/MetaTags";
import ContactSection from "../components/ContactSection/ContactSection";

const Contact = ({contact}) => {
  return (
    <div>
      <MetaTags
        title="Contact"
        description="Get in touch"
        image={0}
      />

      <Hero  data={contact}/>
      <ContactSection data={contact}/>
    </div>
  );
};

export default Contact;

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData });

  const contact = await client.getByUID("contacts", "contact");

  return {
    props: { contact }, // Will be passed to the page component as props
  };
}
