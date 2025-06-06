import { Helmet } from "react-helmet";
import HeroSection from "../components/Home/HeroSection";
import FeaturedProperties from "../components/Home/FeaturedProperties";
import ValueProposition from "../components/Home/ValueProposition";
import HowItWorks from "../components/Home/HowItWorks";
import Testimonials from "../components/Home/Testimonials";
import BlogTeaser from "../components/Home/BlogTeaser";
import CTASection from "../components/Home/CTASection";

const HomePage = () => {
  return (
    <>
      <Helmet data-oid="0ah2:2i">
        <title data-oid="ogp:k5d">
          UrbanEdge Real Estate | Luxury Properties & Exclusive Listings
        </title>
        <meta
          name="description"
          content="Discover exceptional properties with UrbanEdge Real Estate. We specialize in luxury homes, investment properties, and personalized real estate services."
          data-oid="xlk01ez"
        />
      </Helmet>

      <HeroSection data-oid="eudyxdy" />
      <FeaturedProperties data-oid="rsa3e8f" />
      <ValueProposition data-oid="ism6i.i" />
      <HowItWorks data-oid="2jfw143" />
      <Testimonials data-oid="c31qkcj" />
      <BlogTeaser data-oid=".vb_52q" />
      <CTASection data-oid="ns3b4ol" />
    </>
  );
};

export default HomePage;
