import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className }) => {
  return (
    <div className="flex justify-center">
      <h2
        className={cn(
          className,
          "mx-auto text-2xl font-semibold text-neutral-700",
        )}
      >
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
