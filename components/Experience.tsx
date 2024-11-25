"use client";

import Container from "./shared/Container";
import Wrapper from "./shared/Wrapper";
import DotBackground from "./shared/DotBackground";

const Experience = () => {
  return (
    <Wrapper className="mt-28 bg-transparent">
      <Container>
        <DotBackground />
        <h2 className="text-3xl font-bold">Experience</h2>
      </Container>
    </Wrapper>
  );
};

export default Experience;
