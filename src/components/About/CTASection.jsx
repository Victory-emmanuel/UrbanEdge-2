import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 relative" data-oid="reo4foj">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" data-oid="cp3mo2n">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
          alt="Modern office interior"
          className="w-full h-full object-cover"
          data-oid="6f_dbp0"
        />

        <div
          className="absolute inset-0 bg-brown-dark/80"
          data-oid="i8__rfh"
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10" data-oid="2qmda.4">
        <div className="max-w-3xl mx-auto text-center" data-oid="mi-bw6b">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white"
            data-oid="qpd1:9m"
          >
            Ready to Work With Us?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-beige-light mb-10"
            data-oid="pf.rlul"
          >
            Whether you're looking to buy, sell, or invest in real estate, our
            team of experts is here to guide you every step of the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
            data-oid="cb2p_g9"
          >
            <Link to="/properties" className="btn-primary" data-oid="t75lr01">
              Explore Properties
            </Link>
            <Link
              to="/contact"
              className="btn bg-white text-brown-dark hover:bg-beige-light"
              data-oid="ocu5:1z"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
