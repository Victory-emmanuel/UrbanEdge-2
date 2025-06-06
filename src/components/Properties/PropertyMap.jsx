import { useState } from "react";
import { MapPinIcon, XMarkIcon } from "@heroicons/react/24/solid";

const PropertyMap = ({ properties, onPropertySelect }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isMapVisible, setIsMapVisible] = useState(true);

  const handleMarkerClick = (property) => {
    setSelectedProperty(property);
    if (onPropertySelect) {
      onPropertySelect(property);
    }
  };

  const handleClosePreview = () => {
    setSelectedProperty(null);
  };

  const toggleMap = () => {
    setIsMapVisible(!isMapVisible);
  };

  return (
    <div className="relative h-full" data-oid=".w--gn0">
      {/* Map Toggle Button (Mobile) */}
      <div className="md:hidden absolute top-4 right-4 z-10" data-oid="5y_hedd">
        <button
          onClick={toggleMap}
          className="bg-white dark:bg-brown-dark p-2 rounded-full shadow-md"
          aria-label={isMapVisible ? "Hide map" : "Show map"}
          data-oid="ot_3y9k"
        >
          {isMapVisible ? (
            <XMarkIcon
              className="h-5 w-5 text-brown-dark dark:text-beige-light"
              data-oid="8k64.22"
            />
          ) : (
            <MapPinIcon
              className="h-5 w-5 text-brown-dark dark:text-beige-light"
              data-oid="w_90aa_"
            />
          )}
        </button>
      </div>

      {/* Map Container */}
      <div
        className={`h-full w-full bg-beige-medium dark:bg-brown rounded-lg overflow-hidden ${
          isMapVisible ? "block" : "hidden md:block"
        }`}
        data-oid="17ud6pm"
      >
        {/* This would be replaced with an actual map component like Google Maps or Mapbox */}
        <div
          className="h-full w-full flex items-center justify-center bg-beige-light dark:bg-brown p-4 relative"
          data-oid="edmx9k_"
        >
          <div className="text-center" data-oid="mz82kkv">
            <p
              className="text-brown-dark dark:text-beige-light mb-2"
              data-oid="a9db9y1"
            >
              Map Component Placeholder
            </p>
            <p
              className="text-sm text-brown dark:text-beige-medium"
              data-oid="x057yfk"
            >
              In a real implementation, this would be replaced with a Google
              Maps or Mapbox component
            </p>
          </div>

          {/* Property Markers (Simplified for Placeholder) */}
          <div className="absolute inset-0" data-oid="4bf_n0k">
            {properties.map((property) => (
              <button
                key={property.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                }}
                onClick={() => handleMarkerClick(property)}
                aria-label={`View ${property.title}`}
                data-oid="ekjmc1d"
              >
                <MapPinIcon
                  className={`h-8 w-8 ${
                    selectedProperty?.id === property.id
                      ? "text-taupe"
                      : "text-brown-dark dark:text-beige-light"
                  }`}
                  data-oid="-ki4-wg"
                />
              </button>
            ))}
          </div>

          {/* Property Preview */}
          {selectedProperty && (
            <div
              className="absolute bottom-4 left-4 right-4 bg-white dark:bg-brown-dark rounded-lg shadow-lg p-4 max-w-md mx-auto"
              data-oid="5esmrbq"
            >
              <button
                onClick={handleClosePreview}
                className="absolute top-2 right-2 text-brown-dark dark:text-beige-light"
                aria-label="Close preview"
                data-oid="qw2_mum"
              >
                <XMarkIcon className="h-5 w-5" data-oid="84gq6r0" />
              </button>
              <div className="flex" data-oid="rild3f6">
                <img
                  src={selectedProperty.imageUrl}
                  alt={selectedProperty.title}
                  className="w-24 h-24 object-cover rounded-md mr-4"
                  data-oid="srgkzhr"
                />

                <div data-oid="pilv98:">
                  <h3
                    className="font-heading font-bold text-brown-dark dark:text-beige-light"
                    data-oid="-impxrk"
                  >
                    {selectedProperty.title}
                  </h3>
                  <p
                    className="text-sm text-brown dark:text-beige-medium mb-1"
                    data-oid="b8940so"
                  >
                    {selectedProperty.location}
                  </p>
                  <p className="font-bold text-taupe" data-oid="t:0remg">
                    ${selectedProperty.price.toLocaleString()}
                  </p>
                  <a
                    href={`/properties/${selectedProperty.id}`}
                    className="text-sm text-taupe hover:underline mt-1 inline-block"
                    data-oid="ojrxpqd"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyMap;
