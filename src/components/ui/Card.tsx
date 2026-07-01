import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Aplica efeito de elevação no hover. */
  hover?: boolean;
  /** Padding interno (padrão md). */
  padding?: "none" | "sm" | "md" | "lg";
  /** Se informado, o card inteiro vira um link interno (<Link>). */
  to?: string;
}

const paddings = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-7 sm:p-8",
};

export function Card({
  children,
  className,
  hover = false,
  padding = "md",
  to,
}: CardProps) {
  const classes = cn(
    "rounded-2xl border border-linha bg-white shadow-soft",
    paddings[padding],
    hover &&
      "transition-all duration-300 ease-soft hover:-translate-y-1 hover:border-azul-borda hover:shadow-card",
    to && "block",
    className,
  );

  if (to) {
    return (
      <Link to={to} className={cn(classes, "group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azul/40 focus-visible:ring-offset-2")}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
