import { GoToElement } from "@/customHooks/GoToElement";
import { motion } from "framer-motion";

export const ButtonToELement = ({ element }: { element: string }) => {
  return (
    <button
      className="bg-red-500 fixed bottom-0 right-0"
      onClick={() => GoToElement(element)}
    >
      {
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ y: 0 }}
          animate={{ y: -10 }}
          transition={{ yoyo: Infinity, duration: 0.5 }}
        >
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </motion.svg>
      }
    </button>
  );
};
