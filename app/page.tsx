import CountriesSuggestion from "./components/CountriesSuggestions";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full">
      <Hero />
      <CountriesSuggestion />
    </div>
  );
}
