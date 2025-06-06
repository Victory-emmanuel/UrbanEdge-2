import { Helmet } from "react-helmet";
import HeroSection from "../components/Services/HeroSection";
import ServicesGrid from "../components/Services/ServicesGrid";
import ProcessSection from "../components/Services/ProcessSection";
import TestimonialsSection from "../components/Services/TestimonialsSection";
import FAQSection from "../components/Services/FAQSection";
import CTASection from "../components/Services/CTASection";

const ServicesPage = () => {
  return (
    <>
      <Helmet data-oid="pra223x">
        <title data-oid="0-yibml">Our Services | UrbanEdge Real Estate</title>
        <meta
          name="description"
          content="Discover UrbanEdge Real Estate's comprehensive services including buying, selling, property management, investment advisory, and development services."
          data-oid="j7943bw"
        />
      </Helmet>

      <HeroSection data-oid="tz1y096" />
      <ServicesGrid data-oid="1dd2fwx" />
      <ProcessSection data-oid="e7--18i" />
      <TestimonialsSection data-oid="abnyr_r" />
      <FAQSection data-oid="xxd3:gy" />
      <CTASection data-oid="ubd1qv1" />
    </>
  );
};

export default ServicesPage;
