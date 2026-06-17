import { ChevronDown, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8faf8] to-white" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#8cd400]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#38ac49]/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8cd400]/15 rounded-full mb-8">
            <Heart className="w-4 h-4 text-[#38ac49]" />
            <span className="text-sm font-medium text-[#0a241a]">Beneficio exclusivo para colaboradoras</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#272d2d] leading-tight mb-6 text-balance">
            Tu copiloto de lactancia
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
            Encuentra herramientas, recursos y apoyo para hacer de tu experiencia de lactancia un viaje más cómodo. Elige tu kit ideal para acompañarte desde el despegue de esta aventura.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="bg-[#38ac49] hover:bg-[#2d9a3d] text-white px-8 py-6 text-lg rounded-xl"
            >
              <a href="#bundles">Explorar Kits</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#272d2d] text-[#272d2d] hover:bg-[#272d2d] hover:text-white px-8 py-6 text-lg rounded-xl"
            >
              <a href="#recursos">Ver Recursos</a>
            </Button>
          </div>

          {/* Partner brands */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <span className="text-sm text-muted-foreground">En colaboración con:</span>
            <div className="flex items-center gap-6">
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-border">
                <img src="/viva-sofma/medela.png" alt="Logo-Medela" width="150"/>
              </div>
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-border">
                <img src="/viva-sofma/biolacta.png" alt="Logo-Biolacta" width="150"/>
              </div>
              <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-border">
                <img src="/viva-sofma/frida-mom.png" alt="Logo-FridaMom" width="150"/>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <a
            href="#bundles"
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-[#38ac49] transition-colors"
            aria-label="Desplazarse hacia abajo"
          >
            <span className="text-sm">Descubre más</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
