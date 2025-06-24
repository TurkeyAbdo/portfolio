import { motion } from 'framer-motion';
import axios from 'axios';

const awards = [
  { title: 'Golden Pixel Award', year: '2019' },
  { title: 'Design Innovator of the Year', year: '2022' },
  { title: 'Digital Excellence Award', year: '2019' },
  { title: 'Creative Trailblazer Award', year: '2020' },
];

const faqs = [
  { question: 'What services do you offer?', answer: 'Product design, graphic design, web design, and Framer development.' },
  { question: 'What does your design process look like?', answer: 'Discover, ideate, design, test & refine.' },
  { question: 'How long does a project typically take?', answer: 'Depends on the scope, but most projects take 2-6 weeks.' },
  { question: 'Do you collaborate with developers or teams?', answer: 'Yes, I work with both individual clients and teams.' },
  { question: 'How can we start working together?', answer: 'Contact me via the website to schedule an intro call.' },
];

export default function Work({ projects, testimonials }) {
  return (
    <main className="bg-primary">
      {/* Header */}
      <section className="container-custom pt-16 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Thoughtful Design Meets Real-World Solutions.</h1>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl">Here's a collection of my recent work, showcasing my ability to merge creativity with functionality.</p>
      </section>

      {/* Projects Section */}
      <section className="container-custom space-y-10 mb-16">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="flex flex-col md:flex-row bg-secondary rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex-1 p-8 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-widest text-accent font-bold mb-2">About Me</span>
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">Easy to remember and distinctive logos, giving your brand a unique identity.</p>
              <button className="bg-accent px-4 py-2 rounded-lg font-semibold w-max">View Case Study</button>
            </div>
            <img src={project.image} alt={project.title} className="md:w-1/2 w-full object-cover" />
          </motion.div>
        ))}
      </section>

      {/* Awards Section */}
      <section className="container-custom mb-16">
        <h2 className="text-xl font-bold mb-4 text-accent">Awards & Recognition</h2>
        <p className="text-gray-300 mb-6">Simplify recruitment, enhance productivity, and find the best talent faster than ever.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {awards.map((award, i) => (
            <div key={award.title} className="bg-secondary rounded-xl p-6 flex flex-col items-center text-center">
              <div className="mb-2 text-3xl">🏆</div>
              <div className="font-semibold mb-1">{award.title}</div>
              <div className="text-gray-400 text-sm">{award.year}</div>
            </div>
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

      {/* FAQ Section */}
      <section className="container-custom mb-16">
        <h2 className="text-xl font-bold mb-4 text-accent">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <motion.div key={faq.question} className="card p-6" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
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
    const [projectsRes, testimonialsRes] = await Promise.all([
      axios.get(`${API_URL}/api/projects`),
      axios.get(`${API_URL}/api/testimonials`)
    ]);
    return { props: { projects: projectsRes.data, testimonials: testimonialsRes.data } };
  } catch (error) {
    return { props: { projects: [], testimonials: [] } };
  }
} 