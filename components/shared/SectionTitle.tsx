import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className }) => {
  return (
    <div className="justify-start">
      <h2
        className={cn(
          className,
          "mx-auto text-xl font-semibold text-foreground",
        )}
      >
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
