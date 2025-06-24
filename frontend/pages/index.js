import { motion } from 'framer-motion';
import axios from 'axios';

export default function Home({ projects, services, testimonials, faqs }) {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <main>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="container-custom py-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Explore curated designs crafted with passion.
        </h1>
        <p className="text-xl text-gray-300">
          Your one-stop shop for standout portfolios, designs, and templates.
        </p>
      </motion.section>

      {/* Projects Section */}
      <section className="container-custom py-16">
        <h2 className="section-title">Featured Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects?.map((project, index) => (
            <motion.div
              key={project.title}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container-custom py-16">
        <h2 className="section-title">Services</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {services?.map((service, index) => (
            <motion.div
              key={service.title}
              className="card p-6"
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container-custom py-16">
        <h2 className="section-title">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials?.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="card p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
              <h3 className="font-semibold">{testimonial.name}</h3>
              <p className="text-gray-400">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container-custom py-16">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs?.map((faq, index) => (
            <motion.div
              key={faq.question}
              className="card p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

export async function getServerSideProps() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  
  try {
    const [projectsRes, servicesRes, testimonialsRes, faqsRes] = await Promise.all([
      axios.get(`${API_URL}/api/projects`),
      axios.get(`${API_URL}/api/services`),
      axios.get(`${API_URL}/api/testimonials`),
      axios.get(`${API_URL}/api/faqs`)
    ]);

    return {
      props: {
        projects: projectsRes.data,
        services: servicesRes.data,
        testimonials: testimonialsRes.data,
        faqs: faqsRes.data
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        projects: [],
        services: [],
        testimonials: [],
        faqs: []
      }
    };
  }
} 