interface TechHeroProps {
  title: string;
  description: string;
}

export const TechHero = ({ title, description }: TechHeroProps) => {
  return (
    <header className="text-center mb-16 md:mb-20">
      <h1 className=" flex flex-col font-neue-montreal font-bold text-[68px] leading-15.5  tracking-[-1.12px] text-white">
        {title}
      </h1>
      <p
        className="font-normal text-[24px] leading-7.5 mt-4 max-w-[1100px] mx-auto text-[rgba(255,255,255,0.7)]"
        style={{ fontFamily: "'PP Neue Montreal', sans-serif " }}
      >
        {description}
      </p>
    </header>
  );
};
