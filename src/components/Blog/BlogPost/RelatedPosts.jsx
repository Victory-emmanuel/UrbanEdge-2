import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const RelatedPosts = ({ posts }) => {
  return (
    <section
      className="mt-16 pt-12 border-t border-beige-medium dark:border-brown"
      data-oid="eux8hzp"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-heading font-bold mb-8 text-brown-dark dark:text-beige-light"
        data-oid="5y8og.1"
      >
        Related Articles
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-oid="tkx4scu">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
            data-oid="9uz2pn3"
          >
            <Link to={`/blog/${post.id}`} className="block" data-oid="h4wc.j0">
              <div
                className="relative overflow-hidden rounded-lg mb-4"
                data-oid="1bcb8in"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  data-oid="9n95f2c"
                />

                {post.category && (
                  <div
                    className="absolute top-3 left-3 bg-taupe text-white px-2 py-1 text-xs rounded"
                    data-oid="75b24kh"
                  >
                    {post.category}
                  </div>
                )}
              </div>
              <h3
                className="text-lg font-heading font-bold mb-2 text-brown-dark dark:text-beige-light group-hover:text-taupe dark:group-hover:text-beige-medium transition-colors"
                data-oid="gc34bj_"
              >
                {post.title}
              </h3>
              <p
                className="text-sm text-brown dark:text-beige-medium line-clamp-2"
                data-oid="tq7rd-0"
              >
                {post.excerpt}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
