"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Gift, Send } from "lucide-react"

const bundleOptions = [
  { id: "mama-en-el-aire", name: "Kit Mamá en el Aire" },
  { id: "torre-de-control", name: "Kit Torre de Control" },
  { id: "cabina-zen", name: "Kit Cabina Zen" },
  { id: "dias-en-tierra", name: "Kit Primeros Dias en Tierra" },
  { id: "mi-primer-despegue", name: "Kit Mi Primer Despegue" },
  { id: "arranca-el-vuelo", name: "Kit Arranca el Vuelo" },
  { id: "ruta-nocturna", name: "Kit Ruta Nocturna" },
  { id: "regreso-a-cabina", name: "Kit Regreso a Cabina" },
  { id: "maternidad-sin-turbulencia", name: "Kit Maternidad sin Turbulencia" },
]

interface OrderFormProps {
  selectedBundle: string
  onBundleChange: (bundleId: string) => void
}

export function OrderForm({ selectedBundle, onBundleChange }: OrderFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    empleado: "",
    telefono: "",
    direccion: "",
    notas: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!acceptedTerms) return;
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzGhreDbbBPOwL8SZAZ8t8ZejKvqJDPAuGOWj16mYwy2-Rn-pQlGd0t-_mSODj1cpcqjg/exec"
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          nombre: formData.nombre,
          correo: formData.correo,
          empleado: formData.empleado,
          telefono: formData.telefono,
          direccion: formData.direccion,
          bundle: selectedBundle // Usamos el prop que viene de afuera
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true)
        // Opcional: Limpiar el formulario
        setFormData({ nombre: "", correo: "", empleado: "", telefono: "", direccion: "", notas: "" })
        window.location.href = "#cupones"
      } else {
        alert("Hubo un error al enviar tu solicitud. Intenta de nuevo.")
      }
    } catch (error) {
      console.error("Error enviando datos:", error)
      alert("Hubo un error de conexión.")
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section id="formulario" className="py-20 bg-[#f8faf8] scroll-mt-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center py-12">
            <CardContent className="space-y-6">
              <div className="w-20 h-20 bg-[#38ac49]/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-[#38ac49]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#272d2d] mb-2">
                  ¡Solicitud enviada con éxito!
                </h3>
                <p className="text-muted-foreground">
                  Tu regalo ha sido registrado. Recibirás un correo de confirmación con los detalles de envío.
                </p>
              </div>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-[#38ac49] text-[#38ac49] hover:bg-[#38ac49] hover:text-white"
              >
                Realizar otra solicitud
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="formulario" className="py-20 bg-[#f8faf8] scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#38ac49]/10 rounded-full mb-4">
              <Gift className="w-4 h-4 text-[#38ac49]" />
              <span className="text-sm font-medium text-[#0a241a]">Solicita tu regalo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#272d2d] mb-4">
              Regalo para mamá
            </h2>
            <p className="text-muted-foreground">
              Completa tus datos y nosotros nos encargaremos del resto. Recibe tu kit en la dirección indicada.
            </p>
          </div>

          {/* Form Card */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-[#272d2d]">Datos de envío</CardTitle>
              <CardDescription>
                Todos los campos son requeridos para procesar tu solicitud.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre completo */}
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-[#272d2d]">
                    Nombre completo
                  </Label>
                  <Input
                    id="nombre"
                    placeholder="María García López"
                    value={formData.nombre}
                    onChange={(e) => handleInputChange("nombre", e.target.value)}
                    required
                    className="border-border focus:border-[#38ac49] focus:ring-[#38ac49]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-[#272d2d]">
                    Correo Electrónico Institucional
                  </Label>
                  <Input
                    id="correo"
                    placeholder="maria.garcia@gmail.com"
                    value={formData.correo}
                    onChange={(e) => handleInputChange("correo", e.target.value)}
                    required
                    className="border-border focus:border-[#38ac49] focus:ring-[#38ac49]"
                  />
                </div>

                {/* Número de empleado */}
                <div className="space-y-2">
                  <Label htmlFor="empleado" className="text-[#272d2d]">
                    Número de empleado Viva
                  </Label>
                  <Input
                    id="empleado"
                    placeholder="VA-123456"
                    value={formData.empleado}
                    onChange={(e) => handleInputChange("empleado", e.target.value)}
                    required
                    className="border-border focus:border-[#38ac49] focus:ring-[#38ac49]"
                  />
                </div>

                {/* Teléfono */}
                <div className="space-y-2">
                  <Label htmlFor="telefono" className="text-[#272d2d]">
                    Teléfono
                  </Label>
                  <Input
                    id="telefono"
                    type="tel"
                    placeholder="+52 81 1234 5678"
                    value={formData.telefono}
                    onChange={(e) => handleInputChange("telefono", e.target.value)}
                    required
                    className="border-border focus:border-[#38ac49] focus:ring-[#38ac49]"
                  />
                </div>

                {/* Dirección de envío */}
                <div className="space-y-2">
                  <Label htmlFor="direccion" className="text-[#272d2d]">
                    Dirección de envío
                  </Label>
                  <Textarea
                    id="direccion"
                    placeholder="Calle, número, colonia, ciudad, estado, código postal"
                    value={formData.direccion}
                    onChange={(e) => handleInputChange("direccion", e.target.value)}
                    required
                    rows={3}
                    className="border-border focus:border-[#38ac49] focus:ring-[#38ac49] resize-none"
                  />
                </div>

                {/* Bundle Selection */}
                <div className="space-y-2">
                  <Label htmlFor="bundle" className="text-[#272d2d]">
                    Kit seleccionado
                  </Label>
                  <Select value={selectedBundle} onValueChange={onBundleChange} required>
                    <SelectTrigger className="border-border focus:border-[#38ac49] focus:ring-[#38ac49]">
                      <SelectValue placeholder="Selecciona un Kit" />
                    </SelectTrigger>
                    <SelectContent>
                      {bundleOptions.map((bundle) => (
                        <SelectItem key={bundle.id} value={bundle.id}>
                          {bundle.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {/* Disclaimer y Términos */}
                <div className="space-y-4 pt-4 border-t border-border">
                  <div className="space-y-2">
                    <Label className="text-[#272d2d] font-semibold">Términos y Condiciones</Label>
                    <div className="h-40 overflow-y-auto p-4 bg-white border border-border rounded-md text-sm text-muted-foreground space-y-3">
                      <p>
                        Al seleccionar la casilla de aceptación, declaro que he leído y comprendido los presentes Términos y Condiciones aplicables al beneficio del Kit de Lactancia otorgado por Viva.
                      </p>
                      <p>
                        Reconozco que este beneficio constituye un apoyo institucional otorgado exclusivamente a las personas trabajadoras que cumplan con los criterios de elegibilidad establecidos por la empresa, por lo que su otorgamiento y permanencia estarán sujetos a las condiciones previstas en la normativa interna aplicable.
                      </p>
                      <p>
                        Reconozco que el beneficio es de carácter personal e intransferible y me comprometo a utilizarlo exclusivamente para los fines para los que fue otorgado, absteniéndome de venderlo, cederlo, transferirlo, comercializarlo o destinarlo a un uso distinto al autorizado.
                      </p>
                      <p>
                        En caso de que Viva detecte un posible uso indebido, información falsa o cualquier incumplimiento a las condiciones aplicables al beneficio, la situación podrá ser revisada conforme a los procedimientos internos de la empresa, pudiendo adoptarse las medidas que resulten procedentes de conformidad con la normativa interna y la legislación aplicable.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-border text-[#38ac49] focus:ring-[#38ac49] cursor-pointer"
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none cursor-pointer text-[#272d2d]"
                      >
                        Acepto los Términos y Condiciones
                      </Label>
                    </div>
                  </div>
                </div>
                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={!acceptedTerms}
                  className="w-full bg-[#38ac49] hover:bg-[#2d9a3d] text-white py-6 text-lg rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Confirmar mi regalo
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
