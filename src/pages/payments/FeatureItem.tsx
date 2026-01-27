import type { FC, ReactNode } from "react";
import { motion } from "motion/react";

type FeatureItemProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

const FeatureItem: FC<FeatureItemProps> = ({ title, description, icon }) => {
  return (
    <motion.li
      className="flex gap-4 items-start flex-col"
      role="listitem"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        className="shrink-0 rounded-md  text-violet-700 flex items-center justify-center"
        aria-hidden
      >
        {icon ?? (
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M12 2v20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12h20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      <div>
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.li>
  );
};
export default FeatureItem;
