import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/services', label: 'Services' },
    { href: '/store', label: 'Store' },
    { href: '/blog', label: 'Blog' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10"
    >
      <div className="container-custom py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          PORTFLOWX
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent text-white px-4 py-2 rounded-lg"
        >
          Remix for Free
        </motion.button>
      </div>
    </motion.nav>
  );
} 