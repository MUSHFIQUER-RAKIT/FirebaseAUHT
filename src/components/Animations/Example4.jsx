import { motion } from "motion/react";

const Box = ({ text }) => {
  return (
    <motion.div
      className="w-full h-96 rounded-sm bg-pink-500 text-black m-4 text-center place-content-center text-4xl"
      initial={{ opacity: 0, x: -1200 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
          delay: 0.2,
          type: "spring",
          bounce: 0.3,
        },
      }}
      viewport={{ once: false }}
    >
      {text}
    </motion.div>
  );
};

export default function Example4() {
  const greetings = ["Hello", "Hola", "Welcome", "Assalamu Alaikum", "Ohe"];
  return (
    <>
      <div>
        {greetings.map((greeting, index) => (
          <Box text={greeting} key={index} />
        ))}
      </div>
    </>
  );
}
