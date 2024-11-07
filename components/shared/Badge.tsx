import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  return (
    <div className={cn(className, "rounded-md border border-gray-200")}>
      {children}
    </div>
  );
};

export default Badge;
