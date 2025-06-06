import { Helmet } from "react-helmet";
import HeroSection from "../components/Contact/HeroSection";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";
import MapSection from "../components/Contact/MapSection";
import FAQSection from "../components/Contact/FAQSection";

const ContactPage = () => {
  return (
    <>
      <Helmet data-oid="t:75nu.">
        <title data-oid="bh31-xk">Contact Us | UrbanEdge Real Estate</title>
        <meta
          name="description"
          content="Get in touch with UrbanEdge Real Estate. Contact our team of experienced professionals for all your real estate needs, questions, and inquiries."
          data-oid="4d03c2x"
        />
      </Helmet>

      <HeroSection data-oid="wh70-r." />

      <section
        className="py-16 bg-beige-light dark:bg-brown"
        data-oid="f3l3rlc"
      >
        <div className="container mx-auto px-4" data-oid="9aelm8l">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            data-oid="1pb3bdc"
          >
            {/* Contact Form */}
            <div data-oid="jwxf:sg">
              <ContactForm data-oid="h.w5h-l" />
            </div>

            {/* Contact Info */}
            <div data-oid="64zx7sr">
              <ContactInfo data-oid="zi5xkuz" />
            </div>
          </div>

          {/* Map */}
          <MapSection data-oid="ll:3_95" />

          {/* FAQs */}
          <FAQSection data-oid="pcm6nmz" />
        </div>
      </section>
    </>
  );
};

export default ContactPage;
