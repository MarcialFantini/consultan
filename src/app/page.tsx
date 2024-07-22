import { Footer } from "@/components/Footer/Footer";
import { HeroHome } from "@/components/HeroHome";
import { LeadingCompaniesHome } from "@/components/LeadingCompaniesHome";
import { ServicesOfferHome } from "@/components/ServicesOfferHome";
import { WayOfBuilding } from "@/components/WayOfBuilding";
import { WeMake } from "@/components/WeMake";

export default function Home() {
  return (
    <main className="">
      <HeroHome></HeroHome>
      <ServicesOfferHome></ServicesOfferHome>
      <LeadingCompaniesHome></LeadingCompaniesHome>
      {/* <CustomersWorkingWithUs></CustomersWorkingWithUs> */}
      <WeMake></WeMake>
      <WayOfBuilding></WayOfBuilding>
      <Footer />
    </main>
  );
}
