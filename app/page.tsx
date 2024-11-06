import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <div className="mt-20 flex justify-center">
        <div className="motion-preset-confetti flex size-6 items-center justify-center">
          🎉
        </div>
      </div>
      <Header title="Home" />
      <Hero />
    </div>
  );
}
