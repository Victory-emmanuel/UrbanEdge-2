import { motion } from "framer-motion";
import PropertyCard from "../UI/PropertyCard";

const PropertyGrid = ({ properties, loading }) => {
  if (loading) {
    return (
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        data-oid="fzu:se-"
      >
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-beige-medium dark:bg-brown animate-pulse rounded-lg h-96"
            data-oid="y83to08"
          ></div>
        ))}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="text-center py-12" data-oid="6k7cne-">
        <h3
          className="text-xl font-heading font-semibold text-brown-dark dark:text-beige-light mb-2"
          data-oid="jvssv40"
        >
          No properties found
        </h3>
        <p className="text-brown dark:text-beige-medium" data-oid="j9bg0h6">
          Try adjusting your filters to see more results.
        </p>
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      data-oid="sek1zq."
    >
      {properties.map((property, index) => (
        <motion.div
          key={property.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          data-oid="xy3.cd7"
        >
          <PropertyCard property={property} data-oid="vn1xsb_" />
        </motion.div>
      ))}
    </div>
  );
};

export default PropertyGrid;
