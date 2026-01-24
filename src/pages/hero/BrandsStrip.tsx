export const BrandsStrip = ({
  src = "/brands-strip.svg",
}: {
  src?: string;
}) => {
  return (
    <div className="absolute left-[-250px] top-[1143px] w-full overflow-hidden">
      <div className="flex w-[3993.52px]">
        <img
          src={src}
          alt="brands"
          className="w-[1996.76px] h-[236px] flex-shrink-0"
        />
        <img
          src={src}
          alt="brands"
          className="w-[1996.76px] h-[236px] flex-shrink-0"
        />
      </div>
    </div>
  );
};
