import { motion } from "motion/react";
export default function Example1() {
  const shapeVariants = {
    initial: {
      opacity: 0,
      y: "5vh",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        bounce: 0.7,
      },
    },
  };
  const childVariants = {
    initial: {
      scale: 1,
    },
    animate: {
      scale: 2,
      transition: {
        delay: 0.3,
        duration: 1,
        type: "spring",
        bounce: 0.7,
      },
    },
  };

  return (
    <>
      <motion.div
        className="flex justify-between"
        exit={{
          x: "-100vw",
          transition: {
            ease: "easeInOut",
            duration: 1,
          },
        }}
      >
        <motion.div
          className="bg-red-500 border w-32 h-32 rounded-full"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 5 }}
        />
        <motion.div
          className="bg-green-700 w-32 h-32 rounded m-4"
          variants={shapeVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-red-500 w-12 h-12 rounded-full border m-2"
            variants={childVariants}
          />
        </motion.div>
      </motion.div>
    </>
  );
}
