interface TechHeroProps {
  title: string;
  description: string;
}

export const TechHero = ({ title, description }: TechHeroProps) => {
  return (
    <header className="text-center mb-16 md:mb-20">
      <h1 className=" flex flex-col font-neue-montreal font-bold text-[2.5rem] md:text-[65px] leading-[1.2] md:leading-15.5 tracking-[-1.12px] text-white">
        {title}
      </h1>
      <p
        className="font-normal mx-auto max-w-[966px] tracking-[1.46px] text-[1.475rem] mb-16 mt-8 md:text-[22px] leading-7.5  text-[rgba(255,255,255,0.7)]"
        style={{ fontFamily: "'PP Neue Montreal', sans-serif " }}
      >
        {description}
      </p>
    </header>
  );
};
