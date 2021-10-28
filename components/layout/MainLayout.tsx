import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <motion.main
        className="flex flex-1 pb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section className="flex flex-1">{children}</section>
      </motion.main>
    </>
  );
};
