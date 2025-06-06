import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { propertyService } from "../../../lib/propertyService";

/**
 * Property Detail component for displaying detailed information about a property
 */
const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Fetch property data
  useEffect(() => {
    const fetchProperty = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data, error } = await propertyService.getPropertyById(id);
        if (error) throw error;
        if (!data) throw new Error("Property not found");

        setProperty(data);
      } catch (err) {
        console.error("Error fetching property:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProperty();
    }
  }, [id]);

  // Format price display
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Get sorted images
  const getSortedImages = () => {
    if (!property?.property_images || !property.property_images.length) {
      return [
        { image_url: "https://via.placeholder.com/800x600?text=No+Image" },
      ];
    }

    return [...property.property_images].sort((a, b) => a.order - b.order);
  };

  // Get feature names
  const getFeatures = () => {
    if (!property?.property_features || !property.property_features.length) {
      return [];
    }

    return property.property_features.map((pf) => pf.feature).filter(Boolean);
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6" data-oid="5.yl.j7">
        <div className="animate-pulse" data-oid="wi3-lkp">
          <div
            className="h-8 bg-gray-200 rounded w-1/4 mb-4"
            data-oid="94ra1do"
          ></div>
          <div
            className="h-96 bg-gray-200 rounded mb-4"
            data-oid="1u_.4s:"
          ></div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            data-oid="b:3sa::"
          >
            <div className="h-64 bg-gray-200 rounded" data-oid="i3x9sf5"></div>
            <div className="h-64 bg-gray-200 rounded" data-oid="cx-2gyx"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6" data-oid="hsi:uzp">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
          data-oid="9jb35:3"
        >
          {error}
        </div>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          data-oid="t7leu7o"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (!property) {
    return null;
  }

  const sortedImages = getSortedImages();
  const features = getFeatures();

  return (
    <div className="container mx-auto p-6" data-oid="yls5enu">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center text-blue-500 hover:text-blue-700"
        data-oid="zrjw0.1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
          data-oid="0dwgz3b"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
            data-oid="yl.1qpy"
          />
        </svg>
        Back to Properties
      </button>

      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden"
        data-oid="997dux_"
      >
        {/* Property Title and Price */}
        <div className="p-6 border-b" data-oid="efrz:.c">
          <div
            className="flex flex-col md:flex-row md:justify-between md:items-center"
            data-oid="g8:q_lg"
          >
            <div data-oid="qz.3q6b">
              <h1 className="text-3xl font-bold mb-2" data-oid="4j94faq">
                {property.title}
              </h1>
              <p className="text-gray-600 text-lg" data-oid="p5zrrda">
                {property.location}
              </p>
              {property.neighborhood && (
                <p className="text-gray-500" data-oid="40dvzu6">
                  {property.neighborhood}
                </p>
              )}
            </div>
            <div className="mt-4 md:mt-0" data-oid="8em3v_c">
              <p
                className="text-3xl font-bold text-blue-600"
                data-oid="bb_ixy1"
              >
                {formatPrice(property.price)}
              </p>
              <p className="text-gray-500 text-right" data-oid="b4rfta5">
                {property.sale_type?.name}
              </p>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="p-6" data-oid="5jshesp">
          <div className="mb-4" data-oid="jane682">
            <div
              className="relative h-96 rounded-lg overflow-hidden"
              data-oid="8xr9w.y"
            >
              <img
                src={sortedImages[activeImageIndex]?.image_url}
                alt={`Property ${activeImageIndex + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/800x600?text=Image+Error";
                }}
                data-oid="yqp.5.e"
              />

              {sortedImages.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === 0 ? sortedImages.length - 1 : prev - 1,
                      )
                    }
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
                    data-oid="j_5f5k8"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="-cl-k87"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                        data-oid="a1zg-lr"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === sortedImages.length - 1 ? 0 : prev + 1,
                      )
                    }
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
                    data-oid="-ssj9as"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      data-oid="mu2c0zr"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                        data-oid="ubp4:9u"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>

          {sortedImages.length > 1 && (
            <div
              className="flex space-x-2 overflow-x-auto pb-2"
              data-oid="kie8fzh"
            >
              {sortedImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`cursor-pointer h-20 w-20 flex-shrink-0 rounded-md overflow-hidden border-2 ${index === activeImageIndex ? "border-blue-500" : "border-transparent"}`}
                  data-oid="j9ikysn"
                >
                  <img
                    src={image.image_url}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/100?text=Error";
                    }}
                    data-oid="i1sdjk3"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Property Details */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 border-t"
          data-oid="vh0kmz5"
        >
          <div className="col-span-2" data-oid="89q66iu">
            <h2 className="text-2xl font-semibold mb-4" data-oid="tin-0p9">
              Property Details
            </h2>

            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
              data-oid="7nrnpv_"
            >
              <div
                className="bg-gray-50 p-4 rounded-lg text-center"
                data-oid="s8x09ry"
              >
                <p className="text-gray-500 text-sm" data-oid="fnoi:76">
                  Bedrooms
                </p>
                <p className="text-xl font-semibold" data-oid="p0k-kwv">
                  {property.bedrooms}
                </p>
              </div>
              <div
                className="bg-gray-50 p-4 rounded-lg text-center"
                data-oid="jek8_.."
              >
                <p className="text-gray-500 text-sm" data-oid="h4cjqlc">
                  Bathrooms
                </p>
                <p className="text-xl font-semibold" data-oid="34dnftd">
                  {property.bathrooms}
                </p>
              </div>
              <div
                className="bg-gray-50 p-4 rounded-lg text-center"
                data-oid="v5-uahj"
              >
                <p className="text-gray-500 text-sm" data-oid="xm.6zee">
                  Square Feet
                </p>
                <p className="text-xl font-semibold" data-oid="9818hwy">
                  {property.square_feet}
                </p>
              </div>
              <div
                className="bg-gray-50 p-4 rounded-lg text-center"
                data-oid="7otmuzh"
              >
                <p className="text-gray-500 text-sm" data-oid="uixifmo">
                  Property Type
                </p>
                <p className="text-xl font-semibold" data-oid="7dy6rb3">
                  {property.property_type?.name || "N/A"}
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2" data-oid="hrs5oai">
              Description
            </h3>
            <p
              className="text-gray-700 mb-6 whitespace-pre-line"
              data-oid="lr4lmv0"
            >
              {property.description || "No description provided."}
            </p>

            {property.floor_plan_url && (
              <div className="mb-6" data-oid="jkn896e">
                <h3 className="text-xl font-semibold mb-2" data-oid="jt2h:y.">
                  Floor Plan
                </h3>
                <div
                  className="border rounded-lg overflow-hidden"
                  data-oid="7ew5pyp"
                >
                  <img
                    src={property.floor_plan_url}
                    alt="Floor Plan"
                    className="w-full h-auto"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://via.placeholder.com/800x600?text=Floor+Plan+Not+Available";
                    }}
                    data-oid="n9s0whe"
                  />
                </div>
              </div>
            )}
          </div>

          <div data-oid="0a:hk40">
            <div className="bg-gray-50 p-6 rounded-lg mb-6" data-oid="ejwgfxy">
              <h3 className="text-xl font-semibold mb-4" data-oid="be:g15q">
                Features
              </h3>
              {features.length > 0 ? (
                <ul className="space-y-2" data-oid="qlba7f:">
                  {features.map((feature) => (
                    <li
                      key={feature.id}
                      className="flex items-center"
                      data-oid=":hd8pyf"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        data-oid="m81ox.m"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                          data-oid="9bp1e04"
                        />
                      </svg>
                      {feature.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500" data-oid="tad-y8x">
                  No features listed
                </p>
              )}
            </div>

            <div className="bg-blue-50 p-6 rounded-lg" data-oid="inm5ky5">
              <h3 className="text-xl font-semibold mb-4" data-oid="i57et04">
                Contact Information
              </h3>
              <p className="text-gray-700 mb-4" data-oid="85_povl">
                Interested in this property? Contact us for more information or
                to schedule a viewing.
              </p>
              <button
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() =>
                  (window.location.href =
                    "mailto:contact@urbanedge.com?subject=Inquiry about " +
                    property.title)
                }
                data-oid="d4wlaaa"
              >
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
