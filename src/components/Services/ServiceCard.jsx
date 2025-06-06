import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ service, index }) => {
  const { id, title, description, icon, image, features, cta } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      id={id}
      className="bg-white dark:bg-brown-dark rounded-lg shadow-lg overflow-hidden"
      data-oid="x8ejm22"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden" data-oid="cfj5lld">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          data-oid="i8.i:47"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-brown-dark/70 to-transparent"
          data-oid="gki375r"
        ></div>
        <div className="absolute bottom-0 left-0 p-6" data-oid="uq4f_44">
          <div className="text-white mb-2" data-oid="_twkf2s">
            {icon}
          </div>
          <h3
            className="text-2xl font-heading font-bold text-white"
            data-oid="2lsa03."
          >
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6" data-oid="okg40g1">
        <p
          className="text-brown dark:text-beige-medium mb-6"
          data-oid="v__97-4"
        >
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-6" data-oid="c2j921x">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start" data-oid="01nq5cz">
              <svg
                className="h-5 w-5 text-taupe mt-0.5 mr-3 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="0ht94-u"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                  data-oid="qeze-57"
                />
              </svg>
              <span
                className="text-brown-dark dark:text-beige-light"
                data-oid="56kujwv"
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to={cta.link}
          className="block w-full text-center py-3 bg-taupe text-white hover:bg-brown transition-colors duration-300 rounded-md font-medium"
          data-oid="i-gdvy7"
        >
          {cta.text}
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
