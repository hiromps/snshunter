import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import EasyMode from "@/components/EasyMode";
import Workflow from "@/components/Workflow";
import StatsMarquee from "@/components/StatsMarquee";
import NicheExplorer from "@/components/NicheExplorer";
import LogoCloud from "@/components/LogoCloud";
import FeatureGrid from "@/components/FeatureGrid";
import Testimonials from "@/components/Testimonials";
import ComparisonTable from "@/components/ComparisonTable";
import FaqAccordion from "@/components/FaqAccordion";
import FinalCta from "@/components/FinalCta";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PainPoints />
        <EasyMode />
        <Workflow />
        <StatsMarquee />
        <div className="bg-white pb-2 pt-6 text-center">
          <p className="mx-auto max-w-2xl px-6 font-display text-3xl text-ink sm:text-4xl">
            we vetted millions of creators so you don&apos;t have to
          </p>
        </div>
        <NicheExplorer />
        <LogoCloud />
        <FeatureGrid />
        <Testimonials />
        <ComparisonTable />
        <FaqAccordion />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
