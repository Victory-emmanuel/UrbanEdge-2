import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const serviceOptions = [
    { value: "", label: "Select a service" },
    { value: "buying", label: "Buying" },
    { value: "selling", label: "Selling" },
    { value: "renting", label: "Renting" },
    { value: "property-management", label: "Property Management" },
    { value: "investment", label: "Investment Advisory" },
    { value: "development", label: "Development Services" },
    { value: "other", label: "Other" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          service: "",
        });
      }, 5000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-brown-dark rounded-lg shadow-lg p-6 md:p-8"
      data-oid="n8ej6j."
    >
      <h2
        className="text-2xl font-heading font-bold mb-6 text-brown-dark dark:text-beige-light"
        data-oid=":.cpjcm"
      >
        Send Us a Message
      </h2>

      {isSubmitted ? (
        <div className="text-center py-8" data-oid="i6r:ebl">
          <div className="text-taupe mb-4" data-oid="ktf6q:b">
            <svg
              className="h-16 w-16 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              data-oid="1a2maab"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                data-oid="7u5-lbm"
              />
            </svg>
          </div>
          <h3
            className="text-xl font-heading font-bold text-brown-dark dark:text-beige-light mb-2"
            data-oid="9g03k45"
          >
            Message Sent!
          </h3>
          <p className="text-brown dark:text-beige-medium" data-oid="dabv0ze">
            Thank you for contacting us. We'll get back to you as soon as
            possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} data-oid="9sn3t5h">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            data-oid="-ne3ns9"
          >
            {/* Name */}
            <div className="md:col-span-1" data-oid="-9a834n">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
                data-oid="w72:jop"
              >
                Your Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`input ${errors.name ? "border-destructive" : ""}`}
                data-oid="a-:ltgo"
              />

              {errors.name && (
                <p className="mt-1 text-sm text-destructive" data-oid="tr:63hk">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="md:col-span-1" data-oid="h6ywcbt">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
                data-oid="e5:8_iq"
              >
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`input ${errors.email ? "border-destructive" : ""}`}
                data-oid="d7fi67w"
              />

              {errors.email && (
                <p className="mt-1 text-sm text-destructive" data-oid="51snr4i">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="md:col-span-1" data-oid="0vzd4xz">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
                data-oid="-vrjye3"
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
                data-oid="9-s1vy:"
              />
            </div>

            {/* Service */}
            <div className="md:col-span-1" data-oid="c:_i277">
              <label
                htmlFor="service"
                className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
                data-oid=":-df-8l"
              >
                Service Interested In*
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className={`input ${errors.service ? "border-destructive" : ""}`}
                data-oid="kzq1ao0"
              >
                {serviceOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    data-oid="q2k09h7"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1 text-sm text-destructive" data-oid="ffay1jw">
                  {errors.service}
                </p>
              )}
            </div>

            {/* Subject */}
            <div className="md:col-span-2" data-oid="n8tzi8z">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
                data-oid="dwxivdh"
              >
                Subject*
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={`input ${errors.subject ? "border-destructive" : ""}`}
                data-oid=":-q6a_0"
              />

              {errors.subject && (
                <p className="mt-1 text-sm text-destructive" data-oid="l55ubtq">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="md:col-span-2" data-oid="_tc27xf">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
                data-oid="hb1xun."
              >
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className={`input ${errors.message ? "border-destructive" : ""}`}
                data-oid="c08r9f7"
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-destructive" data-oid="0es3f3_">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2" data-oid="ku:ylaq">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full flex items-center justify-center ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                data-oid="qlyirv0"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      data-oid="y8duue."
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        data-oid="rqbnsgr"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        data-oid="7tddvkp"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </div>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;
