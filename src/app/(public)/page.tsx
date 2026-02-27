import { Hero } from "@/components/sections/hero";
import { Pillars } from "@/components/sections/pillars";
import { Stats } from "@/components/sections/stats";
import { Events } from "@/components/sections/events";
import { MemberShowcase } from "@/components/sections/member-showcase";
import { Partners } from "@/components/sections/partners";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { JoinCta } from "@/components/sections/join-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <Stats />
      <Events />
      <MemberShowcase />
      <Partners />
      <Testimonials />
      <Faq />
      <JoinCta />
    </>
  );
}
