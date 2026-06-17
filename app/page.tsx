"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BundlesSection } from "@/components/bundles-section"
import { OrderForm } from "@/components/order-form"
import { ResourcesSection } from "@/components/resources-section"
import { CouponsSection } from "@/components/coupons-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [selectedBundle, setSelectedBundle] = useState<string>("")

  const handleBundleSelect = (bundleId: string) => {
    setSelectedBundle(bundleId)
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BundlesSection onSelectBundle={handleBundleSelect} />
      <OrderForm selectedBundle={selectedBundle} onBundleChange={setSelectedBundle} />
      <ResourcesSection />
      <CouponsSection />
      <Footer />
    </main>
  )
}
