import { motion } from "framer-motion";

export const HeroContent = ({
  onPrimaryClick,
  onSecondaryClick,
}: {
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}) => {
  return (
    <motion.div
      className="absolute left-0 right-0 top-[176px] text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-white text-[67px] font-regular leading-[0.9333em] tracking-[-1.5555%]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Deixe de ser cliente,
        <br />
        <span className="block font-bold">Vire dono de Gateway</span>
      </motion.h1>

      <motion.p
        className="text-white/70 text-[22px] max-w-[630px] mt-[18px] mb-[28px] mx-auto font-regular"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        Nossa tecnologia, sua marca: personalize o sistema, defina suas taxas e
        escale seu negócio com segurança absoluta.
      </motion.p>

      <motion.div
        className="flex justify-center gap-[20px] mt-[10px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.button
          className="w-[319px] h-[60px] bg-[#7861FF] hover:bg-[#6951EE] text-white rounded-[8px] relative overflow-hidden mt-[82px]"
          onClick={onPrimaryClick}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 40px rgba(120, 97, 255, 0.4)",
          }}
          style={{
            boxShadow:
              "0px 4px 40px rgba(120, 97, 255, 0.3), inset 0px 4px 24px rgba(255, 255, 255, 0.3)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Fazer orçamento
        </motion.button>

        <motion.button
          className="bg-[rgba(0,0,0,0.5)] text-[rgba(255,255,255,0.85)] rounded-[8px] py-[18px] px-[30px] border border-[rgba(255,255,255,0.1)] backdrop-blur-[10px] font-semibold"
          onClick={onSecondaryClick}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.7)" }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Saiba mais
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
