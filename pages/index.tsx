import MainLayout from "components/layout/MainLayout";
import HeroSection from "components/page/homepage/HeroSection";
import MenuSection from "components/page/homepage/MenuSection";
import ReservationSection from "components/page/homepage/ReservationSection";
import SpecialDishesSection from "components/page/homepage/SpecialDishesSection";
import TeamSection from "components/page/homepage/TeamSection";
import TestemonialSection from "components/page/homepage/TestemonialSection";
import WelcomeSection from "components/page/homepage/WelcomeSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <WelcomeSection />
      <SpecialDishesSection />
      <MenuSection />
      <TestemonialSection />
      <TeamSection />
      <ReservationSection />
    </MainLayout>
  );
}
