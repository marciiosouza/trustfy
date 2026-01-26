export interface Partner {
  id: string;
  name: string;
  logo: string;
  position: {
    x: number;
    y: number;
  };
}

export interface ArcConfig {
  radius: number;
  strokeWidth: number;
  opacity: number;
}
