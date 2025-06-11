import Container from "../shared/Container";
import Wrapper from "../shared/Wrapper";
import Hero from "./Hero";
import Offerings from "./Offerings";
import DotPattern from "../ui/dot-pattern";
import { cn } from "@/lib/utils";

const Home = () => {
  return (
    <Wrapper className="mt-28 bg-transparent">
      {/* Main Section */}
      <Container>
        <section className="mb-12 flex flex-col gap-12">
          <Hero />
          <Offerings />
        </section>
      </Container>
      {/* Background Pattern */}
      <DotPattern
        width={16}
        height={16}
        cx={1}
        cy={1}
        cr={1 / 2}
        className={cn(
          "-z-10 h-2/3",
          "md:mask-[linear-gradient(to_bottom,white,transparent,transparent)]",
          "mask-[linear-gradient(to_bottom,white_0%,transparent_33%,transparent_100%)]",
        )}
      />
    </Wrapper>
  );
};

export default Home;
