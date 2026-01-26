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
      <div className={`flex flex-col gap-6 ${className}`}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          {title}
        </h2>

        <p className="text-white/60 text-base md:text-lg max-w-md leading-relaxed">
          {description}
        </p>

        <div className="mt-2">
          <Button
            asChild
            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 h-auto rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-600/25"
          >
            <a href={ctaLink} className="flex items-center gap-2">
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    );
  },
);

ConnectContent.displayName = "ConnectContent";
