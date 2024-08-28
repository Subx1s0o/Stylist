import AboutMeSection from "@/components/sections/home/AboutMeSection";
import HeroSection from "@/components/sections/home/HeroSection";
import PortfolioSection from "@/components/sections/home/PortfolioSection";
import QuoteSection from "@/components/sections/home/QuoteSection";
import ReviewsSection from "@/components/sections/home/ReviewsSection";
import ServicesSection from "@/components/sections/home/ServicesSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <QuoteSection />
      <ServicesSection />
      <PortfolioSection />
      <ReviewsSection />
    </>
  );
}
