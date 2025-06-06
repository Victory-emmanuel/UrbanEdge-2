import { motion } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const HeroSection = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <section className="relative py-20 md:py-32" data-oid="-.ujghs">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" data-oid="0tn0a1g">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern architecture"
          className="w-full h-full object-cover"
          data-oid="6v5axek"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-brown-dark/90 to-brown/70"
          data-oid="ccsr5.m"
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" data-oid="qtgaz68">
        <div className="max-w-3xl mx-auto text-center" data-oid="bt-cbf4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white"
            data-oid="scouqxb"
          >
            Real Estate Insights
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-beige-light mb-8"
            data-oid="6pg8si4"
          >
            Expert advice, market trends, and inspiration for your real estate
            journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            data-oid="tidf1ki"
          >
            <form
              onSubmit={handleSubmit}
              className="relative max-w-xl mx-auto"
              data-oid="p699f2z"
            >
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full py-3 px-5 pr-12 rounded-full bg-white/90 dark:bg-brown-dark/90 backdrop-blur-sm text-brown-dark dark:text-beige-light focus:outline-none focus:ring-2 focus:ring-taupe"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-oid="z69ym4x"
              />

              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-taupe hover:text-brown dark:hover:text-beige-light transition-colors"
                aria-label="Search"
                data-oid="nbj.b77"
              >
                <MagnifyingGlassIcon className="h-6 w-6" data-oid="z.d8g5a" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
