import { cn } from "../../utils/cn";
import { shadows } from "../../constants/shadows";
import { spacing } from "../../constants/spacing";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactNode;
};

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={cn(
        "border border-slate-800 bg-slate-900",
        spacing.cardRadius,
        spacing.cardPadding,
        shadows.card,
        "transition-all duration-200 ease-out",
        "hover:bg-slate-800 hover:border-slate-700 hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
