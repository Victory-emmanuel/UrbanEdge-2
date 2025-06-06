import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-12 xs:py-16 sm:py-20 relative" data-oid="vwa1:8a">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" data-oid="rkhcw2r">
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury interior"
          className="w-full h-full object-cover"
          data-oid="t.fxp.h"
        />

        <div
          className="absolute inset-0 bg-brown-dark/80"
          data-oid="is4gvi6"
        ></div>
      </div>

      {/* Content */}
      <div
        className="container mx-auto px-2 xs:px-4 relative z-10"
        data-oid="6jo8k:p"
      >
        <div className="max-w-3xl mx-auto text-center" data-oid=":g9xar4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 xs:mb-4 sm:mb-6 text-white"
            data-oid="ix:548b"
          >
            Ready to Find Your Perfect Property?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm xs:text-base sm:text-lg md:text-xl text-beige-light mb-6 xs:mb-8 sm:mb-10"
            data-oid="sr0quoz"
          >
            Let our expert team guide you through the process and help you
            discover exceptional properties that match your lifestyle and
            investment goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col xs:flex-row justify-center gap-3 xs:gap-4"
            data-oid="cq:e:jc"
          >
            <a
              href="/properties"
              className="btn-primary text-xs xs:text-sm sm:text-base"
              data-oid="n1un35m"
            >
              Browse Properties
            </a>
            <a
              href="/contact"
              className="btn bg-white text-brown-dark hover:bg-beige-light text-xs xs:text-sm sm:text-base"
              data-oid="7_i:eko"
            >
              Contact an Agent
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
