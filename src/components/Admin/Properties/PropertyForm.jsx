import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { propertyService } from "../../../lib/propertyService";
import { useAuth } from "../../../contexts/AuthContext";

/**
 * Property Form component for creating and editing properties
 */
const PropertyForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const isEditMode = Boolean(id);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [saleTypes, setSaleTypes] = useState([]);
  const [features, setFeatures] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [images, setImages] = useState([]);
  const [newImageUrl, setNewImageUrl] = useState("");

  // Redirect non-admin users
  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
  }, [isAdmin, navigate]);

  // Fetch property types, sale types, and features
  useEffect(() => {
    const fetchReferenceData = async () => {
      try {
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
      } catch (err) {
        console.error("Error fetching reference data:", err);
        setError("Failed to load form data. Please try again.");
      }
    };

    fetchReferenceData();
  }, []);

  // Fetch property data if in edit mode
  useEffect(() => {
    const fetchProperty = async () => {
      if (!isEditMode) return;

      setLoading(true);
      setError(null);

      try {
        const { data, error } = await propertyService.getPropertyById(id);
        if (error) throw error;
        if (!data) throw new Error("Property not found");

        // Set form values
        setValue("title", data.title);
        setValue("location", data.location);
        setValue("price", data.price);
        setValue("bedrooms", data.bedrooms);
        setValue("bathrooms", data.bathrooms);
        setValue("squareFeet", data.square_feet);
        setValue("description", data.description || "");
        setValue("floorPlanUrl", data.floor_plan_url || "");
        setValue("neighborhood", data.neighborhood || "");
        setValue("propertyTypeId", data.property_type_id);
        setValue("saleTypeId", data.sale_type_id);

        // Set images
        if (data.property_images) {
          setImages(
            data.property_images.map((img) => ({
              id: img.id,
              url: img.image_url,
              order: img.order,
            })),
          );
        }

        // Set features
        if (data.property_features) {
          const featureIds = data.property_features
            .map((pf) => pf.feature?.id)
            .filter(Boolean);
          setSelectedFeatures(featureIds);
        }
      } catch (err) {
        console.error("Error fetching property:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id, isEditMode, setValue]);

  // Handle form submission
  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const propertyData = {
        ...data,
        images: images,
        features: selectedFeatures,
      };

      let result;
      if (isEditMode) {
        result = await propertyService.updateProperty(id, propertyData);
      } else {
        result = await propertyService.createProperty(propertyData);
      }

      if (result.error) throw result.error;

      // Redirect to admin dashboard
      navigate("/admin/dashboard");
    } catch (err) {
      console.error("Error saving property:", err);
      setError(err.message);
      setLoading(false);
    }
  };

  // Handle adding a new image
  const handleAddImage = () => {
    if (!newImageUrl.trim()) return;

    setImages([
      ...images,
      {
        url: newImageUrl,
        order: images.length,
      },
    ]);
    setNewImageUrl("");
  };

  // Handle removing an image
  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  // Handle feature selection
  const handleFeatureToggle = (featureId) => {
    setSelectedFeatures((prev) => {
      if (prev.includes(featureId)) {
        return prev.filter((id) => id !== featureId);
      } else {
        return [...prev, featureId];
      }
    });
  };

  if (loading && isEditMode) {
    return (
      <div className="container mx-auto p-6 text-center" data-oid="bxud9vk">
        Loading property data...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6" data-oid=".68lknm">
      <h1 className="text-3xl font-bold mb-6" data-oid="x0ucs6j">
        {isEditMode ? "Edit Property" : "Add New Property"}
      </h1>

      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
          data-oid="alwd98u"
        >
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
        data-oid="zgy7v87"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="-2sm12p"
        >
          {/* Basic Information */}
          <div className="space-y-4" data-oid="8kj:f8l">
            <h2 className="text-xl font-semibold" data-oid="0fsm:8y">
              Basic Information
            </h2>

            <div data-oid="tbg5g-x">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="79e092t"
              >
                Title *
              </label>
              <input
                type="text"
                {...register("title", { required: "Title is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                data-oid="y9:m0.a"
              />

              {errors.title && (
                <p className="mt-1 text-sm text-red-600" data-oid="dp-yoao">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div data-oid="00jq0.u">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid=".hceyc_"
              >
                Location *
              </label>
              <input
                type="text"
                {...register("location", { required: "Location is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                data-oid="fgsjvw3"
              />

              {errors.location && (
                <p className="mt-1 text-sm text-red-600" data-oid="eqaa_:p">
                  {errors.location.message}
                </p>
              )}
            </div>

            <div data-oid="y7xayhd">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="qgfdod9"
              >
                Neighborhood
              </label>
              <input
                type="text"
                {...register("neighborhood")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                data-oid="wlqw:nb"
              />
            </div>

            <div data-oid="_9l8tbh">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="ldh4ow3"
              >
                Price ($) *
              </label>
              <input
                type="number"
                {...register("price", {
                  required: "Price is required",
                  min: { value: 0, message: "Price must be positive" },
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                data-oid="w1fkzbj"
              />

              {errors.price && (
                <p className="mt-1 text-sm text-red-600" data-oid="yk55jxk">
                  {errors.price.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4" data-oid="sk8f1gr">
              <div data-oid="1s049:m">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  data-oid="ddv3:6r"
                >
                  Bedrooms *
                </label>
                <input
                  type="number"
                  {...register("bedrooms", {
                    required: "Required",
                    min: { value: 0, message: "Min 0" },
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  data-oid="ib5rxf."
                />

                {errors.bedrooms && (
                  <p className="mt-1 text-sm text-red-600" data-oid="lm6obo_">
                    {errors.bedrooms.message}
                  </p>
                )}
              </div>

              <div data-oid="8-kdnyk">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  data-oid="po_4kem"
                >
                  Bathrooms *
                </label>
                <input
                  type="number"
                  {...register("bathrooms", {
                    required: "Required",
                    min: { value: 0, message: "Min 0" },
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  data-oid="0g3fh9z"
                />

                {errors.bathrooms && (
                  <p className="mt-1 text-sm text-red-600" data-oid="ttemgnv">
                    {errors.bathrooms.message}
                  </p>
                )}
              </div>

              <div data-oid="k14ejm2">
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  data-oid="jzku.36"
                >
                  Square Feet *
                </label>
                <input
                  type="number"
                  {...register("squareFeet", {
                    required: "Required",
                    min: { value: 0, message: "Min 0" },
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  data-oid=":6mc35j"
                />

                {errors.squareFeet && (
                  <p className="mt-1 text-sm text-red-600" data-oid="iq99jv7">
                    {errors.squareFeet.message}
                  </p>
                )}
              </div>
            </div>

            <div data-oid="o4t5vq6">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="824hhd_"
              >
                Property Type *
              </label>
              <select
                {...register("propertyTypeId", {
                  required: "Property type is required",
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                data-oid="kvh4y7o"
              >
                <option value="" data-oid="-vpu5q1">
                  Select a property type
                </option>
                {propertyTypes.map((type) => (
                  <option key={type.id} value={type.id} data-oid="ps_ivyi">
                    {type.name}
                  </option>
                ))}
              </select>
              {errors.propertyTypeId && (
                <p className="mt-1 text-sm text-red-600" data-oid="908v0h-">
                  {errors.propertyTypeId.message}
                </p>
              )}
            </div>

            <div data-oid=".alj_nv">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="ey8x6n."
              >
                Sale Type *
              </label>
              <select
                {...register("saleTypeId", {
                  required: "Sale type is required",
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                data-oid="nzt_0a-"
              >
                <option value="" data-oid="p-k3t0m">
                  Select a sale type
                </option>
                {saleTypes.map((type) => (
                  <option key={type.id} value={type.id} data-oid="wqp7g.8">
                    {type.name}
                  </option>
                ))}
              </select>
              {errors.saleTypeId && (
                <p className="mt-1 text-sm text-red-600" data-oid="3j471w7">
                  {errors.saleTypeId.message}
                </p>
              )}
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4" data-oid="brnosjn">
            <h2 className="text-xl font-semibold" data-oid="md6a:pq">
              Additional Information
            </h2>

            <div data-oid="g.62e74">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="_69o76u"
              >
                Description
              </label>
              <textarea
                {...register("description")}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                data-oid="zvdets_"
              ></textarea>
            </div>

            <div data-oid="cu1b6kf">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="v2ir70b"
              >
                Floor Plan URL
              </label>
              <input
                type="text"
                {...register("floorPlanUrl")}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                data-oid="w7ik.nr"
              />
            </div>

            <div data-oid="c0vhxbk">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="9sqn4m4"
              >
                Features
              </label>
              <div className="grid grid-cols-2 gap-2" data-oid="dqcu6b4">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className="flex items-center"
                    data-oid="9j8e.lj"
                  >
                    <input
                      type="checkbox"
                      id={`feature-${feature.id}`}
                      checked={selectedFeatures.includes(feature.id)}
                      onChange={() => handleFeatureToggle(feature.id)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      data-oid="n7zqdex"
                    />

                    <label
                      htmlFor={`feature-${feature.id}`}
                      className="ml-2 text-sm text-gray-700"
                      data-oid="wjbyi33"
                    >
                      {feature.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div data-oid="6ivyilh">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                data-oid="-3mhrxo"
              >
                Images
              </label>
              <div className="flex space-x-2 mb-2" data-oid="3p_ubu3">
                <input
                  type="text"
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  placeholder="Enter image URL"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  data-oid="9ez1mwl"
                />

                <button
                  type="button"
                  onClick={handleAddImage}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  data-oid="2x:wdbm"
                >
                  Add
                </button>
              </div>

              {images.length > 0 ? (
                <div className="grid grid-cols-2 gap-4" data-oid="y0bi-ec">
                  {images.map((image, index) => (
                    <div key={index} className="relative" data-oid="xb12dc3">
                      <img
                        src={image.url}
                        alt={`Property ${index + 1}`}
                        className="w-full h-32 object-cover rounded-md"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://via.placeholder.com/150?text=Image+Error";
                        }}
                        data-oid="5gywdj7"
                      />

                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 focus:outline-none"
                        data-oid="0mg1xdh"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500" data-oid="1a8:s1q">
                  No images added yet.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4" data-oid="vnx5o-5">
          <button
            type="button"
            onClick={() => navigate("/admin/dashboard")}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            data-oid="to02lur"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            data-oid="j6vvdr8"
          >
            {loading
              ? "Saving..."
              : isEditMode
                ? "Update Property"
                : "Create Property"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyForm;
