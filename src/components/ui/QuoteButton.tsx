import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./button";

export const QUOTE_TEXT = "Fazer orçamento";
export const QUOTE_ARIA = "Fazer um orçamento para sua Fintech";
export const QUOTE_LINK = "#orcamento";

export interface QuoteButtonProps extends React.ComponentProps<typeof Button> {
  href?: string;
  children?: React.ReactNode;
}

export const QuoteButton = ({
  href = QUOTE_LINK,
  children,
  ...props
}: QuoteButtonProps) => {
  // If children are provided, respect them (useful for motion wrappers or custom markup)
  if (children) {
    return <Button asChild {...props}>{children}</Button>;
  }

  return (
    <Button asChild {...props}>
      <a href={href} aria-label={QUOTE_ARIA} className="inline-flex items-center gap-2">
        <span className="font-medium text-[16px] text-white">{QUOTE_TEXT}</span>
        <ArrowRight className="w-6 h-6 text-white" />
      </a>
    </Button>
  );
};

export default QuoteButton;
