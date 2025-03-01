import { motion } from "motion/react";
export default function Home() {
  return (
    <motion.div
      exit={{
        x: "-100vw",
        transition: {
          ease: "easeInOut",
          duration: 1,
        },
      }}
    >
      <h1>HOME</h1>
    </motion.div>
  );
}
