import { memo } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { ARCS_CONFIG } from "./constants";

interface ConnectArcsProps {
  className?: string;
  isInView?: boolean;
}

export const ConnectArcs = memo(
  ({ className = "", isInView = false }: ConnectArcsProps) => {
    const isMobile = !useMediaQuery("(min-width: 768px)");
    const viewBoxWidth = 890;
    const viewBoxHeight = 746;
    const centerX = 445;
    const centerY = 480;

    // Função para criar um arco (semi-círculo superior)
    const createArcPath = (radius: number) => {
      const startX = centerX - radius;
      const startY = centerY;
      const endX = centerX + radius;
      const endY = centerY;
      
      return `M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`;
    };

    return (
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        className={`w-full h-full ${className}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient
            id="gradient1"
            x1="445"
            y1="306"
            x2="445"
            y2="654"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#7861FF" />
            <stop offset="0.676102" stopOpacity="0" />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="gradient2"
            x1="445"
            y1="215"
            x2="445"
            y2="745"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#7861FF" />
            <stop offset="0.676102" stopOpacity="0" />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="gradient3"
            x1="445"
            y1="124"
            x2="445"
            y2="836"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#7861FF" />
            <stop offset="0.676102" stopOpacity="0" />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="gradient4"
            x1="445"
            y1="35"
            x2="445"
            y2="925"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#7861FF" />
            <stop offset="0.676102" stopOpacity="0" />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
        </defs>

        {ARCS_CONFIG.map((config, index) => (
          <motion.path
            key={index}
            d={createArcPath(config.radius)}
            fill="none"
            stroke={`url(#gradient${index + 1})`}
            strokeWidth={isMobile ? 3 : config.strokeWidth}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              isInView
                ? { pathLength: 1, opacity: config.opacity }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{
              pathLength: {
                duration: 1.5,
                delay: 0.3 + index * 0.2,
                ease: "easeInOut",
              },
              opacity: {
                duration: 0.5,
                delay: 0.3 + index * 0.2,
              },
            }}
            style={{ vectorEffect: "non-scaling-stroke" }}
          />
        ))}
      </svg>
    );
  },
);

ConnectArcs.displayName = "ConnectArcs";
