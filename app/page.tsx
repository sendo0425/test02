import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services"
import { AboutSection } from "@/components/sections/about"
import { PricingSection } from "@/components/sections/pricing"
import { CareersSection } from "@/components/sections/careers"
import { ContactSection } from "@/components/sections/contact"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PricingSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
