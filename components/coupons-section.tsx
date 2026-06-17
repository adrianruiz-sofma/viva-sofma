"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Copy, Ticket, Sparkles } from "lucide-react"

// 1. CREAMOS UNA LISTA CON LA INFORMACIÓN ÚNICA DE CADA CUPÓN
const couponsData = [
  {
    id: 1,
    brand: "Medela",
    discount: "15% OFF",
    code: "VIVAMEDELA",
    url: "https://medelamx.com/", // <-- Aquí pones el link de la primera tienda
    bgClass: "bg-gradient-to-r from-[#a8e063] to-[#56ab2f]",
  },
  {
    id: 2,
    brand: "Frida MOM",
    discount: "15% OFF",
    code: "VIVAFRIDA",
    url: "https://www.fridamx.com/", // <-- Aquí el link de la segunda tienda
    bgClass: "bg-gradient-to-r from-white to-gray-200",
  },
  {
    id: 3,
    brand: "Biolacta",
    discount: "15% OFF",
    code: "VIVABIOLACTA",
    url: "https://biolacta.com.mx/", // <-- Aquí el link de la tercera tienda
    bgClass: "bg-gradient-to-r from-red-400 to-red-600",
  }
]

export function CouponsSection() {
  // 2. CAMBIAMOS EL ESTADO PARA SABER EXACTAMENTE QUÉ CUPÓN SE COPIÓ (POR SU ID)
  const [copiedId, setCopiedId] = useState<number | null>(null)

  // 3. NUEVA FUNCIÓN QUE RECIBE EL CÓDIGO Y LA URL ESPECÍFICA
  const handleCopyAndRedirect = (id: number, code: string, url: string) => {
    // Copiar al portapapeles
    navigator.clipboard.writeText(code)
    
    // Mostrar el mensaje de "¡Copiado!" solo en este botón
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)

    // Redirigir a la página deseada en una nueva pestaña
    window.open(url, "_blank")
  }

  return (
    <section id="cupones" className="py-20 bg-[#0a241a] scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-[#8cd400] text-[#0a241a] hover:bg-[#8cd400]/90">
            <Sparkles className="w-3 h-3 mr-1" />
            Exclusivo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tu maternidad también merece un vuelo más ligero
          </h2>
          <p className="text-lg text-white/70">
            Accede a descuentos exclusivos en marcas especializadas en lactancia y cuidado materno-infantil.
          </p>
        </div>

        {/* Coupon Cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 4. USAMOS UN .map() PARA CREAR LOS CUPONES AUTOMÁTICAMENTE */}
          {couponsData.map((coupon) => (
            <div key={coupon.id} className="relative">
              <div className="max-w-xl mx-auto">
                <div className="relative">
                  {/* Coupon ticket design */}
                  <div className={`${coupon.bgClass} rounded-2xl overflow-hidden shadow-2xl`}>
                    {/* Decorative notches */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-12 bg-[#0a241a] rounded-r-full" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-12 bg-[#0a241a] rounded-l-full" />
                    
                    <div className="px-10 py-8 md:px-10 md:py-10">
                      {/* Ticket header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <Ticket className="w-6 h-6 text-[#0a241a]" />
                          <span className="font-bold text-[#0a241a] uppercase tracking-wider text-xs">
                            Cupón Exclusivo
                          </span>
                        </div>
                        <Badge className="bg-[#0a241a] text-white text-xs">
                          {coupon.brand}
                        </Badge>
                      </div>

                      {/* Main discount */}
                      <div className="text-center mb-6">
                        <div className="text-5xl md:text-6xl font-black text-[#0a241a] leading-none mb-2">
                          {coupon.discount}
                        </div>
                        <p className="text-[#0a241a]/80 font-medium text-sm">
                          en la tienda oficial {coupon.brand}
                        </p>
                      </div>

                      {/* Dashed line separator */}
                      <div className="border-t-2 border-dashed border-[#0a241a]/30 my-6" />

                      {/* Coupon code */}
                      <div className="text-center">
                        <p className="text-xs text-[#0a241a]/70 mb-3 uppercase tracking-wide">
                          Código de descuento
                        </p>
                        <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur px-6 py-3 rounded-xl shadow-inner">
                          <span className="font-mono font-bold text-xl text-[#0a241a] tracking-wider">
                            {coupon.code}
                          </span>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 mt-8">
                        <Button
                          onClick={() => handleCopyAndRedirect(coupon.id, coupon.code, coupon.url)}
                          className="flex-1 bg-[#0a241a] hover:bg-[#0a241a]/90 text-white py-6"
                        >
                          {copiedId === coupon.id ? (
                            <>
                              <Check className="w-5 h-5 mr-2" />
                              ¡Copiado!
                            </>
                          ) : (
                            <>
                              <Copy className="w-5 h-5 mr-2" />
                              Copiar e ir a tienda
                            </>
                          )}
                        </Button>
                      </div>

                      {/* Terms */}
                      <p className="text-[10px] leading-tight text-[#0a241a]/60 text-center mt-4">
                        Válido en tienda oficial. No acumulable. Sujeto a disponibilidad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}