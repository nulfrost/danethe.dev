import { motion } from "framer-motion";

export default function Container({ children }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen"
      transition={{ type: "tween", damping: 2, stiffness: 20 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}
