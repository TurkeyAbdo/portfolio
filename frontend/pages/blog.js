import { motion } from 'framer-motion';
import axios from 'axios';

export default function Blog({ posts }) {
  return (
    <main className="bg-primary">
      {/* Header */}
      <section className="container-custom pt-16 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights to Inspire</h1>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl">Explore expert tips, creative ideas, and success stories to elevate your portfolio game.</p>
      </section>

      {/* Blog Grid */}
      <section className="container-custom mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div key={post.title} className="bg-secondary rounded-xl overflow-hidden shadow-lg flex flex-col" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }}>
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-accent mb-1 uppercase">{post.category}</div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                </div>
                <div className="mt-4">
                  <a href={post.url || '#'} className="text-accent font-semibold hover:underline">Learn more &rarr;</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-white/10 py-8 mt-8">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="/" className="hover:underline">Home</a>
            <a href="/work" className="hover:underline">Work</a>
            <a href="/services" className="hover:underline">Services</a>
            <a href="/store" className="hover:underline">Store</a>
            <a href="/blog" className="hover:underline">Blog</a>
          </div>
          <div className="text-gray-500 text-sm">© 2025 All rights reserved. Made in Framer</div>
        </div>
      </footer>
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