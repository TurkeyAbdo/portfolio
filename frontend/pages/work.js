import { motion } from 'framer-motion';
import axios from 'axios';

export default function Work({ projects }) {
  return (
    <main className="container-custom py-16">
      <h1 className="section-title">Thoughtful Design Meets Real-World Solutions.</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
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
    const res = await axios.get(`${API_URL}/api/projects`);
    return { props: { projects: res.data } };
  } catch (error) {
    return { props: { projects: [] } };
  }
} 