import { motion } from 'framer-motion';
import axios from 'axios';

export default function Services({ services }) {
  return (
    <main className="container-custom py-16">
      <h1 className="section-title">Custom Design Solutions for Your Requirements.</h1>
      <div className="grid md:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  try {
    const res = await axios.get(`${API_URL}/api/services`);
    return { props: { services: res.data } };
  } catch (error) {
    return { props: { services: [] } };
  }
} 