import { cn } from "../../utils/cn";
import { spacing } from "../../constants/spacing";

type ChipProps = React.HTMLAttributes<HTMLSpanElement> & {
  className?: string;
  children: React.ReactNode;
};

export default function Chip({ children, className, ...props }: ChipProps) {
  return (
    <span
      {...props}
      className={cn(
        "inline-flex items-center justify-center border border-slate-700 bg-slate-950/20 text-slate-200",
        spacing.chipPadding,
        spacing.chipText,
        spacing.chipRadius,
        "transition-all duration-200 ease-out",
        "hover:bg-slate-900 hover:border-slate-600",
        className,
      )}
    >
      {children}
    </span>
  );
}
