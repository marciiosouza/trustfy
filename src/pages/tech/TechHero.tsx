interface TechHeroProps {
  title: string;
  description: string;
}

export const TechHero = ({ title, description }: TechHeroProps) => {
  return (
    <header className="text-center mb-16 md:mb-20">
      <h1 className="text-4xl md:text-5xl lg:text-[65px] font-bold text-white mb-6 leading-[0.9] tracking-[-0.015em]">
        {title}
      </h1>
      <p className="text-white/70 text-lg md:text-[22px] leading-[1.14] max-w-[966px] mx-auto px-4">
        {description}
      </p>
    </header>
  );
};
