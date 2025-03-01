import { AnimatePresence } from "motion/react";
import { RouterProvider } from "react-router";
import router from "./routes";

function App() {
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
