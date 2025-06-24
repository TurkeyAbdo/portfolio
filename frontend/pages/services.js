import { motion } from 'framer-motion';
import axios from 'axios';

const serviceImages = [
  [
    'https://placehold.co/400x250?text=Graphic+1',
    'https://placehold.co/400x250?text=Graphic+2',
    'https://placehold.co/400x250?text=Graphic+3',
  ],
  [
    'https://placehold.co/400x250?text=Product+1',
    'https://placehold.co/400x250?text=Product+2',
    'https://placehold.co/400x250?text=Product+3',
  ],
  [
    'https://placehold.co/400x250?text=Web+1',
    'https://placehold.co/400x250?text=Web+2',
    'https://placehold.co/400x250?text=Web+3',
  ],
  [
    'https://placehold.co/400x250?text=Framer+1',
    'https://placehold.co/400x250?text=Framer+2',
    'https://placehold.co/400x250?text=Framer+3',
  ],
];

const trustedLogos = [
  'https://placehold.co/100x40?text=Logo1',
  'https://placehold.co/100x40?text=Logo2',
  'https://placehold.co/100x40?text=Logo3',
  'https://placehold.co/100x40?text=Logo4',
];

const pricing = [
  {
    title: 'Starter Package',
    price: '$999',
    features: [
      'For fast and small projects and audits',
      '1-2 weeks delivery',
      '1-2 rounds of revisions',
      'Basic design system',
    ],
  },
  {
    title: 'Business Package',
    price: '$2499',
    features: [
      'For established orgs or growing startups',
      '2-4 weeks delivery',
      '3-4 rounds of revisions',
      'Advanced design system',
    ],
  },
  {
    title: 'Custom Package',
    price: '$6999',
    features: [
      'For custom features or complex needs',
      '4+ weeks delivery',
      'Unlimited revisions',
      'Full design system & handoff',
    ],
  },
];

const faqs = [
  { question: 'What services do you offer?', answer: 'Product design, graphic design, web design, and Framer development.' },
  { question: 'What does your design process look like?', answer: 'Discover, ideate, design, test & refine.' },
  { question: 'How long does a project typically take?', answer: 'Depends on the scope, but most projects take 2-6 weeks.' },
  { question: 'Do you collaborate with developers or teams?', answer: 'Yes, I work with both individual clients and teams.' },
  { question: 'How can we start working together?', answer: 'Contact me via the website to schedule an intro call.' },
];

export default function Services({ services, testimonials }) {
  return (
    <main className="bg-primary">
      {/* Header */}
      <section className="container-custom pt-16 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Custom design solutions for your requirements.</h1>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl">I specialize in unique, user-centered design solutions for businesses and individuals. Let's create something extraordinary together.</p>
      </section>

      {/* Service Category Cards */}
      <section className="container-custom space-y-10 mb-16">
        {services.map((service, i) => (
          <motion.div key={service.title} className="bg-secondary rounded-xl p-6 mb-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <p className="text-gray-400 mb-4">{service.description}</p>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {serviceImages[i].map((img, idx) => (
                <img key={img} src={img} alt={service.title + idx} className="rounded-lg w-64 h-40 object-cover" />
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Trusted By Logos */}
      <section className="container-custom mb-16 text-center">
        <div className="text-gray-400 mb-2">Our solution is trusted by 246+ businesses</div>
        <div className="flex justify-center gap-8 flex-wrap">
          {trustedLogos.map((logo, i) => (
            <img key={logo} src={logo} alt={`Logo ${i+1}`} className="h-10 w-auto opacity-70" />
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container-custom mb-16">
        <h2 className="text-xl font-bold mb-4 text-accent">Flexible Pricing for Every Project</h2>
        <p className="text-gray-300 mb-6">Every project is unique, and so is the scope. I offer flexible pricing to deliver value to your needs, making sure you get the most for your investment.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {pricing.map((pkg, i) => (
            <motion.div key={pkg.title} className="card p-6 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <h3 className="text-lg font-semibold mb-2">{pkg.title}</h3>
              <div className="text-3xl font-bold mb-2">{pkg.price}</div>
              <ul className="text-gray-400 mb-4 space-y-1">
                {pkg.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <button className="bg-accent px-4 py-2 rounded-lg font-semibold">Book a Call</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom mb-16 text-center">
        <div className="bg-gradient-to-r from-accent/30 to-primary rounded-xl p-12 shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Let's Build Something Amazing Together.</h2>
          <p className="text-gray-300 mb-4">Have a question or an exciting project in mind? I'd love to hear from you. Let's create user experiences that make a difference.</p>
          <button className="bg-accent px-6 py-3 rounded-lg font-semibold">Book intro call</button>
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
    const [servicesRes, testimonialsRes] = await Promise.all([
      axios.get(`${API_URL}/api/services`),
      axios.get(`${API_URL}/api/testimonials`)
    ]);
    return { props: { services: servicesRes.data, testimonials: testimonialsRes.data } };
  } catch (error) {
    return { props: { services: [], testimonials: [] } };
  }
} 