import Container from "@/components/shared/Container";
import Wrapper from "@/components/shared/Wrapper";
import { cn } from "@/lib/utils";
import GridPattern from "../magicui/grid-pattern";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skill from "./Skill";
import Image from "next/image";
import { TypingAnimation } from "@/components/magicui/typing-animation";

const About = () => {
  return (
    <Wrapper className="mt-28 bg-transparent">
      <Container>
        <section className="mb-12 flex flex-col gap-12">
          <Introduction />
          <WorkExperience />
          <Education />
          <Skill />
        </section>
      </Container>
      {/* Background Pattern */}
      <GridPattern
        width={24}
        height={24}
        x={-1}
        y={-1}
        className={cn(
          "-z-10",
          "md:mask-[linear-gradient(to_bottom,white,transparent,transparent)]",
          "mask-[linear-gradient(to_bottom,white_0%,transparent_33%,transparent_100%)]",
        )}
      />
    </Wrapper>
  );
};

const Introduction = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-4">
          <TypingAnimation className="text-start text-5xl font-bold text-black dark:text-white">
            Hi, I&apos;m Wenyang Lu! 👋
          </TypingAnimation>
          <p className="text-foreground max-w-2xl text-lg">
            I&apos;m a full-stack engineer with a passion for building products
            that are both functional and aesthetically pleasing.
          </p>
        </div>
        <Image
          src="/avatar.png"
          alt="Wenyang Lu"
          width={120}
          height={120}
          className="self-start"
        />
      </div>

      <h2 className="text-foreground text-2xl font-bold">About Me</h2>
      <div className="text-muted-foreground space-y-4 text-justify">
        <p className="leading-relaxed">
          After completing my Master&apos;s degree in Summer 2020, I began my
          professional journey at a traditional internet company in Wuhan.
          There, I contributed to building smart parking systems and helped
          develop the company&apos;s{" "}
          <span className="font-semibold italic">SaaS</span> platform.
        </p>

        <p className="leading-relaxed">
          Late 2021 marked a pivotal moment in my career when I relocated to
          Hefei and dove into{" "}
          <span className="bg-linear-to-r from-blue-700 to-blue-500 bg-clip-text font-semibold text-transparent">
            blockchain
          </span>{" "}
          development. This transition introduced me to the exciting world of{" "}
          <span className="bg-linear-to-r from-blue-700 to-blue-500 bg-clip-text font-semibold text-transparent">
            Web3
          </span>
          , expanding my programming expertise beyond Java to include{" "}
          <span className="text-foreground font-semibold italic">Go</span>,{" "}
          <span className="text-foreground font-semibold italic">
            TypeScript
          </span>
          , and{" "}
          <span className="text-foreground font-semibold italic">Rust</span>.
        </p>

        <p className="leading-relaxed">
          Currently, I&apos;m focusing on developing my full-stack capabilities
          with a particular interest in{" "}
          <span className="bg-linear-to-r from-blue-700 to-blue-500 bg-clip-text font-semibold text-transparent">
            Artificial Intelligence
          </span>
          . My ultimate goal is to establish myself as a{" "}
          <span className="text-foreground decoration-muted-foreground font-medium italic underline decoration-wavy underline-offset-2">
            TypeScript Full-Stack Engineer
          </span>{" "}
          specializing in AI technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
