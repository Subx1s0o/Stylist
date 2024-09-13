import AboutMeSection from "@/components/sections/AboutMeSection";
import AdviceSection from "@/components/sections/AdviceSection";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import QuoteSection from "@/components/sections/QuoteSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <QuoteSection />
      <ServicesSection />
      <PortfolioSection />
      <ReviewsSection />
      <AdviceSection />
    </>
  );
}
