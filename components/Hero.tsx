import Container from "./shared/Container";
import Wrapper from "./shared/Wrapper";

const Hero = () => {
  return (
    <Wrapper className="bg-transparent">
      <Container>
        <div className="mx-auto py-20">
          <h1 className="text-4xl font-bold">Hello, I&apos;m Wenyang Lu</h1>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Hero;
