import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  HeartIcon,
  ArrowLeftIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { propertyService } from "../lib/propertyService";

import PropertyGallery from "../components/Properties/PropertyDetail/PropertyGallery";
import PropertyFeatures from "../components/Properties/PropertyDetail/PropertyFeatures";
import PropertyTabs from "../components/Properties/PropertyDetail/PropertyTabs";
import PropertyContactForm from "../components/Properties/PropertyDetail/PropertyContactForm";
import PropertyMortgageCalculator from "../components/Properties/PropertyDetail/PropertyMortgageCalculator";
import SimilarProperties from "../components/Properties/PropertyDetail/SimilarProperties";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [similarProperties, setSimilarProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch property details
        const { data, error } = await propertyService.getPropertyById(
          parseInt(id),
        );

        if (error) {
          throw new Error(error.message || "Failed to fetch property details");
        }

        if (!data) {
          throw new Error("Property not found");
        }

        setProperty(data);

        // Fetch similar properties based on property type
        if (data.property_type_id) {
          const similarParams = {
            property_type_ids: [data.property_type_id],
            limit_val: 4,
            offset_val: 0,
            exclude_property_id: parseInt(id),
          };

          const { data: similarData } =
            await propertyService.getProperties(similarParams);
          if (similarData && similarData.properties) {
            setSimilarProperties(similarData.properties);
          }
        }
      } catch (err) {
        console.error("Error fetching property details:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPropertyDetails();
    }
  }, [id]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // In a real app, you would call an API to save the favorite status
  };

  const handleShare = () => {
    // In a real app, this would open a share dialog
    navigator.share
      ? navigator
          .share({
            title: property.title,
            text: `Check out this property: ${property.title}`,
            url: window.location.href,
          })
          .catch((err) => console.error("Share failed:", err))
      : alert("Share functionality not supported in this browser");
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12" data-oid="ifo6ork">
        <div className="animate-pulse" data-oid="yj:a6_g">
          <div
            className="h-[500px] bg-beige-medium dark:bg-brown rounded-lg mb-8"
            data-oid="xfgn1vn"
          ></div>
          <div
            className="h-8 bg-beige-medium dark:bg-brown rounded w-3/4 mb-4"
            data-oid="ylkx0de"
          ></div>
          <div
            className="h-6 bg-beige-medium dark:bg-brown rounded w-1/2 mb-8"
            data-oid="2_sqg7b"
          ></div>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="hw1_tg0"
          >
            <div className="md:col-span-2" data-oid="ihhvjv3">
              <div
                className="h-40 bg-beige-medium dark:bg-brown rounded mb-8"
                data-oid="6b4imak"
              ></div>
              <div
                className="h-80 bg-beige-medium dark:bg-brown rounded"
                data-oid="u.djikf"
              ></div>
            </div>
            <div
              className="h-96 bg-beige-medium dark:bg-brown rounded"
              data-oid="otpbcsd"
            ></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div
        className="container mx-auto px-4 py-12 text-center"
        data-oid="1n39_4q"
      >
        <h2
          className="text-2xl font-heading font-bold text-brown-dark dark:text-beige-light mb-4"
          data-oid="7znd5tx"
        >
          {error || "Property Not Found"}
        </h2>
        <p
          className="text-brown dark:text-beige-medium mb-6"
          data-oid="mvio18i"
        >
          The property you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/properties" className="btn-primary" data-oid="888_.k3">
          Browse Properties
        </Link>
      </div>
    );
  }

  // Extract features and amenities from property data
  const propertyFeatures = {
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
    area: property.square_feet,
    yearBuilt: property.year_built,
    propertyType: property.property_type?.name,
  };

  // Convert features array to expected format for PropertyFeatures component
  const amenities =
    property.features?.map((feature) =>
      feature.name.toLowerCase().replace(/\s+/g, ""),
    ) || [];

  return (
    <>
      <Helmet data-oid="ep3z:5s">
        <title data-oid="k9k.nx8">
          {property.title} | UrbanEdge Real Estate
        </title>
        <meta
          name="description"
          content={`${property.title} - ${property.location}. ${property.bedrooms} bedrooms, ${property.bathrooms} bathrooms, ${property.square_feet} sqft. Offered at $${property.price?.toLocaleString() || "N/A"}.`}
          data-oid="h--5rqc"
        />
      </Helmet>

      <div className="bg-beige-light dark:bg-brown" data-oid="3g7.n39">
        <div className="container mx-auto px-4 py-12" data-oid="c0q60x4">
          {/* Back Button */}
          <div className="mb-6" data-oid="u.566s5">
            <Link
              to="/properties"
              className="inline-flex items-center text-brown-dark dark:text-beige-light hover:text-taupe dark:hover:text-beige-medium transition-colors"
              data-oid="fxv4za0"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" data-oid="1f4s0b2" />
              Back to Properties
            </Link>
          </div>

          {/* Property Gallery */}
          <div className="mb-8" data-oid="3kts7aa">
            <PropertyGallery
              images={property.images?.map((img) => ({
                url: img.url,
                alt: property.title,
              }))}
              data-oid=":8.b8_5"
            />
          </div>

          {/* Property Header */}
          <div className="mb-8" data-oid="bh6l35r">
            <div
              className="flex flex-wrap items-start justify-between gap-4"
              data-oid="ythmn9g"
            >
              <div data-oid="96aabel">
                <h1
                  className="text-3xl md:text-4xl font-heading font-bold text-brown-dark dark:text-beige-light mb-2"
                  data-oid="e8_o8f1"
                >
                  {property.title}
                </h1>
                <p
                  className="text-lg text-brown dark:text-beige-medium mb-2"
                  data-oid="a0c4n5g"
                >
                  {property.location}
                </p>
                <p
                  className="text-2xl font-heading font-bold text-taupe"
                  data-oid="siypejz"
                >
                  ${property.price?.toLocaleString() || "N/A"}
                </p>
              </div>
              <div className="flex space-x-3" data-oid="nk3lkkx">
                <button
                  onClick={toggleFavorite}
                  className="p-3 bg-white dark:bg-brown-dark rounded-full shadow-md hover:shadow-lg transition-shadow"
                  aria-label={
                    isFavorite ? "Remove from favorites" : "Add to favorites"
                  }
                  data-oid="2dv-2lf"
                >
                  {isFavorite ? (
                    <HeartIconSolid
                      className="h-6 w-6 text-destructive"
                      data-oid="n7occkq"
                    />
                  ) : (
                    <HeartIcon
                      className="h-6 w-6 text-brown-dark dark:text-beige-light"
                      data-oid="0hek66t"
                    />
                  )}
                </button>
                <button
                  onClick={handleShare}
                  className="p-3 bg-white dark:bg-brown-dark rounded-full shadow-md hover:shadow-lg transition-shadow"
                  aria-label="Share property"
                  data-oid="y9nfdcs"
                >
                  <ShareIcon
                    className="h-6 w-6 text-brown-dark dark:text-beige-light"
                    data-oid="3r8i8pa"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Property Features */}
          <div className="mb-12" data-oid="5_a5b7b">
            <PropertyFeatures
              features={propertyFeatures}
              amenities={amenities}
              data-oid="2-c0l8h"
            />
          </div>

          {/* Main Content */}
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            data-oid="sz1v6ld"
          >
            {/* Left Column - Property Details */}
            <div className="lg:col-span-2" data-oid="ombi0h0">
              <PropertyTabs
                property={{
                  description: property.description,
                  floorPlans: property.floor_plan_url
                    ? [
                        {
                          name: "Floor Plan",
                          imageUrl: property.floor_plan_url,
                          size: property.square_feet,
                          bedrooms: property.bedrooms,
                          bathrooms: property.bathrooms,
                        },
                      ]
                    : [],
                  neighborhood: {
                    description:
                      property.neighborhood ||
                      "Neighborhood information not available.",
                    nearbyPlaces: [],
                  },
                  reviews: [],
                }}
                data-oid="5mj08af"
              />
            </div>

            {/* Right Column - Contact Form & Mortgage Calculator */}
            <div className="space-y-8" data-oid="5n7al72">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                data-oid="hlay-6f"
              >
                <PropertyContactForm
                  agent={
                    property.agent || {
                      name: "UrbanEdge Agent",
                      title: "Real Estate Agent",
                      phone: "(555) 123-4567",
                      email: "contact@urbanedge.com",
                      photo:
                        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                    }
                  }
                  propertyTitle={property.title}
                  data-oid="_qnyyg."
                />
              </motion.div>

              <PropertyMortgageCalculator
                propertyPrice={property.price}
                data-oid="k7-_p1e"
              />
            </div>
          </div>

          {/* Similar Properties */}
          {similarProperties.length > 0 && (
            <SimilarProperties
              properties={similarProperties}
              data-oid="zkmnqgo"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default PropertyDetailPage;
