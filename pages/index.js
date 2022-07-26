import Link from "next/link";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import SectionPadding from "../components/SectionPadding/SectionPadding";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <SectionPadding color="black">
        <h1 data-aos="fade-up">awfdas</h1>
      </SectionPadding>
      <SectionPadding color="grey" data-aos="fade-right" data-aos-delay="600">
        <h1 data-aos="fade-up">awfdas</h1>
      </SectionPadding>
    </div>
  );
}
