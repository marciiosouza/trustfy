import type { FC, ReactNode } from "react";

type FeatureItemProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

const FeatureItem: FC<FeatureItemProps> = ({ title, description, icon }) => {
  return (
    <li className="flex gap-4 items-start flex-col" role="listitem">
      <div className="shrink-0 rounded-md  text-violet-700 flex items-center justify-center" aria-hidden>
        {icon ?? (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>

      <div>
        <h3 className="font-semibold text-white text-[30px] md:text-[24px] leading-tight">{title}</h3>
        <p className="mt-1 text-[26px] md:text-[20px] text-gray-300 leading-relaxed">{description}</p>
      </div>
    </li>
  );
};
export default FeatureItem;
