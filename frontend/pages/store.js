import { motion } from 'framer-motion';
import axios from 'axios';

export default function Store({ items, testimonials }) {
  return (
    <main className="bg-primary">
      {/* Header */}
      <section className="container-custom pt-16 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore curated designs crafted with passion.</h1>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl">Your one-stop shop for standout portfolios, designs, and templates.</p>
      </section>

      {/* Store Grid */}
      <section className="container-custom mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div key={item.title} className="bg-secondary rounded-xl overflow-hidden shadow-lg flex flex-col" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }}>
              <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <span className="text-gray-400 font-bold text-lg">{item.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container-custom mb-16">
        <h2 className="text-xl font-bold mb-4 text-accent">What Clients and Collaborators Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div key={testimonial.name} className="card p-6 text-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.2 }}>
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
              <h3 className="font-semibold">{testimonial.name}</h3>
              <p className="text-gray-400">{testimonial.role}</p>
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
    const [itemsRes, testimonialsRes] = await Promise.all([
      axios.get(`${API_URL}/api/store`),
      axios.get(`${API_URL}/api/testimonials`)
    ]);
    return { props: { items: itemsRes.data, testimonials: testimonialsRes.data } };
  } catch (error) {
    return { props: { items: [], testimonials: [] } };
  }
} 