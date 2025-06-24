import { motion } from 'framer-motion';
import axios from 'axios';

export default function Home({ projects, services, store, testimonials, blog }) {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <main className="bg-primary">
      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="container-custom pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Crafting Crazy Experiences,<br className="hidden md:block"/> One Pixel at a Time.</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Hi, I'm a product designer who transforms ideas into seamless, user-centered solutions.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <button className="bg-accent px-6 py-3 rounded-lg font-semibold">View Work</button>
          <button className="bg-secondary px-6 py-3 rounded-lg font-semibold border border-white/10">See Plans</button>
        </div>
        <img src="https://placehold.co/800x200?text=Hero+Image" alt="Hero" className="mx-auto rounded-xl shadow-lg mb-8" />
      </motion.section>

      {/* Services/Process Section */}
      <section className="container-custom py-16">
        <h2 className="section-title">Custom design solutions for your requirements.</h2>
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {services.map((service, i) => (
            <motion.div key={service.title} className="card p-6 text-center" {...fadeInUp} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.05 }}>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6 mt-8">
          {['Discover', 'Ideate', 'Design', 'Test & Refine'].map((step, i) => (
            <motion.div key={step} className="card p-6 flex-1 text-center" {...fadeInUp} transition={{ delay: i * 0.1 }}>
              <div className="text-3xl font-bold mb-2">0{i+1}</div>
              <h4 className="font-semibold mb-2">{step}</h4>
              <p className="text-gray-400 text-sm">{step === 'Discover' && 'Understanding the problem and defining the goal.'}
                {step === 'Ideate' && 'Brainstorm ideas and explore multiple design directions.'}
                {step === 'Design' && 'Develop high-fidelity designs, focusing on usability and aesthetics.'}
                {step === 'Test & Refine' && 'Conduct usability testing to identify potential pain points.'}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Work Section */}
      <section className="container-custom py-16">
        <h2 className="section-title">Thoughtful Design Meets Real-World Solutions.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div key={project.title} className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }}>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Store/Shop Section */}
      <section className="container-custom py-16">
        <h2 className="section-title">Explore curated designs crafted with passion.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {store.map((item, i) => (
            <motion.div key={item.title} className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }}>
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About/Intro Section */}
      <section className="container-custom py-16 flex flex-col md:flex-row items-center gap-8">
        <img src="https://placehold.co/300x300?text=Designer" alt="Designer" className="rounded-xl shadow-lg w-60 h-60 object-cover" />
        <div>
          <h2 className="text-3xl font-bold mb-2">Hello there!</h2>
          <p className="text-lg mb-4">I'm the John Doe, a pixel-perfect designer.</p>
          <p className="text-gray-400 mb-4">As an autonomous designer based in USA, my 5 plus years in the field have refined my expertise. My focus is on assisting brands in creating significant digital interactions. As a creative professional, I prioritize genuineness, openness, and sincerity at all times.</p>
          <button className="bg-accent px-6 py-2 rounded-lg font-semibold">Get in Touch</button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container-custom py-16">
        <h2 className="section-title">What Clients and Collaborators Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div key={testimonial.name} className="card p-6 text-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.2 }}>
              <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
              <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
              <h3 className="font-semibold">{testimonial.name}</h3>
              <p className="text-gray-400">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog/Insights Section */}
      <section className="container-custom py-16">
        <h2 className="section-title">Insights to Inspire</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blog.map((post, i) => (
            <motion.div key={post.title} className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }}>
              <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-400">{post.category}</p>
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
    const [projectsRes, servicesRes, storeRes, testimonialsRes, blogRes] = await Promise.all([
      axios.get(`${API_URL}/api/projects`),
      axios.get(`${API_URL}/api/services`),
      axios.get(`${API_URL}/api/store`),
      axios.get(`${API_URL}/api/testimonials`),
      axios.get(`${API_URL}/api/blog`)
    ]);
    return {
      props: {
        projects: projectsRes.data,
        services: servicesRes.data,
        store: storeRes.data,
        testimonials: testimonialsRes.data,
        blog: blogRes.data
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        projects: [],
        services: [],
        store: [],
        testimonials: [],
        blog: []
      }
    };
  }
} 
