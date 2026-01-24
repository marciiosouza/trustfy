type FeatureCardProps = {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  className?: string;
  selected?: boolean;
};

export const FeatureCard = ({
  title,
  subtitle,
  icon,
  className = "",
  selected = false,
}: FeatureCardProps) => {
  const baseClasses = "rounded-[16px] p-4";
  const border = selected
    ? "border-[rgba(120,97,255,0.6)]"
    : "border-[rgba(255,255,255,0.1)]";
  const shadow = selected
    ? {
        boxShadow:
          "0 10px 30px rgba(120,97,255,0.20), inset 0px 4px 16px 0px rgba(120,97,255,0.12)",
      }
    : undefined;

  return (
    <div className={className}>
      <div
        className={`${baseClasses} ${border} text-white`}
        style={shadow as any}
      >
        <div className="w-[48px] h-[48px] mb-[12px]">{icon}</div>
        <div>
          <h3 className="text-white text-[16px]">{title}</h3>
          <p className="text-white/70 text-[14px]">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
