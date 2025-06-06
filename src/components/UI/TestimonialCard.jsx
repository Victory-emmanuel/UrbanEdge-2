import { StarIcon } from "@heroicons/react/24/solid";

const TestimonialCard = ({ testimonial }) => {
  const { name, role, image, quote, rating } = testimonial;

  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          className={`h-4 w-4 xs:h-5 xs:w-5 ${
            i < rating ? "text-taupe" : "text-beige-medium dark:text-brown"
          }`}
          data-oid="ajlkjxf"
        />,
      );
    }
    return stars;
  };

  return (
    <div
      className="bg-white dark:bg-brown-dark rounded-lg shadow-md p-4 xs:p-5 sm:p-6 flex flex-col h-full"
      data-oid=":e69m-0"
    >
      {/* Stars */}
      <div className="flex mb-3 xs:mb-4" data-oid="-v_dasx">
        {renderStars()}
      </div>

      {/* Quote */}
      <blockquote className="mb-4 xs:mb-6 flex-grow" data-oid=".qk8ndo">
        <p
          className="italic text-sm xs:text-base text-brown dark:text-beige-medium"
          data-oid=".q3rnxm"
        >
          "{quote}"
        </p>
      </blockquote>

      {/* Author */}
      <div className="flex items-center" data-oid="j7:4:4d">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 xs:w-12 xs:h-12 rounded-full object-cover mr-3 xs:mr-4"
          data-oid="swz8_-o"
        />

        <div data-oid="1m:2:e2">
          <p
            className="font-medium text-sm xs:text-base text-brown-dark dark:text-beige-light"
            data-oid="eh4:s.q"
          >
            {name}
          </p>
          <p
            className="text-xs xs:text-sm text-brown dark:text-beige-medium"
            data-oid="xikoymm"
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
