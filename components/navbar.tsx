"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#bundles", label: "Bundles" },
  { href: "#formulario", label: "Formulario" },
  { href: "#recursos", label: "Recursos" },
  { href: "#cupones", label: "Cupones" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              {/* Imagen en lugar del ícono */}
              <img 
                src="/viva-sofma/viva.png" 
                alt="Logo Viva Aerobús" 
                className="w-10 h-10 rounded-lg object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#272d2d] leading-tight">
                  Viva Aerobús
                </span>
                <span className="text-xs text-[#38ac49] font-medium">
                  Portal de Lactancia
                </span>
              </div>
            </div>
          </Link>

          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#272d2d] hover:text-[#38ac49] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#272d2d] hover:text-[#38ac49] transition-colors px-2 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 px-2 pt-2 border-t border-border">
                <span className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">Medela</span>
                <span className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">Frida MOM</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
