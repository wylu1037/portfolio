import Container from "@/components/shared/Container";
import Wrapper from "@/components/shared/Wrapper";
import { cn } from "@/lib/utils";
import GridPattern from "../ui/grid-pattern";

const About = () => {
  return (
    <Wrapper className="mt-28 bg-transparent">
      <Container>
        <section>
          <h2 className="text-2xl font-bold">About Me</h2>
          <h2 className="text-2xl font-bold">Work Experience</h2>
          <h2 className="text-2xl font-bold">Education</h2>
          <h2 className="text-2xl font-bold">Skills</h2>
        </section>
        <GridPattern
          width={24}
          height={24}
          x={-1}
          y={-1}
          className={cn(
            "-z-10",
            "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)]",
          )}
        />
      </Container>
    </Wrapper>
  );
};

export default About;
