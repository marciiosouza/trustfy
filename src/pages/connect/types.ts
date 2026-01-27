export interface Partner {
  id: string;
  name: string;
  logo: string;
  position: {
    x: number;
    y: number;
  };
  size: {
    width: number;
    height: number;
  };
}

export interface ArcConfig {
  radius: number;
  strokeWidth: number;
  opacity: number;
}
