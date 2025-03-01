import { motion } from "motion/react";
export default function Contacts() {
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
      <h1>CONTACTS</h1>;
    </motion.div>
  );
}
