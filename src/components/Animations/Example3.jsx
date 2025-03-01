import { motion } from "motion/react";
export default function Example3() {
  const message = "Possimus minus similique veniam dicta sequi nam expedita";
  const words = message.split(" ");
  return (
    <div>
      <div>
        <motion.button
          className="bg-pink-500 p-4 rounded m-5 "
          whileTap={{ scale: 0.7 }}
          whileHover={{ rotate: 360 }}
        >
          Click ME
        </motion.button>
        <motion.button
          className="bg-pink-500 p-4 rounded m-5"
          whileTap={{ scale: 0.7 }}
          whileHover={{
            rotate: 360,
            transition: { yoyo: Infinity, delay: 0.3 },
          }}
        >
          Click ME
        </motion.button>
      </div>
      <div className="text-2xl m-4 text-center text-pink-400">
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index / 20 }}
          >
            {word} {"  "}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
