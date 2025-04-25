import CountriesSuggestion from "./components/CountriesSuggestions";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import FinalCta from "./components/FinalCta";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

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
