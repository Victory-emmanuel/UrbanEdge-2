import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const PropertyGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative" data-oid="is5..wy">
      {/* Main Image */}
      <div
        className="relative h-[300px] md:h-[500px] overflow-hidden rounded-lg"
        data-oid="yfdy776"
      >
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
          data-oid="d8qv9x5"
        />

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-brown-dark/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-brown-dark transition-colors"
          aria-label="Previous image"
          data-oid="mv824px"
        >
          <ChevronLeftIcon
            className="h-6 w-6 text-brown-dark dark:text-beige-light"
            data-oid="q9h9qwx"
          />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-brown-dark/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-brown-dark transition-colors"
          aria-label="Next image"
          data-oid="9l48b8f"
        >
          <ChevronRightIcon
            className="h-6 w-6 text-brown-dark dark:text-beige-light"
            data-oid="y3plc4v"
          />
        </button>

        {/* Image Counter */}
        <div
          className="absolute bottom-4 right-4 bg-white/80 dark:bg-brown-dark/80 px-3 py-1 rounded-full text-sm text-brown-dark dark:text-beige-light"
          data-oid="pkrlhdy"
        >
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div
        className="mt-4 flex space-x-2 overflow-x-auto pb-2"
        data-oid="q1:58el"
      >
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden ${
              index === currentIndex
                ? "ring-2 ring-taupe"
                : "opacity-70 hover:opacity-100"
            }`}
            aria-label={`View image ${index + 1}`}
            aria-current={index === currentIndex}
            data-oid="yr6qu2t"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              data-oid="lcw79ar"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertyGallery;
