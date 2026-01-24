import { useEffect, useState } from "react";

export const useScale = (designWidth = 1920, designHeight = 1379) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const scaleX = window.innerWidth / designWidth;
      const scaleY = window.innerHeight / designHeight;
      setScale(Math.max(scaleX, scaleY));
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [designWidth, designHeight]);

  return scale;
};
