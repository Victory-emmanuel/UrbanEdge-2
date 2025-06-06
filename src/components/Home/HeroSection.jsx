import { motion } from "framer-motion";
import SearchBar from "../UI/SearchBar";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen min-h-[600px] flex items-center"
      data-oid="amnd58x"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" data-oid="3::1mx.">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury home exterior"
          className="w-full h-full object-cover"
          data-oid="amh_q.4"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-brown-dark/70 to-brown/50"
          data-oid="0p0te0k"
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10" data-oid=":.edp3r">
        <div className="max-w-3xl" data-oid="r8.tdu4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white mb-4"
            data-oid="_.cdeka"
          >
            Find Your Perfect Place to Call Home
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-beige-light text-xl mb-8"
            data-oid="7l79qev"
          >
            Discover exceptional properties in prime locations with UrbanEdge,
            your trusted partner in real estate excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            data-oid="fyik48i"
          >
            <SearchBar
              className="bg-white/95 dark:bg-brown-dark/95 backdrop-blur-sm"
              data-oid="-se.y.b"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
