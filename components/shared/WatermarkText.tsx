import { cn } from "@/lib/utils";

interface WatermarkTextProps {
  text: string;
  className?: string;
}

const WatermarkText: React.FC<WatermarkTextProps> = ({ text, className }) => {
  return (
    <div
      className={cn(
        "relative -z-10 mx-auto hidden h-[100px] w-full overflow-clip sm:h-[140px] sm:max-w-6xl md:block lg:h-[184px]",
        className,
      )}
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[120px] leading-none font-bold sm:text-[180px] lg:text-[255px]">
        {/* Base gradient layer */}
        <span
          className={cn(
            "bg-linear-to-b bg-clip-text text-transparent",
            "from-gray-200 to-gray-100/30 to-80%",
            "dark:from-zinc-800 dark:to-zinc-900/30",
          )}
        >
          {text}
        </span>
        {/* Overlay blend layer */}
        <span
          className={cn(
            "absolute inset-0 bg-clip-text text-transparent mix-blend-darken",
            "bg-gray-300/70 [text-shadow:0_1px_0_white]",
            "dark:bg-zinc-800/70 dark:[text-shadow:0_1px_0_black]",
          )}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

WatermarkText.displayName = "WatermarkText";

export default WatermarkText;
