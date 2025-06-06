import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32" data-oid="lt6shy4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" data-oid="_1zpics">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
          alt="Modern luxury interior"
          className="w-full h-full object-cover"
          data-oid="_9v1lyg"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-brown-dark/90 to-brown/70"
          data-oid="l4zr49-"
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" data-oid="s9eya_5">
        <div className="max-w-3xl mx-auto text-center" data-oid="8t.56uv">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white"
            data-oid="udr:9ft"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-beige-light mb-8"
            data-oid="xtqn3gu"
          >
            We're here to answer your questions and help you with all your real
            estate needs.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
