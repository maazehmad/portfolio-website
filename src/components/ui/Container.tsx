import { cn } from "../../utils/cn";
import { spacing } from "../../constants/spacing";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto",
        spacing.containerWidth,
        spacing.containerPadding,
        className,
      )}
    >
      {children}
    </div>
  );
}
