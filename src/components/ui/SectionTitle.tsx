import { cn } from "../../utils/cn";
import { typography } from "../../constants/typography";

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionTitle({
  children,
  className,
}: SectionTitleProps) {
  return (
    <h2 className={cn(typography.sectionTitle, "mb-6", className)}>
      {children}
    </h2>
  );
}
