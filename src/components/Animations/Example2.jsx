import { animate } from "motion";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";
export default function Example2() {
  const count = useMotionValue(0);
  const roundedValue = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, {
      duration: 2,
      delay: 0.5,
    });

    return animation.stop;
  }, []);
  return (
    <div className="flex justify-between">
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
      <motion.div>{roundedValue}</motion.div>
    </div>
  );
}
