import { Button } from "../ui/button";
import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
        Hey <span className="text-blue-500">there!</span>
        <span className="block sm:mt-4">Turning Ideas into Code</span>
      </h1>

      <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
        Passionate about building beautiful web applications with modern
        technologies. Specialized in React, TypeScript, and Node.js development.
      </p>

      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button
          className="flex w-[180px] items-center gap-2 bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 sm:w-auto"
          size="lg"
        >
          <Icon icon="tabler:download" className="h-4 w-4" />
          Download CV
        </Button>

        <Button
          variant="outline"
          className="w-[200px] px-6 py-3 sm:w-auto"
          size="lg"
        >
          View Projects
        </Button>
      </div>
    </div>
  );
};

export default Hero;
