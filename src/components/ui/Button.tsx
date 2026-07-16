import { cn } from "../../utils/cn";
import { typography } from "../../constants/typography";
import { spacing } from "../../constants/spacing";

type ButtonVariant = "primary" | "secondary";

export type ButtonProps =
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & {
      href?: undefined;
      as?: "button";
      variant?: ButtonVariant;
      className?: string;
      children: React.ReactNode;
    })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
      as?: "a";
      variant?: ButtonVariant;
      className?: string;
      children: React.ReactNode;
    });

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-cyan-500 text-slate-950 hover:bg-cyan-400 focus-visible:ring-cyan-500",
  secondary:
    "bg-slate-900 border border-slate-700 text-slate-100 hover:bg-slate-800 focus-visible:ring-cyan-500",
};

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseClass = cn(
    "inline-flex items-center justify-center",
    spacing.buttonPadding,
    spacing.buttonRadius,
    typography.button,
    "focus:outline-none focus-visible:ring-2 transition-all duration-200 ease-out",
    "active:scale-95 active:shadow-md",
    variantStyles[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    return (
      <a href={href} className={baseClass} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={baseClass}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
