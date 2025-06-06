import { motion } from "framer-motion";
import SectionHeading from "../UI/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Discover Properties",
    description:
      "Browse our curated selection of premium properties or use our advanced search to find exactly what you're looking for.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80",
  },
  {
    number: "02",
    title: "Connect with an Agent",
    description:
      "Our experienced agents will guide you through the process, arrange viewings, and provide expert advice tailored to your needs.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    number: "03",
    title: "Close the Deal",
    description:
      "From offer to closing, we handle the negotiations, paperwork, and logistics to ensure a smooth and successful transaction.",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-beige-light dark:bg-brown" data-oid="-krrz2m">
      <div className="container mx-auto px-4" data-oid="vuwaw3c">
        <SectionHeading
          title="How It Works"
          subtitle="Our streamlined process makes finding and securing your dream property simple and stress-free."
          centered
          data-oid="rnr.e19"
        />

        <div
          className="mt-8 xs:mt-10 sm:mt-12 space-y-12 xs:space-y-16 md:space-y-24"
          data-oid="p8cbip8"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-6 xs:gap-8 md:gap-12`}
              data-oid="9y:z6jv"
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2"
                data-oid="z-6co4x"
              >
                <div className="relative" data-oid=":gvspdq">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
                    data-oid="v2t_:nx"
                  />

                  <div
                    className="absolute -top-4 xs:-top-6 -left-4 xs:-left-6 bg-taupe text-white text-2xl xs:text-3xl sm:text-4xl font-bold font-heading w-12 h-12 xs:w-16 xs:h-16 flex items-center justify-center rounded-full shadow-lg"
                    data-oid="-2d_qnu"
                  >
                    {step.number}
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2"
                data-oid="l10.snh"
              >
                <h3
                  className="text-xl xs:text-2xl md:text-3xl font-heading font-bold mb-2 xs:mb-4 text-brown-dark dark:text-beige-light"
                  data-oid="flhh1_d"
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm xs:text-base sm:text-lg text-brown dark:text-beige-medium mb-4 xs:mb-6"
                  data-oid="ylys7ae"
                >
                  {step.description}
                </p>
                {index === 0 && (
                  <a
                    href="/properties"
                    className="btn-primary text-xs xs:text-sm sm:text-base"
                    data-oid="w:ufd8e"
                  >
                    Browse Properties
                  </a>
                )}
                {index === 1 && (
                  <a
                    href="/about#team"
                    className="btn-primary text-xs xs:text-sm sm:text-base"
                    data-oid="pmxcrwa"
                  >
                    Meet Our Agents
                  </a>
                )}
                {index === 2 && (
                  <a
                    href="/contact"
                    className="btn-primary text-xs xs:text-sm sm:text-base"
                    data-oid="dcyml:u"
                  >
                    Get Started
                  </a>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
