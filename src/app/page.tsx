"use client";

import FullPageLightning from "@/components/ui/FullPageLightning";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import FloatingCard from "@/components/ui/FloatingCard";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Modules from "@/components/Modules";
import Benefits from "@/components/Benefits";
import WhyCloudConta from "@/components/WhyCloudConta";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed backgrounds */}
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>
      <FullPageLightning />

      {/* Page content */}
      <div className="relative z-[2]">
        <Header />
        <main>
          <Hero />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pb-12">
            <FloatingCard className="p-0 overflow-hidden">
              <Problems />
            </FloatingCard>

            <FloatingCard className="p-0 overflow-hidden" delay={0.1}>
              <Modules />
            </FloatingCard>

            <FloatingCard className="p-0 overflow-hidden" delay={0.1}>
              <Benefits />
            </FloatingCard>

            <FloatingCard className="p-0 overflow-hidden" delay={0.1}>
              <WhyCloudConta />
            </FloatingCard>

            <FloatingCard className="p-0 overflow-hidden" delay={0.1}>
              <Testimonials />
            </FloatingCard>

            <FloatingCard className="p-0 overflow-hidden" delay={0.1}>
              <Pricing />
            </FloatingCard>

            <FloatingCard className="p-0 overflow-hidden" delay={0.1}>
              <FAQ />
            </FloatingCard>

            <FloatingCard className="p-0 overflow-hidden" delay={0.1}>
              <CTA />
            </FloatingCard>
          </div>

          <Footer />
        </main>
      </div>
    </>
  );
}
