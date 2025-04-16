import CountriesSuggestion from "./components/CountriesSuggestions";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full">
      <Hero />
      <CountriesSuggestion />
      <HowItWorks />
    </div>
  );
}
