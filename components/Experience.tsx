"use client";

import React, { useState } from "react";
import Container from "./shared/Container";
import Wrapper from "./shared/Wrapper";
import NumberFlow from "@number-flow/react";
import { Button } from "./ui/button";

const Experience = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const minutes = Math.floor(seconds / 60);
  const displatSeconds = seconds % 60;

  return (
    <Wrapper className="mt-28">
      <Container>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-4">
            <NumberFlow
              value={minutes}
              className="text-4xl font-semibold"
              format={{ notation: "compact", minimumIntegerDigits: 2 }}
              locales={"en-US"}
            />
            <span className="text-4xl font-semibold">:</span>
            <NumberFlow
              value={displatSeconds}
              className="text-4xl font-semibold"
              format={{ notation: "compact", minimumIntegerDigits: 2 }}
              locales={"en-US"}
            />
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => setSeconds(seconds + 1)} variant="default">
              Increse
            </Button>
            <Button onClick={() => setSeconds(seconds - 1)} variant="outline">
              Decrese
            </Button>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Experience;
