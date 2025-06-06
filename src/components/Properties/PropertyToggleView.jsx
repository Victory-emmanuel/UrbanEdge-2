import { Squares2X2Icon, MapIcon } from "@heroicons/react/24/outline";

const PropertyToggleView = ({ view, onViewChange }) => {
  return (
    <div
      className="flex rounded-lg overflow-hidden shadow-md"
      data-oid="6m9xw97"
    >
      <button
        onClick={() => onViewChange("grid")}
        className={`flex items-center justify-center px-4 py-2 ${
          view === "grid"
            ? "bg-taupe text-white"
            : "bg-white dark:bg-brown-dark text-brown-dark dark:text-beige-light"
        }`}
        aria-label="Grid view"
        aria-pressed={view === "grid"}
        data-oid="-m3v.ng"
      >
        <Squares2X2Icon className="h-5 w-5 mr-2" data-oid="khoh3dw" />
        <span className="hidden sm:inline" data-oid="19hr64l">
          Grid
        </span>
      </button>
      <button
        onClick={() => onViewChange("map")}
        className={`flex items-center justify-center px-4 py-2 ${
          view === "map"
            ? "bg-taupe text-white"
            : "bg-white dark:bg-brown-dark text-brown-dark dark:text-beige-light"
        }`}
        aria-label="Map view"
        aria-pressed={view === "map"}
        data-oid="dy6h29-"
      >
        <MapIcon className="h-5 w-5 mr-2" data-oid="ho890_5" />
        <span className="hidden sm:inline" data-oid="3bdrao5">
          Map
        </span>
      </button>
    </div>
  );
};

export default PropertyToggleView;
