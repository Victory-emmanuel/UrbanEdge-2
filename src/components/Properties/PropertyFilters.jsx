import { useState } from "react";
import { motion } from "framer-motion";
import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const PropertyFilters = ({
  onFilterChange,
  initialFilters,
  filterOptions = {},
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState(
    initialFilters || {
      location: "",
      minPrice: "",
      maxPrice: "",
      minBedrooms: "",
      maxBedrooms: "",
      minBathrooms: "",
      maxBathrooms: "",
      propertyType: "",
      saleType: "",
      features: [],
    },
  );

  // Use dynamic property types from filterOptions or fallback to empty array
  const propertyTypes = [
    { id: "", name: "All Types" },
    ...(filterOptions.propertyTypes || []),
  ];

  // Use dynamic sale types from filterOptions or fallback to empty array
  const saleTypes = [
    { id: "", name: "All Sale Types" },
    ...(filterOptions.saleTypes || []),
  ];

  // Use dynamic features from filterOptions or fallback to empty array
  const features = filterOptions.features || [];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const featureId = parseInt(name);

    const updatedFeatures = checked
      ? [...filters.features, featureId]
      : filters.features.filter((id) => id !== featureId);

    setFilters({ ...filters, features: updatedFeatures });
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const handleResetFilters = () => {
    const resetFilters = {
      location: "",
      minPrice: "",
      maxPrice: "",
      minBedrooms: "",
      maxBedrooms: "",
      minBathrooms: "",
      maxBathrooms: "",
      propertyType: "",
      saleType: "",
      features: [],
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${className}`} data-oid="580erb_">
      {/* Mobile Filter Toggle */}
      <div className="md:hidden mb-4" data-oid="-u96sb2">
        <button
          onClick={toggleFilters}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white dark:bg-brown-dark rounded-lg shadow-md text-brown-dark dark:text-beige-light"
          data-oid="b38.7q_"
        >
          <AdjustmentsHorizontalIcon className="h-5 w-5" data-oid="_2y-rlj" />
          {isOpen ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Filters Panel */}
      <motion.div
        className={`bg-white dark:bg-brown-dark rounded-lg shadow-lg p-5 ${
          isOpen ? "block" : "hidden md:block"
        }`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen || window.innerWidth >= 768 ? 1 : 0,
          height: isOpen || window.innerWidth >= 768 ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        data-oid="g-5b9ci"
      >
        <div
          className="flex justify-between items-center mb-4"
          data-oid="vqa_e:g"
        >
          <h3
            className="text-lg font-heading font-semibold text-brown-dark dark:text-beige-light"
            data-oid="onw_sf5"
          >
            Filters
          </h3>
          <button
            onClick={toggleFilters}
            className="md:hidden text-brown-dark dark:text-beige-light"
            data-oid="e37ljeu"
          >
            <XMarkIcon className="h-5 w-5" data-oid="1cziszf" />
          </button>
        </div>

        <div className="space-y-4" data-oid="d7qz-14">
          {/* Location */}
          <div data-oid="ln6co.c">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
              data-oid=".ausoj3"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="City, neighborhood, or address"
              className="input"
              value={filters.location}
              onChange={handleInputChange}
              data-oid="zuoyykg"
            />
          </div>

          {/* Price Range */}
          <div data-oid="ze97cwu">
            <label
              className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
              data-oid="obp3nbq"
            >
              Price Range
            </label>
            <div className="flex items-center space-x-2" data-oid="hj.thw9">
              <input
                type="number"
                name="minPrice"
                placeholder="Min"
                className="input"
                value={filters.minPrice}
                onChange={handleInputChange}
                data-oid="bfohuwt"
              />

              <span
                className="text-brown-dark dark:text-beige-light"
                data-oid="xv-ik67"
              >
                -
              </span>
              <input
                type="number"
                name="maxPrice"
                placeholder="Max"
                className="input"
                value={filters.maxPrice}
                onChange={handleInputChange}
                data-oid="9c04.sb"
              />
            </div>
          </div>

          {/* Bedrooms & Bathrooms */}
          <div className="grid grid-cols-2 gap-4" data-oid="bps7us:">
            <div data-oid="k:bsjgu">
              <label
                htmlFor="minBedrooms"
                className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
                data-oid="ju0aat_"
              >
                Bedrooms (Min)
              </label>
              <select
                id="minBedrooms"
                name="minBedrooms"
                className="input"
                value={filters.minBedrooms}
                onChange={handleInputChange}
                data-oid="sfuxcfv"
              >
                <option value="" data-oid="bsj980s">
                  Any
                </option>
                <option value="1" data-oid="v3dfh:n">
                  1+
                </option>
                <option value="2" data-oid="s69wpv8">
                  2+
                </option>
                <option value="3" data-oid="z2yt8._">
                  3+
                </option>
                <option value="4" data-oid="1899vz.">
                  4+
                </option>
                <option value="5" data-oid="mgtwqmw">
                  5+
                </option>
              </select>
            </div>
            <div data-oid="8o-:2fi">
              <label
                htmlFor="minBathrooms"
                className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
                data-oid="ja9yk_g"
              >
                Bathrooms (Min)
              </label>
              <select
                id="minBathrooms"
                name="minBathrooms"
                className="input"
                value={filters.minBathrooms}
                onChange={handleInputChange}
                data-oid="4q0j8g0"
              >
                <option value="" data-oid="ji2jx6:">
                  Any
                </option>
                <option value="1" data-oid="-bs:i4y">
                  1+
                </option>
                <option value="2" data-oid=".ribdst">
                  2+
                </option>
                <option value="3" data-oid="6xk10dm">
                  3+
                </option>
                <option value="4" data-oid="megg2v:">
                  4+
                </option>
                <option value="5" data-oid="qdi34_o">
                  5+
                </option>
              </select>
            </div>
          </div>

          {/* Property Type */}
          <div data-oid="bwxo.yw">
            <label
              htmlFor="propertyType"
              className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
              data-oid="0tkfbpk"
            >
              Property Type
            </label>
            <select
              id="propertyType"
              name="propertyType"
              className="input"
              value={filters.propertyType}
              onChange={handleInputChange}
              data-oid="-maypr6"
            >
              {propertyTypes.map((type) => (
                <option key={type.id} value={type.id} data-oid="2.88-qu">
                  {type.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sale Type */}
          <div data-oid="0r4blyi">
            <label
              htmlFor="saleType"
              className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
              data-oid="31xcq-2"
            >
              Sale Type
            </label>
            <select
              id="saleType"
              name="saleType"
              className="input"
              value={filters.saleType}
              onChange={handleInputChange}
              data-oid="w5rtm8f"
            >
              {saleTypes.map((type) => (
                <option key={type.id} value={type.id} data-oid="utwx3pd">
                  {type.name}
                </option>
              ))}
            </select>
          </div>

          {/* Features */}
          <div data-oid="5:3yvq6">
            <p
              className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-2"
              data-oid="blyp_x1"
            >
              Features
            </p>
            <div className="grid grid-cols-2 gap-2" data-oid="jci5l3s">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-center"
                  data-oid="r5hq2yb"
                >
                  <input
                    type="checkbox"
                    id={`feature-${feature.id}`}
                    name={feature.id.toString()}
                    checked={filters.features.includes(feature.id)}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-taupe border-taupe rounded focus:ring-taupe"
                    data-oid="-uqak-b"
                  />

                  <label
                    htmlFor={`feature-${feature.id}`}
                    className="ml-2 text-sm text-brown-dark dark:text-beige-light"
                    data-oid=":m87tjq"
                  >
                    {feature.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-beige-medium dark:border-brown"
            data-oid="_:5zlq3"
          >
            <button
              onClick={handleApplyFilters}
              className="btn-primary flex-1"
              data-oid="8lks7-p"
            >
              Apply Filters
            </button>
            <button
              onClick={handleResetFilters}
              className="btn-outline flex-1"
              data-oid="k4en9dq"
            >
              Reset
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PropertyFilters;
