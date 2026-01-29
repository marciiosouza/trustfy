import { motion } from "framer-motion";

type FeatureCardProps = {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  className?: string;
  selected?: boolean;
};

export const FeatureCard = ({
  title,
  subtitle,
  icon,
  className = "",
  selected = false,
}: FeatureCardProps) => {
  const baseClasses = "rounded-[16px] p-4";
  const border = selected
    ? "border-[rgba(120,97,255,0.6)]"
    : "border-[rgba(255,255,255,0.1)]";
  const shadow = selected
    ? {
        boxShadow:
          "0 10px 30px rgba(120,97,255,0.20), inset 0px 4px 16px 0px rgba(120,97,255,0.12)",
      }
    : undefined;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        className={`${baseClasses} ${border} text-white`}
        style={shadow as any}
        whileHover={{
          scale: 1.05,
          boxShadow: selected
            ? "0 15px 40px rgba(120,97,255,0.30), inset 0px 4px 16px 0px rgba(120,97,255,0.12)"
            : "0 10px 30px rgba(120,97,255,0.15), inset 0px 4px 16px 0px rgba(120,97,255,0.08)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          className="w-[48px] h-[48px] mb-[12px]"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <div>
          <h3 className="text-white text-[1.25rem] md:text-[16px]">{title}</h3>
          <p className="text-white/70 text-[1rem] md:text-[14px]">{subtitle}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};
