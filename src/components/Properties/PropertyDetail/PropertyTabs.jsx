import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PropertyTabs = ({ property }) => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "floorPlan", label: "Floor Plan" },
    { id: "neighborhood", label: "Neighborhood" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <div data-oid="fq0b4:y">
      {/* Tab Navigation */}
      <div
        className="flex overflow-x-auto border-b border-beige-medium dark:border-brown mb-6"
        data-oid="4vz-816"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 font-medium whitespace-nowrap ${
              activeTab === tab.id
                ? "text-taupe border-b-2 border-taupe"
                : "text-brown dark:text-beige-medium hover:text-taupe dark:hover:text-beige-light"
            }`}
            aria-selected={activeTab === tab.id}
            data-oid="57gg81h"
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait" data-oid="blh9_iw">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          data-oid="o6jfdqj"
        >
          {activeTab === "overview" && (
            <div data-oid="08typ6b">
              <h3
                className="text-xl font-heading font-semibold text-brown-dark dark:text-beige-light mb-4"
                data-oid="zxgg:0r"
              >
                Property Description
              </h3>
              <div
                className="space-y-4 text-brown dark:text-beige-medium"
                data-oid="ug4fa13"
              >
                <p data-oid="4w-wgpc">{property.description}</p>
                {property.additionalInfo && (
                  <p data-oid="fhekeg_">{property.additionalInfo}</p>
                )}
              </div>
            </div>
          )}

          {activeTab === "floorPlan" && (
            <div data-oid="3bp4ds8">
              <h3
                className="text-xl font-heading font-semibold text-brown-dark dark:text-beige-light mb-4"
                data-oid="6kgstc_"
              >
                Floor Plans
              </h3>
              {property.floorPlans ? (
                <div className="space-y-6" data-oid="9a089ky">
                  {property.floorPlans.map((plan, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-brown-dark rounded-lg shadow-md overflow-hidden"
                      data-oid="8w66ebc"
                    >
                      <div
                        className="p-4 border-b border-beige-medium dark:border-brown"
                        data-oid=".4446o8"
                      >
                        <h4
                          className="font-heading font-semibold text-brown-dark dark:text-beige-light"
                          data-oid="fake6k:"
                        >
                          {plan.name}
                        </h4>
                        <p
                          className="text-sm text-brown dark:text-beige-medium"
                          data-oid="6uzo20l"
                        >
                          {plan.size} sqft • {plan.bedrooms} Bed •{" "}
                          {plan.bathrooms} Bath
                        </p>
                      </div>
                      <div className="p-4" data-oid="lvpurdz">
                        <img
                          src={plan.imageUrl}
                          alt={`Floor plan for ${plan.name}`}
                          className="w-full h-auto rounded-md"
                          data-oid="neyrwyc"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p
                  className="text-brown dark:text-beige-medium"
                  data-oid="8otamds"
                >
                  Floor plans are not available for this property.
                </p>
              )}
            </div>
          )}

          {activeTab === "neighborhood" && (
            <div data-oid=":td7av2">
              <h3
                className="text-xl font-heading font-semibold text-brown-dark dark:text-beige-light mb-4"
                data-oid="f0c0snu"
              >
                Neighborhood
              </h3>

              {property.neighborhood ? (
                <div className="space-y-6" data-oid="ec32l6v">
                  <p
                    className="text-brown dark:text-beige-medium"
                    data-oid="cscosyi"
                  >
                    {property.neighborhood.description}
                  </p>

                  {/* Map Placeholder */}
                  <div
                    className="bg-beige-light dark:bg-brown h-64 rounded-lg flex items-center justify-center"
                    data-oid="q86z86t"
                  >
                    <p
                      className="text-brown-dark dark:text-beige-light"
                      data-oid="mv43eh4"
                    >
                      Interactive map would be displayed here
                    </p>
                  </div>

                  {/* Nearby Places */}
                  <div data-oid="qpcf-91">
                    <h4
                      className="text-lg font-heading font-semibold text-brown-dark dark:text-beige-light mb-3"
                      data-oid="s_m_ozk"
                    >
                      Nearby Places
                    </h4>
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                      data-oid="fm_l-i9"
                    >
                      {property.neighborhood.nearbyPlaces.map(
                        (place, index) => (
                          <div
                            key={index}
                            className="bg-white dark:bg-brown-dark p-3 rounded-lg shadow-sm"
                            data-oid="-td0srj"
                          >
                            <div
                              className="flex items-center"
                              data-oid="aix.geb"
                            >
                              <div
                                className="text-taupe mr-3"
                                data-oid="phpdrml"
                              >
                                <svg
                                  className="h-5 w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  data-oid="tjpq4a:"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    data-oid="n.gwjgz"
                                  />

                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    data-oid="t_jzjfn"
                                  />
                                </svg>
                              </div>
                              <div data-oid="hh-wgft">
                                <p
                                  className="font-medium text-brown-dark dark:text-beige-light"
                                  data-oid="f5wc.2m"
                                >
                                  {place.name}
                                </p>
                                <p
                                  className="text-sm text-brown dark:text-beige-medium"
                                  data-oid="2rpfh:b"
                                >
                                  {place.type} • {place.distance}
                                </p>
                              </div>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <p
                  className="text-brown dark:text-beige-medium"
                  data-oid="m4t0-f."
                >
                  Neighborhood information is not available for this property.
                </p>
              )}
            </div>
          )}

          {activeTab === "reviews" && (
            <div data-oid="tpr1ymq">
              <h3
                className="text-xl font-heading font-semibold text-brown-dark dark:text-beige-light mb-4"
                data-oid="nkwwy4c"
              >
                Reviews
              </h3>

              {property.reviews && property.reviews.length > 0 ? (
                <div className="space-y-6" data-oid="wrcgb3o">
                  {property.reviews.map((review, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-brown-dark p-4 rounded-lg shadow-md"
                      data-oid="lbt4:he"
                    >
                      <div
                        className="flex items-center mb-3"
                        data-oid="-3zidek"
                      >
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-10 h-10 rounded-full mr-3"
                          data-oid="-9o5nid"
                        />

                        <div data-oid="tl264zi">
                          <p
                            className="font-medium text-brown-dark dark:text-beige-light"
                            data-oid="e0f7dwh"
                          >
                            {review.name}
                          </p>
                          <p
                            className="text-sm text-brown dark:text-beige-medium"
                            data-oid="f2fe4_y"
                          >
                            {review.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-2" data-oid="vaie0zl">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-5 w-5 ${
                              i < review.rating
                                ? "text-taupe"
                                : "text-beige-medium dark:text-brown"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            data-oid="7ytcb71"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              data-oid="eie4h_x"
                            />
                          </svg>
                        ))}
                      </div>
                      <p
                        className="text-brown dark:text-beige-medium"
                        data-oid="hebuttg"
                      >
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p
                  className="text-brown dark:text-beige-medium"
                  data-oid="geya.5v"
                >
                  There are no reviews for this property yet.
                </p>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PropertyTabs;
