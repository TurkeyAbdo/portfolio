import { motion } from 'framer-motion';
import axios from 'axios';

export default function Blog({ posts }) {
  return (
    <main className="container-custom py-16">
      <h1 className="section-title">Insights to Inspire</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <motion.div
            key={post.title}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-400">{post.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  try {
    const res = await axios.get(`${API_URL}/api/blog`);
    return { props: { posts: res.data } };
  } catch (error) {
    return { props: { posts: [] } };
  }
} 