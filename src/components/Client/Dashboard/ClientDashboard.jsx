import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeartIcon, MagnifyingGlassIcon, HomeIcon } from "@heroicons/react/24/outline";
import { favoritesService } from "../../../lib/favoritesService";
import { useAuth } from "../../../contexts/AuthContext";
import PropertyCard from "../../UI/PropertyCard";

/**
 * Client Dashboard component for displaying user's favorite properties
 */
const ClientDashboard = () => {
  const { user } = useAuth();
  const [favoriteProperties, setFavoriteProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favoritesCount, setFavoritesCount] = useState(0);

  // Fetch user's favorite properties on component mount
  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        // Fetch user's favorite properties
        const favoritesResult = await favoritesService.getUserFavorites();
        console.log('Favorites result:', favoritesResult);

        if (favoritesResult.error) {
          console.error('Favorites error:', favoritesResult.error);
          throw favoritesResult.error;
        }

        // Fetch favorites count
        const countResult = await favoritesService.getFavoritesCount();
        console.log('Count result:', countResult);

        if (countResult.error) {
          console.error('Count error:', countResult.error);
          throw countResult.error;
        }

        setFavoriteProperties(favoritesResult.data || []);
        setFavoritesCount(countResult.data || 0);
      } catch (err) {
        console.error("Error fetching favorites:", err);
        setError("Failed to load your favorite properties. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [user]);

  // Refresh favorites when a property is favorited/unfavorited
  const refreshFavorites = async () => {
    if (!user) return;

    try {
      const favoritesResult = await favoritesService.getUserFavorites();
      if (favoritesResult.error) throw favoritesResult.error;

      const countResult = await favoritesService.getFavoritesCount();
      if (countResult.error) throw countResult.error;

      setFavoriteProperties(favoritesResult.data || []);
      setFavoritesCount(countResult.data || 0);
    } catch (err) {
      console.error("Error refreshing favorites:", err);
    }
  };

  // Handle property card favorite toggle callback
  const handleFavoriteToggle = () => {
    // Refresh the favorites list when a property is favorited/unfavorited
    refreshFavorites();
  };

  // Expose test function to window for debugging
  useEffect(() => {
    window.testFavorites = async () => {
      console.log('=== MANUAL FAVORITES TEST ===');
      const result = await favoritesService.testAddFavorite();
      console.log('Manual test result:', result);
      return result;
    };

    return () => {
      delete window.testFavorites;
    };
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-6 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mx-auto mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Show authentication required message if user is not logged in
  if (!user) {
    return (
      <div className="container mx-auto p-6 text-center">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8">
          <HeartIcon className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Sign In to View Your Favorites
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Create an account or sign in to save your favorite properties and access them anytime.
          </p>
          <Link
            to="/auth"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign In / Sign Up
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            My Favorite Properties
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {favoritesCount === 0
              ? "You haven't saved any properties yet"
              : `You have ${favoritesCount} favorite ${favoritesCount === 1 ? 'property' : 'properties'}`
            }
          </p>
        </div>
        <Link
          to="/properties"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
          Browse Properties
        </Link>
      </div>

      {error && (
        <div className="bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-800 text-red-700 dark:text-red-300 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}
      {/* Favorite Properties Grid */}
      {favoriteProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onFavoriteToggle={handleFavoriteToggle}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-12">
            <HeartIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              No Favorite Properties Yet
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
              Start exploring our property listings and save your favorites by clicking the heart icon on any property card.
            </p>
            <Link
              to="/properties"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <HomeIcon className="h-5 w-5 mr-2" />
              Explore Properties
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientDashboard;
