import { motion } from "motion/react";
export default function Example2() {
  return (
    <>
      <motion.div
        className="bg-blue-500 border w-32 h-32 m-4"
        transition={{ duration: 2 }}
        animate={{
          borderRadius: [
            "10%",
            "20%",
            "30%",
            "40%",
            "50%",
            "60%",
            "70%",
            "80%",
            "90%",
            "100%",
          ],
          rotate: [30, 60, 90, 120, 180, 210, 250, 280, 310, 360],
          scale: [1, 2, 3, 2, 1],
        }}
      />
    </>
  );
}
