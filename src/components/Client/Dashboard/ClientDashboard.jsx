import { useState, useEffect } from "react";
import { propertyService } from "../../../lib/propertyService";

/**
 * Client Dashboard component for displaying and filtering properties
 */
const ClientDashboard = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter states
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [saleTypes, setSaleTypes] = useState([]);
  const [features, setFeatures] = useState([]);
  const [filters, setFilters] = useState({
    propertyTypeId: "",
    saleTypeId: "",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    minBathrooms: "",
    selectedFeatures: [],
  });

  // Fetch properties and reference data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch reference data
        const [propertyTypesRes, saleTypesRes, featuresRes] = await Promise.all(
          [
            propertyService.getPropertyTypes(),
            propertyService.getSaleTypes(),
            propertyService.getFeatures(),
          ],
        );

        if (propertyTypesRes.error) throw propertyTypesRes.error;
        if (saleTypesRes.error) throw saleTypesRes.error;
        if (featuresRes.error) throw featuresRes.error;

        setPropertyTypes(propertyTypesRes.data || []);
        setSaleTypes(saleTypesRes.data || []);
        setFeatures(featuresRes.data || []);

        // Fetch properties
        await fetchProperties();
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fetch properties with current filters
  const fetchProperties = async () => {
    try {
      const { data, error } = await propertyService.getProperties(filters);
      if (error) throw error;
      setProperties(data || []);
    } catch (err) {
      console.error("Error fetching properties:", err);
      setError("Failed to load properties. Please try again.");
    }
  };

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle feature selection
  const handleFeatureToggle = (featureId) => {
    setFilters((prev) => {
      const selectedFeatures = [...prev.selectedFeatures];

      if (selectedFeatures.includes(featureId)) {
        return {
          ...prev,
          selectedFeatures: selectedFeatures.filter((id) => id !== featureId),
        };
      } else {
        return {
          ...prev,
          selectedFeatures: [...selectedFeatures, featureId],
        };
      }
    });
  };

  // Apply filters
  const applyFilters = (e) => {
    e.preventDefault();
    fetchProperties();
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      propertyTypeId: "",
      saleTypeId: "",
      minPrice: "",
      maxPrice: "",
      minBedrooms: "",
      minBathrooms: "",
      selectedFeatures: [],
    });
    // Fetch properties without filters
    fetchProperties();
  };

  // Format price display
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Get feature names for a property
  const getPropertyFeatures = (property) => {
    if (!property.property_features || !property.property_features.length) {
      return "None";
    }

    return property.property_features
      .map((pf) => pf.feature?.name)
      .filter(Boolean)
      .join(", ");
  };

  // Get primary image for a property
  const getPrimaryImage = (property) => {
    if (!property.property_images || !property.property_images.length) {
      return "https://via.placeholder.com/300x200?text=No+Image";
    }

    // Sort by order and get the first one
    const sortedImages = [...property.property_images].sort(
      (a, b) => a.order - b.order,
    );
    return sortedImages[0].image_url;
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6 text-center" data-oid="c5pnsng">
        <div className="animate-pulse" data-oid="0..prj6">
          <div
            className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-4"
            data-oid="l4j:m8b"
          ></div>
          <div
            className="h-64 bg-gray-200 rounded mb-4"
            data-oid=":yaij3o"
          ></div>
          <div className="h-64 bg-gray-200 rounded" data-oid="-bj.60y"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6" data-oid="j8-imty">
      <h1 className="text-3xl font-bold mb-6 text-center" data-oid="_x3y_ld">
        Find Your Dream Property
      </h1>

      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
          data-oid="73pmf79"
        >
          {error}
        </div>
      )}

      {/* Filters */}
      <div
        className="bg-white shadow-md rounded-lg p-6 mb-8"
        data-oid="hx3kcy7"
      >
        <h2 className="text-xl font-semibold mb-4" data-oid="lcfuat7">
          Filters
        </h2>
        <form onSubmit={applyFilters} data-oid="ejg3u6h">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
            data-oid="l2xti9l"
          >
            {/* Property Type Filter */}
            <div data-oid="by4b06w">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="w_zipmm"
              >
                Property Type
              </label>
              <select
                name="propertyTypeId"
                value={filters.propertyTypeId}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                data-oid="26ka50u"
              >
                <option value="" data-oid="bxr4t6y">
                  All Property Types
                </option>
                {propertyTypes.map((type) => (
                  <option key={type.id} value={type.id} data-oid="1j3s5bl">
                    {type.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sale Type Filter */}
            <div data-oid=".571s1i">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="cz9tc84"
              >
                Sale Type
              </label>
              <select
                name="saleTypeId"
                value={filters.saleTypeId}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                data-oid="6s6h_8q"
              >
                <option value="" data-oid="j_5vx24">
                  All Sale Types
                </option>
                {saleTypes.map((type) => (
                  <option key={type.id} value={type.id} data-oid="w3ziqku">
                    {type.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div className="grid grid-cols-2 gap-2" data-oid="8wvv5ic">
              <div data-oid="vxztj_h">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  data-oid="1aqfuqg"
                >
                  Min Price
                </label>
                <input
                  type="number"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                  placeholder="Min $"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  data-oid="7dz_liv"
                />
              </div>
              <div data-oid="aj:nyf7">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  data-oid="4d19sn2"
                >
                  Max Price
                </label>
                <input
                  type="number"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                  placeholder="Max $"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  data-oid="a5e3mgn"
                />
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
            data-oid="t-zv_dg"
          >
            {/* Bedrooms Filter */}
            <div data-oid="yh.xhsz">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="7l9rzdg"
              >
                Min Bedrooms
              </label>
              <select
                name="minBedrooms"
                value={filters.minBedrooms}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                data-oid="p:7i846"
              >
                <option value="" data-oid="7jicfnu">
                  Any
                </option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num} data-oid="6aq8y0o">
                    {num}+
                  </option>
                ))}
              </select>
            </div>

            {/* Bathrooms Filter */}
            <div data-oid="rjjab38">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="e3nmknw"
              >
                Min Bathrooms
              </label>
              <select
                name="minBathrooms"
                value={filters.minBathrooms}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                data-oid="gh_5vpm"
              >
                <option value="" data-oid="y2zwksk">
                  Any
                </option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num} data-oid="zkljbm8">
                    {num}+
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Features Filter */}
          <div className="mb-4" data-oid="v19:nck">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              data-oid="obg.lt9"
            >
              Features
            </label>
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-2"
              data-oid="06vks-u"
            >
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-center"
                  data-oid="pl21toa"
                >
                  <input
                    type="checkbox"
                    id={`feature-${feature.id}`}
                    checked={filters.selectedFeatures.includes(feature.id)}
                    onChange={() => handleFeatureToggle(feature.id)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    data-oid="unluv:p"
                  />

                  <label
                    htmlFor={`feature-${feature.id}`}
                    className="ml-2 text-sm text-gray-700"
                    data-oid="v22bc05"
                  >
                    {feature.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-4" data-oid="lftz9di">
            <button
              type="button"
              onClick={resetFilters}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              data-oid="o-70aw-"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              data-oid="th2uwyy"
            >
              Apply Filters
            </button>
          </div>
        </form>
      </div>

      {/* Properties Grid */}
      {properties.length > 0 ? (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-oid="o77ygqx"
        >
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              data-oid="cvc1bhv"
            >
              <div className="h-48 overflow-hidden" data-oid="q5xj_6v">
                <img
                  src={getPrimaryImage(property)}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x200?text=No+Image";
                  }}
                  data-oid="hh187yb"
                />
              </div>
              <div className="p-4" data-oid="4blnfma">
                <h3
                  className="text-xl font-semibold mb-2 truncate"
                  data-oid="09q40pa"
                >
                  {property.title}
                </h3>
                <p className="text-gray-600 mb-2" data-oid="-.j7uw4">
                  {property.location}
                </p>
                <p
                  className="text-blue-600 font-bold text-xl mb-2"
                  data-oid="43jj:5h"
                >
                  {formatPrice(property.price)}
                </p>

                <div
                  className="flex justify-between text-gray-500 mb-2"
                  data-oid="hti76gc"
                >
                  <span data-oid="pei2sxk">{property.bedrooms} Beds</span>
                  <span data-oid="3-uyonx">{property.bathrooms} Baths</span>
                  <span data-oid="4dg8-xz">{property.square_feet} sqft</span>
                </div>

                <div className="border-t pt-2 mt-2" data-oid="op5:wbp">
                  <p className="text-sm text-gray-500" data-oid="ta308yt">
                    <span className="font-medium" data-oid="2wjylg5">
                      Type:
                    </span>{" "}
                    {property.property_type?.name || "N/A"}
                  </p>
                  <p className="text-sm text-gray-500" data-oid=":z2q1c3">
                    <span className="font-medium" data-oid="yq4cq9:">
                      Sale Type:
                    </span>{" "}
                    {property.sale_type?.name || "N/A"}
                  </p>
                  <p
                    className="text-sm text-gray-500 truncate"
                    data-oid="jt:6fnx"
                  >
                    <span className="font-medium" data-oid="k0di9sj">
                      Features:
                    </span>{" "}
                    {getPropertyFeatures(property)}
                  </p>
                </div>

                <button
                  className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={() =>
                    (window.location.href = `/properties/${property.id}`)
                  }
                  data-oid="t--8yej"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="text-center py-12 bg-gray-50 rounded-lg"
          data-oid="88z5ke4"
        >
          <h3
            className="text-xl font-medium text-gray-600 mb-2"
            data-oid="b38gj_4"
          >
            No properties found
          </h3>
          <p className="text-gray-500" data-oid="k5z1t:c">
            Try adjusting your filters to see more results.
          </p>
        </div>
      )}
    </div>
  );
};

export default ClientDashboard;
