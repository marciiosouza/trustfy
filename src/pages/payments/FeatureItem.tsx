import type { FC, ReactNode } from "react";

type FeatureItemProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

const FeatureItem: FC<FeatureItemProps> = ({ title, description, icon }) => {
  return (
    <li className="flex gap-3 sm:gap-4 items-start flex-col" role="listitem">
      <div className="shrink-0 rounded-md text-violet-700 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 [&>svg]:w-full [&>svg]:h-full" aria-hidden>
        {icon ?? (
          <svg className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>

      <div>
        <h3 className="font-neue-montreal font-semibold text-white text-base sm:text-lg md:text-xl leading-tight tracking-[-0.02em]">{title}</h3>
        <p className="mt-1 font-montserrat font-normal text-sm sm:text-base leading-relaxed tracking-[0.5px] md:tracking-[1px] text-white/70">{description}</p>
      </div>
    </li>
  );
};
export default FeatureItem;
