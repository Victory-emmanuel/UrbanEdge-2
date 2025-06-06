import { Helmet } from "react-helmet";
import HeroSection from "../components/About/HeroSection";
import StorySection from "../components/About/StorySection";
import ValuesSection from "../components/About/ValuesSection";
import TeamSection from "../components/About/TeamSection";
import AwardsSection from "../components/About/AwardsSection";
import CTASection from "../components/About/CTASection";

const AboutPage = () => {
  return (
    <>
      <Helmet data-oid="a64hnkg">
        <title data-oid="3tna7km">About Us | UrbanEdge Real Estate</title>
        <meta
          name="description"
          content="Learn about UrbanEdge Real Estate, our team of experienced professionals, our mission, values, and commitment to exceptional service in luxury real estate."
          data-oid="28l7.bo"
        />
      </Helmet>

      <HeroSection data-oid="axz889p" />
      <StorySection data-oid="ixp4meu" />
      <ValuesSection data-oid="djlu.n." />
      <TeamSection data-oid="i4qpc:3" />
      <AwardsSection data-oid="e-f8m1j" />
      <CTASection data-oid="3w6j:0b" />
    </>
  );
};

export default AboutPage;
