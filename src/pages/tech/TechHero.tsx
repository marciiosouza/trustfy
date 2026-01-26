interface TechHeroProps {
  title: string;
  description: string;
}

export const TechHero = ({ title, description }: TechHeroProps) => {
  return (
    <header className="text-center mb-16 md:mb-20">
      <h1 className="text-white text-[72px] font-bold leading-[0.9333em] tracking-[-1.5555%]">
        {title}
      </h1>
      <p className="text-white/70 text-[22px] max-w-[930px] mt-[18px] mb-[28px] mx-auto font-regular">
        {description}
      </p>
    </header>
  );
};
