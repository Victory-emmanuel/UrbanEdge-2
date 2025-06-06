import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDaysIcon, PhoneIcon } from "@heroicons/react/24/outline";

const PropertyContactForm = ({ agent, propertyTitle }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: `I'm interested in ${propertyTitle}. Please contact me with more information.`,
    tourDate: "",
    tourTime: "",
  });
  const [formType, setFormType] = useState("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: `I'm interested in ${propertyTitle}. Please contact me with more information.`,
          tourDate: "",
          tourTime: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div
      className="bg-white dark:bg-brown-dark rounded-lg shadow-lg p-6"
      data-oid="wr1jecz"
    >
      {/* Agent Info */}
      <div className="flex items-center mb-6" data-oid="d_po8on">
        <img
          src={agent.photo}
          alt={agent.name}
          className="w-16 h-16 rounded-full object-cover mr-4"
          data-oid="hw9327c"
        />

        <div data-oid="19a-7h6">
          <h3
            className="font-heading font-bold text-brown-dark dark:text-beige-light"
            data-oid="ta9byf9"
          >
            {agent.name}
          </h3>
          <p
            className="text-brown dark:text-beige-medium text-sm mb-1"
            data-oid="seldsb-"
          >
            {agent.title}
          </p>
          <div className="flex items-center text-taupe" data-oid="e-q87-7">
            <PhoneIcon className="h-4 w-4 mr-1" data-oid="00n.z.q" />
            <a
              href={`tel:${agent.phone}`}
              className="text-sm hover:underline"
              data-oid="2yssgej"
            >
              {agent.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Form Type Tabs */}
      <div
        className="flex mb-6 border-b border-beige-medium dark:border-brown"
        data-oid="uezir39"
      >
        <button
          onClick={() => setFormType("contact")}
          className={`flex-1 py-2 font-medium text-center ${
            formType === "contact"
              ? "text-taupe border-b-2 border-taupe"
              : "text-brown dark:text-beige-medium"
          }`}
          data-oid="3dzmu4b"
        >
          Contact Agent
        </button>
        <button
          onClick={() => setFormType("tour")}
          className={`flex-1 py-2 font-medium text-center ${
            formType === "tour"
              ? "text-taupe border-b-2 border-taupe"
              : "text-brown dark:text-beige-medium"
          }`}
          data-oid="-snul4n"
        >
          Schedule Tour
        </button>
      </div>

      {/* Form */}
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-6"
          data-oid="eqfa6s_"
        >
          <div className="text-taupe mb-4" data-oid="_t5vjok">
            <svg
              className="h-12 w-12 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              data-oid="w6:djoh"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                data-oid="qv8bxf4"
              />
            </svg>
          </div>
          <h3
            className="text-xl font-heading font-bold text-brown-dark dark:text-beige-light mb-2"
            data-oid="38:yd2k"
          >
            {formType === "contact" ? "Message Sent!" : "Tour Scheduled!"}
          </h3>
          <p className="text-brown dark:text-beige-medium" data-oid="d6nobx1">
            {formType === "contact"
              ? `Thank you for your interest. ${agent.name} will contact you shortly.`
              : `Your tour has been scheduled. ${agent.name} will confirm the details soon.`}
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} data-oid="eh10-_:">
          <div className="space-y-4" data-oid="y3xtvbr">
            <div data-oid="bd92bmn">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
                data-oid=".lfyk5o"
              >
                Your Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input"
                required
                data-oid="0rca049"
              />
            </div>

            <div data-oid="ihq5so_">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
                data-oid="ag9d1_n"
              >
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input"
                required
                data-oid="l5vxs.u"
              />
            </div>

            <div data-oid="4oqs:wj">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
                data-oid="jzmdxjp"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="input"
                data-oid="nqp1duo"
              />
            </div>

            {formType === "tour" && (
              <div className="grid grid-cols-2 gap-4" data-oid="jff0d.8">
                <div data-oid="hj_wlxb">
                  <label
                    htmlFor="tourDate"
                    className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
                    data-oid="wlo53cx"
                  >
                    Preferred Date*
                  </label>
                  <input
                    type="date"
                    id="tourDate"
                    name="tourDate"
                    value={formData.tourDate}
                    onChange={handleInputChange}
                    className="input"
                    required={formType === "tour"}
                    data-oid="-6gm_xp"
                  />
                </div>
                <div data-oid="0n01:ag">
                  <label
                    htmlFor="tourTime"
                    className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
                    data-oid="vnpc0oz"
                  >
                    Preferred Time*
                  </label>
                  <select
                    id="tourTime"
                    name="tourTime"
                    value={formData.tourTime}
                    onChange={handleInputChange}
                    className="input"
                    required={formType === "tour"}
                    data-oid="ae1sb.e"
                  >
                    <option value="" data-oid="-d:8qge">
                      Select a time
                    </option>
                    <option value="Morning (9AM-12PM)" data-oid="q2:rvte">
                      Morning (9AM-12PM)
                    </option>
                    <option value="Afternoon (12PM-4PM)" data-oid="j4ttx1f">
                      Afternoon (12PM-4PM)
                    </option>
                    <option value="Evening (4PM-7PM)" data-oid="u0_f5de">
                      Evening (4PM-7PM)
                    </option>
                  </select>
                </div>
              </div>
            )}

            <div data-oid="zs9dyet">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
                data-oid="dj1iz3p"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="input"
                data-oid="d96qo74"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary w-full flex items-center justify-center ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
              data-oid="xvqdtnk"
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  data-oid="0pj2hs2"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    data-oid=".rvskop"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    data-oid="m7_6ad3"
                  ></path>
                </svg>
              ) : formType === "tour" ? (
                <CalendarDaysIcon className="h-5 w-5 mr-2" data-oid="27.9v4x" />
              ) : (
                <></>
              )}
              {formType === "contact" ? "Send Message" : "Schedule Tour"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PropertyContactForm;
