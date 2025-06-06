import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = ({ className = "" }) => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [propertyType, setPropertyType] = useState("");

  const propertyTypes = [
    { value: "", label: "All Types" },
    { value: "house", label: "House" },
    { value: "apartment", label: "Apartment" },
    { value: "condo", label: "Condo" },
    { value: "townhouse", label: "Townhouse" },
    { value: "land", label: "Land" },
    { value: "commercial", label: "Commercial" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build query parameters
    const params = new URLSearchParams();
    if (location) params.append("location", location);
    if (priceRange[0] > 0) params.append("minPrice", priceRange[0]);
    if (priceRange[1] < 5000000) params.append("maxPrice", priceRange[1]);
    if (propertyType) params.append("type", propertyType);

    // Navigate to properties page with search params
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div
      className={`bg-white dark:bg-brown-dark rounded-lg shadow-lg p-4 md:p-6 ${className}`}
      data-oid="sn405c1"
    >
      <form onSubmit={handleSubmit} data-oid="etaazjw">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
          data-oid="pht20_6"
        >
          {/* Location */}
          <div className="md:col-span-1" data-oid="zcw4xw_">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
              data-oid="-rioupd"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="City, neighborhood, or address"
              className="input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              data-oid="q5cu2ku"
            />
          </div>

          {/* Price Range */}
          <div className="md:col-span-1" data-oid="-gvh.:x">
            <label
              htmlFor="price-range"
              className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
              data-oid="-ydqrf0"
            >
              Price Range
            </label>
            <div className="flex items-center space-x-2" data-oid="c2hxapm">
              <input
                type="number"
                placeholder="Min"
                className="input"
                min="0"
                max={priceRange[1]}
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])
                }
                data-oid="bfg2ydm"
              />

              <span
                className="text-brown-dark dark:text-beige-light"
                data-oid="_u6:syw"
              >
                -
              </span>
              <input
                type="number"
                placeholder="Max"
                className="input"
                min={priceRange[0]}
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([
                    priceRange[0],
                    parseInt(e.target.value) || 5000000,
                  ])
                }
                data-oid="-ctsbxt"
              />
            </div>
          </div>

          {/* Property Type */}
          <div className="md:col-span-1" data-oid="j2pind7">
            <label
              htmlFor="property-type"
              className="block text-sm font-medium text-brown-dark dark:text-beige-light mb-1"
              data-oid="a-qa9j_"
            >
              Property Type
            </label>
            <select
              id="property-type"
              className="input"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              data-oid="uc-bexy"
            >
              {propertyTypes.map((type) => (
                <option key={type.value} value={type.value} data-oid="yg2xz14">
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <div className="md:col-span-1 flex items-end" data-oid="drh5c3v">
            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center"
              data-oid="l_zn.z5"
            >
              <MagnifyingGlassIcon
                className="h-5 w-5 mr-2"
                data-oid="ih-lgcu"
              />
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
