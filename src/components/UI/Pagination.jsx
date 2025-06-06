import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Show at most 5 page numbers

    if (totalPages <= maxPagesToShow) {
      // If total pages is less than or equal to maxPagesToShow, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first page
      pageNumbers.push(1);

      // Calculate start and end of page numbers to show
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      // Adjust if we're at the beginning or end
      if (currentPage <= 2) {
        end = Math.min(totalPages - 1, maxPagesToShow - 1);
      } else if (currentPage >= totalPages - 1) {
        start = Math.max(2, totalPages - maxPagesToShow + 2);
      }

      // Add ellipsis if needed before middle pages
      if (start > 2) {
        pageNumbers.push("...");
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      // Add ellipsis if needed after middle pages
      if (end < totalPages - 1) {
        pageNumbers.push("...");
      }

      // Always include last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const handlePageClick = (page) => {
    if (page !== currentPage && page !== "...") {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  if (totalPages <= 1) return null;

  return (
    <nav className="flex items-center justify-center" data-oid="xu.qcv0">
      <ul className="flex items-center space-x-1" data-oid="gg:ajc-">
        {/* Previous button */}
        <li data-oid="d2t7s1j">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-10 h-10 rounded-md ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-brown-dark dark:text-beige-light hover:bg-beige-medium dark:hover:bg-brown-light"}`}
            aria-label="Previous page"
            data-oid="tqsnj4d"
          >
            <ChevronLeftIcon className="w-5 h-5" data-oid="g2tytsv" />
          </button>
        </li>

        {/* Page numbers */}
        {getPageNumbers().map((page, index) => (
          <li key={index} data-oid="z0-wz.w">
            {page === "..." ? (
              <span
                className="flex items-center justify-center w-10 h-10 text-brown-dark dark:text-beige-light"
                data-oid="hzzdf0v"
              >
                ...
              </span>
            ) : (
              <button
                onClick={() => handlePageClick(page)}
                className={`flex items-center justify-center w-10 h-10 rounded-md ${currentPage === page ? "bg-taupe text-white" : "text-brown-dark dark:text-beige-light hover:bg-beige-medium dark:hover:bg-brown-light"}`}
                aria-current={currentPage === page ? "page" : undefined}
                aria-label={`Page ${page}`}
                data-oid="c4n9oct"
              >
                {page}
              </button>
            )}
          </li>
        ))}

        {/* Next button */}
        <li data-oid="y5alcz3">
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center w-10 h-10 rounded-md ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-brown-dark dark:text-beige-light hover:bg-beige-medium dark:hover:bg-brown-light"}`}
            aria-label="Next page"
            data-oid="ekmwzyg"
          >
            <ChevronRightIcon className="w-5 h-5" data-oid="h.0:w2g" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
