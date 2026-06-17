"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Baby, Droplets, Heart, Sparkles, Moon, ZoomIn } from "lucide-react"
import { CloudsBackground } from "@/components/clouds-background"

const bundles = [
  {
    id: "medela-inicio",
    title: "Mamá en el Aire ✈️",
    brand: "Medela",
    description: "Pensado para mamás que pasan gran parte del tiempo viajando. Este kit ayuda a extraer, almacenar y transportar leche de forma práctica durante jornadas largas o vuelos. \n\nIncluye:\n- Extractor Manual Harmony\n- Hielera para Leche Materna\n- Bolsas de Almacenamiento Easy Pour 50pzs\n- Bolsas Esterilizadoras Quick Clean",
    stage: "Prenatal - Primeras semanas",
    icon: Baby,
    image: "/kit-mama-aire.png",
    highlight: false,
  },
  {
    id: "torre-de-control",
    title: "Torre de Control 🛫",
    brand: "Medela",
    description: "Pensado para mamás que pasan jornadas en oficina o lejos de su bebé y buscan mantener su rutina de lactancia de forma cómoda y práctica.\n\nIncluye:\n- Extractor de Leche Eléctrico Solo\n- Bustier para Extracción Manos Libres",
    stage: "Regreso al trabajo",
    icon: Sparkles,
    image: "/kit-torre.png",
    highlight: true,
  },
  {
    id: "zen",
    title: "Cabina Zen ☁️",
    brand: "Biolacta",
    description: "Enfocado en confort, sensibilidad y comodidad durante la lactancia. Ayuda a hacer esta etapa mucho más cómoda físicamente.\n\nIncluye:\n- Parches Ultratranspirables 60 pzs\n- Lanolina Purelan para Pezones\n- Pezonera con Estuche\n- Kit para Pezones Irritados\n- Compresas de Calor Instantáneo\n- Consulta de Lactancia",
    stage: "Almacenamiento",
    icon: Droplets,
    image: "/kit-zen.png",
    highlight: false,
  },
  {
    id: "primeros dias",
    title: "Primeros Días en Tierra 🤍",
    brand: "Frida MOM",
    description: "Pensado para la recuperación posparto y comodidad física durante los primeros días después del nacimiento del bebé.\n\nIncluye:\n-Calzones Posparto Tipo Short\n- Toallas Femeninas de Frío Instantáneo\n- Recubrimientos Perineales para Toalla Femenina\n- Espuma para el Perineo",
    stage: "Cuidado personal",
    icon: Heart,
    image: "/kit-tierra.png",
    highlight: false,
  },
  {
    id: "primer-despegue",
    title: "Mi Primer Despegue 👶",
    brand: "Medela",
    description: "Kit diseñado para mamás que necesitan acompañamiento, apoyo y herramientas básicas para iniciar lactancia.\n\nIncluye:\n- Consulta Lactancia primera vez\n- Consulta de seguimiento\n- Extractor Manual Harmony",
    stage: "Inicio lactancia",
    icon: Moon,
    image: "/primer-despegue.png",
    highlight: false,
  },
  {
    id: "arranca-vuelo",
    title: "Arranca el vuelo",
    brand: "Medela + FridaMOM",
    description: "Kit que combina herramientas prácticas para la lactancia y una ayuda de confort para esta etapa, junto con acompañamiento profesional.\n\nIncluye:\n- Recolector de Leche Materna\n- Kit de Supervivencia para la Lactancia\n- Consulta de Lactancia",
    stage: "Inicio lactancia",
    icon: Moon,
    image: "/arranca-vuelo.png",
    highlight: false,
  },
  {
    id: "nocturno",
    title: "Ruta Nocturna",
    brand: "Medela + Frida MOM",
    description: "Pensado para mamás que buscan hacer su experiencia de lactancia más cómoda. Este kit combina herramientas prácticas de extracción y limpieza, junto con productos para dar confort y acompañamiento profesional.\n\nIncluye:\n- Extractor Manual Harmony\n- Bolsas Esterilizadoras Quick Clean \n-Kit para Pezones Irritados\n-Consulta personalizada lactancia",
    stage: "Lactancia nocturna",
    icon: Moon,
    image: "/kit-nocturno.png",
    highlight: false,
  },
  {
    id: "regreso-cabina",
    title: "Regreso a Cabina 💼",
    brand: "Medela + Frida MOM",
    description: "Diseñado para brindar mayor comodidad durante el posparto y acompañar a la mamá en sus primeros pasos de lactancia. \n\nIncluye:\n- Calzones Posparto Tipo Short\n- Extractor Manual Harmony\n- Bolsas de Almacenamiento para Leche Materna 25pzs\n- Consulta personalizada lactancia",
    stage: "Posparto",
    icon: Moon,
    image: "/kit-cabina.png",
    highlight: false,
  },
  {
    id: "maternidad-turbulencia",
    title: "Maternidad sin Turbulencia 💫",
    brand: "Medela + Frida MOM",
    description: "Pensado para mamás que buscan una experiencia de lactancia confortable, ayudando a prevenir molestias como ductos tapados, inflamación o incomodidad durante esta etapa.\n\nIncluye:\n- Compresas de Calor Instantáneo\n- Recolector de Leche Materna\n- Masajeador 2 en 1 para Lactancia\n- Consulta personalizada lactancia",
    stage: "Posparto",
    icon: Moon,
    image: "/kit-turbulencia.png",
    highlight: false,
  },
]

interface BundlesSectionProps {
  onSelectBundle: (bundleId: string) => void
}

export function BundlesSection({ onSelectBundle }: BundlesSectionProps) {
  // Estado para controlar qué bundle estamos viendo en grande
  const [zoomedBundle, setZoomedBundle] = useState<typeof bundles[0] | null>(null)

  return (
    <section id="bundles" className="relative py-20 bg-white scroll-mt-20">
      <CloudsBackground />
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-[#8cd400]/15 text-[#0a241a] hover:bg-[#8cd400]/20">
            Elige tu kit
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#272d2d] mb-4">
            Kits de Lactancia
          </h2>
          <p className="text-lg text-muted-foreground">
            Selecciona el kit que mejor se adapte a tu etapa y necesidades. Cada kit ha sido cuidadosamente diseñado para acompañarte en tu viaje de lactancia.
          </p>
        </div>

        {/* Bundles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {bundles.map((bundle) => {
            const IconComponent = bundle.icon
            return (
              <Card
                key={bundle.id}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  bundle.highlight ? "ring-2 ring-[#38ac49] ring-offset-2" : ""
                }`}
              >
                {bundle.highlight && (
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-[#38ac49] text-white shadow-sm">Recomendado</Badge>
                  </div>
                )}
                
                {/* 1. SECCIÓN DE IMAGEN (AHORA CLICKABLE CON EFECTO LUPA) */}
                <div 
                  className="relative h-64 sm:h-72 bg-[#f8faf8] flex items-center justify-center overflow-hidden group cursor-pointer"
                  onClick={() => setZoomedBundle(bundle)}
                >
                  <Image 
                    src={bundle.image} 
                    alt={`Imagen de ${bundle.title}`} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay oscuro y lupa que aparecen al pasar el mouse */}
                  <div className="absolute inset-0 bg-[#0a241a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <div className="bg-white rounded-full p-3 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ZoomIn className="w-6 h-6 text-[#38ac49]" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs border-[#0a241a]/20 text-[#0a241a]">
                      {bundle.brand}
                    </Badge>
                    <Badge variant="secondary" className="text-xs bg-[#8cd400]/15 text-[#0a241a]">
                      {bundle.stage}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-[#272d2d]">{bundle.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {bundle.description}
                  </CardDescription>
                </CardContent>

                <CardFooter>
                  <Button
                    onClick={() => onSelectBundle(bundle.id)}
                    className="w-full bg-[#38ac49] hover:bg-[#2d9a3d] text-white transition-colors"
                  >
                    Seleccionar este Bundle
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>

      {/* 2. MODAL (DIALOG) PARA MOSTRAR LA IMAGEN EN GRANDE */}
      <Dialog open={!!zoomedBundle} onOpenChange={(open) => !open && setZoomedBundle(null)}>
        <DialogContent className="max-w-4xl w-[95vw] h-[85vh] p-0 bg-white overflow-hidden flex flex-col rounded-2xl">
          <DialogHeader className="p-4 border-b shrink-0">
            <DialogTitle className="text-2xl font-bold text-[#272d2d]">
              {zoomedBundle?.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="relative flex-1 w-full bg-[#f8faf8]">
            {zoomedBundle && (
              <Image 
                src={zoomedBundle.image}
                alt={`Vista detallada de ${zoomedBundle.title}`}
                fill
                className="object-contain p-4 md:p-8"
                sizes="100vw"
                priority // Carga la imagen grande de inmediato
              />
            )}
          </div>
          
          {/* Botón rápido abajo por si la mamá quiere seleccionarlo desde aquí */}
          <div className="p-4 bg-white border-t shrink-0 flex justify-end">
             <Button
                onClick={() => {
                  if (zoomedBundle) {
                    onSelectBundle(zoomedBundle.id);
                    setZoomedBundle(null); // Cierra el modal y manda a la usuaria al formulario
                  }
                }}
                className="bg-[#38ac49] hover:bg-[#2d9a3d] text-white"
              >
                Seleccionar este Bundle
              </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}