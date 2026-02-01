interface TechHeroProps {
  title: string;
  description: string;
}

export const TechHero = ({ title, description }: TechHeroProps) => {
  return (
    <header className="text-center mb-16 md:mb-20">
      <h1 className="flex flex-col font-neue-montreal font-bold text-[2rem] md:text-[65px] leading-[1.15] md:leading-15.5 tracking-[-0.02em] md:tracking-[-1.12px] text-white">
        {title}
      </h1>
      <p
        className="font-normal mx-auto max-w-[340px] md:max-w-[966px] tracking-[0.5px] md:tracking-[1.46px] text-[15px] md:text-[22px] leading-relaxed md:leading-7.5 mb-16 mt-4 md:mt-8 text-[rgba(255,255,255,0.7)]"
        style={{ fontFamily: "'PP Neue Montreal', sans-serif " }}
      >
        {description}
      </p>
    </header>
  );
};
