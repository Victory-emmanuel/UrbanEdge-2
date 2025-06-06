import { motion } from "framer-motion";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const ContactInfo = () => {
  const officeLocations = [
    {
      name: "Headquarters",
      address: "123 Luxury Lane, Beverly Hills, CA 90210",
      phone: "(310) 555-1234",
      email: "info@urbanedge.com",
      hours: "Monday - Friday: 9AM - 6PM\nSaturday: 10AM - 4PM\nSunday: Closed",
    },
    {
      name: "Downtown Office",
      address: "456 Urban Avenue, Los Angeles, CA 90017",
      phone: "(213) 555-5678",
      email: "downtown@urbanedge.com",
      hours:
        "Monday - Friday: 9AM - 6PM\nSaturday: By appointment\nSunday: Closed",
    },
    {
      name: "Malibu Office",
      address: "789 Seaside Drive, Malibu, CA 90265",
      phone: "(424) 555-9012",
      email: "malibu@urbanedge.com",
      hours: "Monday - Friday: 9AM - 6PM\nSaturday: 10AM - 4PM\nSunday: Closed",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      data-oid="u7s9xsy"
    >
      <h2
        className="text-2xl font-heading font-bold mb-6 text-brown-dark dark:text-beige-light"
        data-oid="m9ygop5"
      >
        Our Offices
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        data-oid="j6sui0o"
      >
        {officeLocations.map((office, index) => (
          <div
            key={index}
            className="bg-white dark:bg-brown-dark rounded-lg shadow-lg p-6"
            data-oid="w4grpp6"
          >
            <h3
              className="text-xl font-heading font-bold mb-4 text-brown-dark dark:text-beige-light"
              data-oid="f7yt11z"
            >
              {office.name}
            </h3>

            <div
              className="space-y-4 text-brown dark:text-beige-medium"
              data-oid=":ygpvk8"
            >
              <div className="flex" data-oid="qr98xz6">
                <MapPinIcon
                  className="h-6 w-6 text-taupe flex-shrink-0 mr-3"
                  data-oid="zo2cert"
                />

                <span data-oid="9uu-27u">{office.address}</span>
              </div>

              <div className="flex" data-oid="0rzaq7g">
                <PhoneIcon
                  className="h-6 w-6 text-taupe flex-shrink-0 mr-3"
                  data-oid=":.ymp6r"
                />

                <a
                  href={`tel:${office.phone}`}
                  className="hover:text-taupe transition-colors"
                  data-oid="z9fyr76"
                >
                  {office.phone}
                </a>
              </div>

              <div className="flex" data-oid="wan6bfl">
                <EnvelopeIcon
                  className="h-6 w-6 text-taupe flex-shrink-0 mr-3"
                  data-oid="beefeld"
                />

                <a
                  href={`mailto:${office.email}`}
                  className="hover:text-taupe transition-colors"
                  data-oid="n.is809"
                >
                  {office.email}
                </a>
              </div>

              <div className="flex" data-oid="jy22b36">
                <ClockIcon
                  className="h-6 w-6 text-taupe flex-shrink-0 mr-3"
                  data-oid=":ayv:xw"
                />

                <div className="whitespace-pre-line" data-oid="i2djrwm">
                  {office.hours}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfo;
