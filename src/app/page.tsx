"use client";

import FullPageLightning from "@/components/ui/FullPageLightning";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import FloatingCard from "@/components/ui/FloatingCard";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SystemShowcase from "@/components/SystemShowcase";
import Problems from "@/components/Problems";
import Modules from "@/components/Modules";
import Benefits from "@/components/Benefits";
import WhyCloudConta from "@/components/WhyCloudConta";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const IMG = {
  raio: "https://images.pexels.com/photos/9780705/pexels-photo-9780705.jpeg?auto=compress&w=1920",
  nuvensEscuras: "https://images.unsplash.com/photo-1612417208566-9324071a3d55?w=1920&q=80",
  nuvensVolumetricas: "https://plus.unsplash.com/premium_photo-1661962488789-5aff231911bd?w=1920&q=80",
  nuvensDramaticas: "https://images.unsplash.com/photo-1594156596782-656c93e4d504?w=1920&q=80",
  tempestade: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=1920&q=80",
};

export default function Home() {
  return (
    <>
      {/* Fixed backgrounds — particles + lightning */}
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
            <FloatingCard bgImage={IMG.raio}>
              <SystemShowcase />
            </FloatingCard>

            <FloatingCard bgImage={IMG.nuvensEscuras}>
              <Problems />
            </FloatingCard>

            <FloatingCard bgImage={IMG.nuvensVolumetricas}>
              <Modules />
            </FloatingCard>

            <FloatingCard bgImage={IMG.nuvensDramaticas}>
              <Benefits />
            </FloatingCard>

            <FloatingCard bgImage={IMG.tempestade}>
              <WhyCloudConta />
            </FloatingCard>

            <FloatingCard>
              <Testimonials />
            </FloatingCard>

            <FloatingCard bgImage={IMG.raio}>
              <Pricing />
            </FloatingCard>

            <FloatingCard>
              <FAQ />
            </FloatingCard>

            <FloatingCard bgImage={IMG.nuvensEscuras}>
              <CTA />
            </FloatingCard>
          </div>

          <Footer />
        </main>
      </div>
    </>
  );
}
