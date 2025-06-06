import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { propertyService } from "../../../lib/propertyService";
import { userService } from "../../../lib/userService";

/**
 * Admin Dashboard component
 * Provides property and user management for administrators
 */
const AdminDashboard = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();

  const [properties, setProperties] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("properties");

  // Redirect non-admin users
  useEffect(() => {
    if (user && !isAdmin) {
      navigate("/");
    }
  }, [user, isAdmin, navigate]);

  // Fetch data based on active tab
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (activeTab === "properties") {
          const { data, error } = await propertyService.getProperties();
          if (error) throw error;
          setProperties(data || []);
        } else if (activeTab === "users") {
          const { data, error } = await userService.getAllUsers();
          if (error) throw error;
          setUsers(data || []);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (user && isAdmin) {
      fetchData();
    }
  }, [activeTab, user, isAdmin]);

  // Handle property deletion
  const handleDeleteProperty = async (id) => {
    if (!window.confirm("Are you sure you want to delete this property?"))
      return;

    try {
      const { error } = await propertyService.deleteProperty(id);
      if (error) throw error;

      // Update the properties list
      setProperties(properties.filter((property) => property.id !== id));
    } catch (err) {
      console.error("Error deleting property:", err);
      setError(err.message);
    }
  };

  // Handle toggling user admin status
  const handleToggleAdminStatus = async (userId, currentStatus) => {
    try {
      const { error } = await userService.setUserAdminStatus(
        userId,
        !currentStatus,
      );
      if (error) throw error;

      // Update the users list
      setUsers(
        users.map((user) => {
          if (user.id === userId) {
            return { ...user, is_admin: !currentStatus };
          }
          return user;
        }),
      );
    } catch (err) {
      console.error("Error updating user admin status:", err);
      setError(err.message);
    }
  };

  if (!user) {
    return (
      <div className="p-8 text-center" data-oid="6diq4r9">
        Please log in to access this page.
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="p-8 text-center" data-oid="e477ror">
        You do not have permission to access this page.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6" data-oid="lq-x0u7">
      <h1 className="text-3xl font-bold mb-6" data-oid="n.zlorb">
        Admin Dashboard
      </h1>

      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
          data-oid="s3-jz:f"
        >
          {error}
        </div>
      )}

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6" data-oid="3s.kcs6">
        <nav className="-mb-px flex space-x-8" data-oid="roxb2-m">
          <button
            onClick={() => setActiveTab("properties")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "properties" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
            data-oid="0:5nk7-"
          >
            Properties
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "users" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
            data-oid="5tsi4m4"
          >
            Users
          </button>
        </nav>
      </div>

      {/* Properties Tab */}
      {activeTab === "properties" && (
        <div data-oid="7m5v63m">
          <div
            className="flex justify-between items-center mb-6"
            data-oid="ga-9doz"
          >
            <h2 className="text-xl font-semibold" data-oid="6_8mu8a">
              Property Management
            </h2>
            <button
              onClick={() => navigate("/admin/properties/new")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              data-oid="ko_92l0"
            >
              Add New Property
            </button>
          </div>

          {loading ? (
            <div className="text-center py-8" data-oid="vryq3si">
              Loading properties...
            </div>
          ) : properties.length === 0 ? (
            <div className="text-center py-8" data-oid="o_hu_t9">
              No properties found.
            </div>
          ) : (
            <div className="overflow-x-auto" data-oid="k_lw969">
              <table
                className="min-w-full bg-white border border-gray-200"
                data-oid="wxt:0ak"
              >
                <thead data-oid="_wkcn-0">
                  <tr data-oid=".c1.i6l">
                    <th
                      className="py-3 px-4 border-b text-left"
                      data-oid="d0u4m1n"
                    >
                      Title
                    </th>
                    <th
                      className="py-3 px-4 border-b text-left"
                      data-oid="k0dw:3j"
                    >
                      Location
                    </th>
                    <th
                      className="py-3 px-4 border-b text-left"
                      data-oid="ck:x9da"
                    >
                      Price
                    </th>
                    <th
                      className="py-3 px-4 border-b text-left"
                      data-oid="_ou6at6"
                    >
                      Type
                    </th>
                    <th
                      className="py-3 px-4 border-b text-left"
                      data-oid="k:55q2b"
                    >
                      Sale Type
                    </th>
                    <th
                      className="py-3 px-4 border-b text-left"
                      data-oid="5vpdvah"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody data-oid="5q.m_16">
                  {properties.map((property) => (
                    <tr
                      key={property.id}
                      className="hover:bg-gray-50"
                      data-oid="5f1efu_"
                    >
                      <td className="py-3 px-4 border-b" data-oid="euunum0">
                        {property.title}
                      </td>
                      <td className="py-3 px-4 border-b" data-oid="7rqchmg">
                        {property.location}
                      </td>
                      <td className="py-3 px-4 border-b" data-oid="l917059">
                        ${property.price.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 border-b" data-oid="k7120ao">
                        {property.property_type?.name}
                      </td>
                      <td className="py-3 px-4 border-b" data-oid="8qhvinf">
                        {property.sale_type?.name}
                      </td>
                      <td className="py-3 px-4 border-b" data-oid="e117r:s">
                        <div className="flex space-x-2" data-oid="ev3fugz">
                          <button
                            onClick={() =>
                              navigate(`/admin/properties/edit/${property.id}`)
                            }
                            className="text-blue-500 hover:text-blue-700"
                            data-oid="jarmwi3"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteProperty(property.id)}
                            className="text-red-500 hover:text-red-700"
                            data-oid="wx_z871"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() =>
                              navigate(`/properties/${property.id}`)
                            }
                            className="text-green-500 hover:text-green-700"
                            data-oid="e97m24j"
                          >
                            View
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Users Tab */}
      {activeTab === "users" && (
        <div data-oid="-0cdig4">
          <h2 className="text-xl font-semibold mb-6" data-oid="-md749j">
            User Management
          </h2>

          {loading ? (
            <div className="text-center py-8" data-oid="az5jg_e">
              Loading users...
            </div>
          ) : users.length === 0 ? (
            <div className="text-center py-8" data-oid="3u:ml.k">
              No users found.
            </div>
          ) : (
            <div className="overflow-x-auto" data-oid="jib4wdb">
              <table
                className="min-w-full bg-white border border-gray-200"
                data-oid="fb0kkq."
              >
                <thead data-oid="5o8nx3o">
                  <tr data-oid="zut0w5o">
                    <th
                      className="py-3 px-4 border-b text-left"
                      data-oid=":fkh5xu"
                    >
                      Email
                    </th>
                    <th
                      className="py-3 px-4 border-b text-left"
                      data-oid="rtsc8l2"
                    >
                      Admin Status
                    </th>
                    <th
                      className="py-3 px-4 border-b text-left"
                      data-oid="giuug5p"
                    >
                      Created At
                    </th>
                    <th
                      className="py-3 px-4 border-b text-left"
                      data-oid="yngr1:8"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody data-oid="32dp7ob">
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-gray-50"
                      data-oid="oodgc2d"
                    >
                      <td className="py-3 px-4 border-b" data-oid="47ryf1j">
                        {user.email}
                      </td>
                      <td className="py-3 px-4 border-b" data-oid="0okgs-e">
                        <span
                          className={`px-2 py-1 rounded text-xs ${user.is_admin ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                          data-oid="hhh::ar"
                        >
                          {user.is_admin ? "Admin" : "User"}
                        </span>
                      </td>
                      <td className="py-3 px-4 border-b" data-oid="qdm5zde">
                        {new Date(user.created_at).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4 border-b" data-oid="tmb9eq8">
                        <button
                          onClick={() =>
                            handleToggleAdminStatus(user.id, user.is_admin)
                          }
                          className={`px-3 py-1 rounded text-white ${user.is_admin ? "bg-orange-500 hover:bg-orange-600" : "bg-blue-500 hover:bg-blue-600"}`}
                          data-oid="vy-3o-t"
                        >
                          {user.is_admin ? "Remove Admin" : "Make Admin"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
