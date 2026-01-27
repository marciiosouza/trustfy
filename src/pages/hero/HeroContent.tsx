export const HeroContent = ({
  onPrimaryClick,
  onSecondaryClick,
}: {
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}) => {
  return (
    <div className="absolute left-0 right-0 top-[176px] text-center">
      <h1 className="text-white text-[67px] font-regular leading-[0.9333em] tracking-[-1.5555%]">
        Deixe de ser cliente,
        <br />
        <span className="block font-bold">Vire dono de Gateway</span>
      </h1>

      <p className="text-white/70 text-[22px] max-w-[630px] mt-[18px] mb-[28px] mx-auto font-regular">
        Nossa tecnologia, sua marca: personalize o sistema, defina suas taxas e
        escale seu negócio com segurança absoluta.
      </p>

      <div className="flex justify-center gap-[20px] mt-[10px]">
        <button
          className="bg-[#7861ff] text-white rounded-[8px] py-[18px] px-[30px] border border-[rgba(255,255,255,0.5)] font-semibold"
          onClick={onPrimaryClick}
        >
          Fazer orçamento
        </button>

        <button
          className="bg-[rgba(0,0,0,0.5)] text-[rgba(255,255,255,0.85)] rounded-[8px] py-[18px] px-[30px] border border-[rgba(255,255,255,0.1)] backdrop-blur-[10px] font-semibold"
          onClick={onSecondaryClick}
        >
          Saiba mais
        </button>
      </div>
    </div>
  );
};
