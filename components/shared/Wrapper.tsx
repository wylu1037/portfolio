import { cn } from "@/lib/utils";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "mx-auto h-full w-full max-w-screen-xl px-4 md:px-0",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
