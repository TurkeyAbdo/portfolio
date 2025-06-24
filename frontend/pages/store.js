import { motion } from 'framer-motion';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export default function Store({ items }) {
  console.log("ENV API_URL:", process.env.API_URL);

  return (
    <main className="container-custom py-16">
      <h1 className="section-title">Explore Curated Designs Crafted with Passion.</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const API_URL = process.env.API_URL;
  try {
    const res = await axios.get(`${API_URL}/api/store`);
    return { props: { items: res.data } };
  } catch (error) {
    return { props: { items: [] } };
  }
} 