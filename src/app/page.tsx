import { HeroHome } from "@/components/HeroHome";
import { LeadingCompaniesHome } from "@/components/LeadingCompaniesHome";
import { ServicesOfferHome } from "@/components/ServicesOfferHome";
import { WeMake } from "@/components/WeMake";

export default function Home() {
  return (
    <main className="">
      <HeroHome></HeroHome>
      <ServicesOfferHome></ServicesOfferHome>
      <LeadingCompaniesHome></LeadingCompaniesHome>
      <WeMake></WeMake>
    </main>
  );
}
