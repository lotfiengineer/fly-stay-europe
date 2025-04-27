import CountriesSuggestion from "./components/CountriesSuggestions";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Reviews from "./components/Reviews";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex w-full flex-col justify-center">
      <Hero />
      <CountriesSuggestion />

      <HowItWorks />

      <WhyChooseUs />
      <Reviews />
      <FinalCta />
      <Footer />
    </div>
  );
}
