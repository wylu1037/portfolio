import Container from "./shared/Container";
import Wrapper from "./shared/Wrapper";
import DotPattern from "./ui/dot-pattern";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <Wrapper className="mt-28 bg-transparent">
      <Container>
        <DotPattern
          width={16}
          height={16}
          cx={1}
          cy={1}
          cr={1 / 2}
          className={cn(
            "-z-10 h-2/3 [mask-image:linear-gradient(to_bottom,white,transparent,transparent)]",
          )}
        />
        <div className="mx-auto py-20">
          <h1 className="text-4xl font-bold">Hello, I&apos;m Wenyang Lu</h1>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Hero;
