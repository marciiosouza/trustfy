import { memo } from "react";
import type { ArcConfig } from "./types";
import { ARCS_CONFIG } from "./constants";

interface ArcProps {
  config: ArcConfig;
  centerX: number;
  centerY: number;
}

const Arc = memo(({ config, centerX, centerY }: ArcProps) => {
  const { radius, strokeWidth, opacity } = config;

  // Create a semi-circle arc path (top half)
  const startX = centerX - radius;
  const startY = centerY;
  const endX = centerX + radius;
  const endY = centerY;

  const pathData = `M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`;

  return (
    <path
      d={pathData}
      fill="none"
      stroke="rgba(139, 92, 246, 1)"
      strokeWidth={strokeWidth}
      opacity={opacity}
      className="transition-opacity duration-300"
    />
  );
});

Arc.displayName = "Arc";

interface ConnectArcsProps {
  className?: string;
}

export const ConnectArcs = memo(({ className = "" }: ConnectArcsProps) => {
  const viewBoxWidth = 800;
  const viewBoxHeight = 400;
  const centerX = viewBoxWidth / 2;
  const centerY = viewBoxHeight;

  return (
    <svg
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      className={`w-full h-full ${className}`}
      preserveAspectRatio="xMidYMax meet"
    >
      {ARCS_CONFIG.map((config, index) => (
        <Arc key={index} config={config} centerX={centerX} centerY={centerY} />
      ))}
    </svg>
  );
});

ConnectArcs.displayName = "ConnectArcs";
