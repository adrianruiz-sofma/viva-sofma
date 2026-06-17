import Link from "next/link"
import { Plane, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#272d2d] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#38ac49] rounded-lg flex items-center justify-center">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">Viva Aerobús</span>
                <span className="text-xs text-[#8cd400] font-medium">Portal de Lactancia</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Un beneficio exclusivo para nuestras colaboradoras. Acompañándote en cada etapa de tu maternidad.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#bundles" className="text-sm text-white/60 hover:text-[#8cd400] transition-colors">
                  Bundles de Lactancia
                </Link>
              </li>
              <li>
                <Link href="#formulario" className="text-sm text-white/60 hover:text-[#8cd400] transition-colors">
                  Solicitar Regalo
                </Link>
              </li>
              <li>
                <Link href="#recursos" className="text-sm text-white/60 hover:text-[#8cd400] transition-colors">
                  Recursos Educativos
                </Link>
              </li>
              <li>
                <Link href="#cupones" className="text-sm text-white/60 hover:text-[#8cd400] transition-colors">
                  Cupones Exclusivos
                </Link>
              </li>
            </ul>
          </div>

          {/* Partner brands */}
          <div>
            <h3 className="font-semibold text-white mb-4">Marcas colaboradoras</h3>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <span className="text-sm font-medium text-white">Medela</span>
              </div>
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <span className="text-sm font-medium text-white">Biolacta</span>
              </div>
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                <span className="text-sm font-medium text-white">Frida MOM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Heart className="w-4 h-4 text-[#38ac49]" />
              <span>Hecho con cariño para las mamás de Viva Aerobús</span>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-xs text-white/40 px-3 py-1 bg-white/5 rounded-full">
                Uso exclusivo interno
              </span>
              <div className="flex items-center gap-4 text-xs text-white/40">
                <Link href="#" className="hover:text-white/60 transition-colors">
                  Términos y condiciones
                </Link>
                <Link href="#" className="hover:text-white/60 transition-colors">
                  Aviso de privacidad
                </Link>
              </div>
            </div>
          </div>
          
          <p className="text-center text-xs text-white/30 mt-6">
            © {new Date().getFullYear()} Viva Aerobús. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
