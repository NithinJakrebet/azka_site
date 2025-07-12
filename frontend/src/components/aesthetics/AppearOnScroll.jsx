import { motion } from 'framer-motion';

const AppearOnScroll = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // Animates once when 30% of it is in view
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AppearOnScroll;