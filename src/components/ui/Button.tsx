import type { ButtonHTMLAttributes, ReactNode, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "whatsapp";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold leading-none whitespace-nowrap transition-all duration-200 ease-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azul/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-azul text-white shadow-soft hover:bg-azul-escuro hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-azul-suave text-azul-escuro hover:bg-azul-borda hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-linha bg-white text-tinta hover:border-azul hover:text-azul-escuro",
  ghost: "text-azul-escuro hover:bg-azul-suave",
  whatsapp:
    "bg-verde text-white shadow-soft hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[0.95rem]",
  lg: "h-13 px-8 text-base",
};

export function buttonClasses(opts?: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}): string {
  const { variant = "primary", size = "md", className } = opts ?? {};
  return cn(base, variantClasses[variant], sizeClasses[size], className);
}

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  /** Ícone à esquerda/direita do texto. */
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
  "aria-label"?: string;
  title?: string;
}

type ButtonProps = CommonProps & {
  /** Rota interna (vira <Link>). */
  to?: string;
  /** URL externa (vira <a>). */
  href?: string;
  target?: string;
  rel?: string;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "disabled">;

export function Button({
  variant,
  size,
  className,
  children,
  iconLeft,
  iconRight,
  to,
  href,
  target,
  rel,
  type,
  disabled,
  ...rest
}: ButtonProps) {
  const classes = buttonClasses({ variant, size, className });
  const content = (
    <>
      {iconLeft}
      {children}
      {iconRight}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type ?? "button"} disabled={disabled} className={classes} {...rest}>
      {content}
    </button>
  );
}
