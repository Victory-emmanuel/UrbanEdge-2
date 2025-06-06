import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

// Sample FAQ data
const faqs = [
  {
    question: "How do I schedule a property viewing?",
    answer:
      "You can schedule a property viewing by contacting us through our website, calling our office directly, or emailing the specific agent listed on the property page. We offer both in-person and virtual tours to accommodate your preferences and schedule.",
  },
  {
    question: "What documents do I need to apply for a property?",
    answer:
      "To apply for a property, you'll typically need proof of identity (government-issued ID), proof of income (pay stubs, tax returns, or bank statements), employment verification, rental history, and references. Specific requirements may vary depending on the property and situation.",
  },
  {
    question: "How long does the buying process typically take?",
    answer:
      "The buying process timeline varies depending on several factors, including property type, location, financing, and market conditions. On average, from initial search to closing, the process takes 60-90 days. However, we've helped clients close in as little as 30 days when circumstances require expedited service.",
  },
  {
    question: "What fees are associated with your services?",
    answer:
      "Our fee structure varies by service type. For residential sales, we typically charge a percentage-based commission on the final sale price. Property management services usually involve a monthly fee based on rent collected. Investment advisory and development services may include consultation fees or project-based pricing. We provide transparent fee information during our initial consultation.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we have extensive experience working with international clients on property purchases, sales, and investments. Our team can guide you through the specific requirements and considerations for international transactions, including tax implications and financing options.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-12"
      data-oid="448bpc0"
    >
      <h2
        className="text-2xl font-heading font-bold mb-6 text-brown-dark dark:text-beige-light"
        data-oid="olp0xa6"
      >
        Frequently Asked Questions
      </h2>

      <div className="space-y-4" data-oid="5-57b-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-beige-medium dark:border-brown rounded-lg overflow-hidden"
            data-oid="u1fkgcv"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex justify-between items-center p-4 text-left transition-colors ${
                openIndex === index
                  ? "bg-taupe text-white"
                  : "bg-white dark:bg-brown-dark hover:bg-beige-light dark:hover:bg-brown text-brown-dark dark:text-beige-light"
              }`}
              aria-expanded={openIndex === index}
              data-oid="m:a21n9"
            >
              <span className="font-heading font-semibold" data-oid="sr_ki5t">
                {faq.question}
              </span>
              <ChevronDownIcon
                className={`h-5 w-5 transition-transform ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
                data-oid="u8fpyll"
              />
            </button>

            <AnimatePresence data-oid="m279zlk">
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  data-oid="9i3dekl"
                >
                  <div
                    className="p-4 bg-white dark:bg-brown-dark border-t border-beige-medium dark:border-brown"
                    data-oid="3j7l-ol"
                  >
                    <p
                      className="text-brown dark:text-beige-medium"
                      data-oid="d.0u:6t"
                    >
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQSection;
