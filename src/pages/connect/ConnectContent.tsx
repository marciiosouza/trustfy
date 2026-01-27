import { memo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CONNECT_CONTENT } from "./constants";

interface ConnectContentProps {
  className?: string;
}

export const ConnectContent = memo(
  ({ className = "" }: ConnectContentProps) => {
    const { title, description, ctaText, ctaLink } = CONNECT_CONTENT;

    return (
      <div className={`flex flex-col items-end ${className}`}>
        {/* Heading - position: top 183px */}
        <h2
          className="flex flex-col font-neue-montreal font-bold text-[68px] leading-15.5  tracking-[-1.12px] text-white"
          style={{ fontFamily: "Neue Montreal, sans-serif" }}
        >
          {title}
        </h2>

        {/* Description - position: top 260px (77px abaixo do título) */}
        <p
          className="font-normal text-[24px] leading-7.5 mt-4  text-[rgba(255,255,255,0.7)] max-w-[528px] text-right"
          style={{ fontFamily: "'PP Neue Montreal', sans-serif " }}
        >
          {description}
        </p>

        {/* CTA Button - position: top 383px (123px abaixo da descrição) */}
        <Button
          asChild
          className="w-[319px] h-[60px] bg-[#7861FF] hover:bg-[#6951EE] text-white rounded-[8px] relative overflow-hidden mt-[82px]"
          style={{
            boxShadow:
              "0px 4px 40px rgba(120, 97, 255, 0.3), inset 0px 4px 24px rgba(255, 255, 255, 0.3)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
          }}
        >
          <a href={ctaLink} className="flex items-center justify-center gap-3">
            <span
              className="text-[16px] leading-[19px] tracking-[-0.32px] font-semibold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {ctaText}
            </span>
            <ArrowRight className="w-6 h-6" strokeWidth={1.5} />
          </a>
        </Button>
      </div>
    );
  },
);

ConnectContent.displayName = "ConnectContent";
