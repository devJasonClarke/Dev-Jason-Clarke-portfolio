import Link from "next/link";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import SectionPadding from "../components/SectionPadding/SectionPadding";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <SectionPadding color="grey">
        <h1 data-aos="fade-up">awfdas</h1>
      </SectionPadding>
    </div>
  );
}
