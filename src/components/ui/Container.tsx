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
        "w-full flex flex-col items-center justify-center",
        spacing.containerPadding,
        spacing.containerWidth,
        className,
      )}
    >
      {children}
    </div>
  );
}
