import { motion } from "framer-motion";
import {
  CalendarIcon,
  UserIcon,
  TagIcon,
  ArrowLeftIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const BlogPostContent = ({ post }) => {
  const { title, content, imageUrl, author, date, category, readTime } = post;

  // Format date
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleShare = () => {
    // In a real app, this would open a share dialog
    alert("Share functionality would be implemented here");
  };

  return (
    <article className="max-w-4xl mx-auto" data-oid="supve4_">
      {/* Back Button */}
      <div className="mb-6" data-oid="nr:jzwe">
        <Link
          to="/blog"
          className="inline-flex items-center text-brown-dark dark:text-beige-light hover:text-taupe dark:hover:text-beige-medium transition-colors"
          data-oid="xh5_d2."
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" data-oid="o-8_14j" />
          Back to Blog
        </Link>
      </div>

      {/* Featured Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 rounded-lg overflow-hidden"
        data-oid="ufdooq:"
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto"
          data-oid="u274-u3"
        />
      </motion.div>

      {/* Title and Meta */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
        data-oid="91ya6rf"
      >
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-brown-dark dark:text-beige-light"
          data-oid="1g9bc.j"
        >
          {title}
        </h1>

        <div
          className="flex flex-wrap items-center text-brown dark:text-beige-medium gap-4 md:gap-6"
          data-oid="9-e3ub7"
        >
          <div className="flex items-center" data-oid="xsjvwhg">
            <CalendarIcon className="h-5 w-5 mr-2" data-oid="qh1pwsq" />
            <span data-oid="d5kq5ld">{formattedDate}</span>
          </div>
          <div className="flex items-center" data-oid="i-rvemd">
            <UserIcon className="h-5 w-5 mr-2" data-oid="3vuehaa" />
            <span data-oid=":_m1c-5">{author}</span>
          </div>
          {category && (
            <div className="flex items-center" data-oid="je.r-bc">
              <TagIcon className="h-5 w-5 mr-2" data-oid="49le2-d" />
              <span data-oid="uvuh7rd">{category}</span>
            </div>
          )}
          {readTime && (
            <div className="flex items-center" data-oid="763:ch1">
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="2a31362"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  data-oid="wmkj80x"
                />
              </svg>
              <span data-oid="3prmujh">{readTime} min read</span>
            </div>
          )}
          <button
            onClick={handleShare}
            className="ml-auto flex items-center text-taupe hover:text-brown dark:hover:text-beige-light transition-colors"
            aria-label="Share article"
            data-oid="t.nhb.p"
          >
            <ShareIcon className="h-5 w-5 mr-2" data-oid="xcfp-r6" />
            <span data-oid="-axr10x">Share</span>
          </button>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="prose prose-lg max-w-none text-brown dark:text-beige-medium prose-headings:text-brown-dark dark:prose-headings:text-beige-light prose-a:text-taupe hover:prose-a:text-brown dark:hover:prose-a:text-beige-light prose-img:rounded-lg"
        dangerouslySetInnerHTML={{ __html: content }}
        data-oid="_p4u3s-"
      />
    </article>
  );
};

export default BlogPostContent;
