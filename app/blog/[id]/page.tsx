import { notFound } from "next/navigation"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Clock, FileText, Download, CheckCircle } from "lucide-react"
import { CloudsBackground } from "@/components/clouds-background"

interface BlogPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { id } = await params
  const post = blogPosts.find((p) => p.id === id)
  
  if (!post) {
    return {
      title: "Artículo no encontrado | Portal de Lactancia",
    }
  }

  return {
    title: `${post.title} | Portal de Lactancia Viva Aerobús`,
    description: post.excerpt,
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = await params
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                {/* Imagen en lugar del ícono */}
                <img 
                  src="/viva.png" 
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
            <Button
              asChild
              variant="outline"
              className="border-[#38ac49] text-[#38ac49] hover:bg-[#38ac49] hover:text-white"
            >
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al inicio
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="relative">
        <CloudsBackground />
        
        <article className="relative z-10 container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto">
            {/* Article Header */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-[#38ac49]/10 text-[#38ac49] hover:bg-[#38ac49]/20">
                  {post.category}
                </Badge>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {post.readTime} de lectura
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#272d2d] leading-tight mb-4 text-balance">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {post.excerpt}
              </p>
            </div>

            {/* Problem Section */}
            <section className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold text-sm">?</span>
                </div>
                <h2 className="text-xl font-semibold text-[#272d2d]">El Problema</h2>
              </div>
              <div className="bg-red-50/50 border border-red-100 rounded-xl p-6">
                <p className="text-[#272d2d] leading-relaxed">
                  {post.problem}
                </p>
              </div>
            </section>

            {/* Solution Section */}
            <section className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#38ac49]/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-[#38ac49]" />
                </div>
                <h2 className="text-xl font-semibold text-[#272d2d]">La Solución</h2>
              </div>
              <div className="bg-[#38ac49]/5 border border-[#38ac49]/20 rounded-xl p-6">
                <p className="text-[#272d2d] leading-relaxed">
                  {post.solution}
                </p>
              </div>
            </section>

            {/* Content Points */}
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-[#272d2d] mb-6">Puntos Clave</h2>
              <div className="space-y-4">
                {post.content.map((point, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 bg-[#f8faf8] rounded-xl border border-border"
                  >
                    <div className="w-8 h-8 bg-[#38ac49] rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-[#272d2d] leading-relaxed pt-1">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Dynamic PDF Viewer */}
            {/* Dynamic PDF Viewer */}
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-[#38ac49]" />
                <h2 className="text-xl font-semibold text-[#272d2d]">Material de apoyo</h2>
              </div>
              {/* Contenedor más alto: 600px en móvil, 800px en tablet, 1000px en escritorio */}
              <div className="w-full h-[600px] md:h-[800px] lg:h-[1000px] rounded-xl overflow-hidden border border-border bg-[#f8faf8] shadow-inner">
                <iframe
                  // Aquí agregamos los parámetros mágicos para ocultar menús
                  src={`${post.downloadable.pdfUrl}#toolbar=0&navpanes=0`}
                  title={post.downloadable.pdfTitle}
                  className="w-full h-full"
                />
              </div>
            </section>

            {/* Downloadable PDF Card */}
            <section className="mb-12">
              <Card className="border-2 border-dashed border-[#38ac49]/30 hover:border-[#38ac49] transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-[#f8faf8] rounded-xl">
                    <div className="w-14 h-14 bg-[#38ac49]/10 rounded-lg flex items-center justify-center shrink-0">
                      <FileText className="w-7 h-7 text-[#38ac49]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-[#272d2d]">{post.downloadable.pdfTitle}</p>
                      <p className="text-sm text-muted-foreground">{post.downloadable.pdfSize} - PDF</p>
                    </div>
                    <Button asChild className="bg-[#38ac49] hover:bg-[#2d9a3d] text-white shrink-0 w-full sm:w-auto">
                      <a href={post.downloadable.pdfUrl} download>
                        <Download className="w-4 h-4 mr-2" />
                        Descargar PDF
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between pt-8 border-t border-border">
              <Button
                asChild
                variant="outline"
                className="border-[#272d2d] text-[#272d2d] hover:bg-[#272d2d] hover:text-white"
              >
                <Link href="/#recursos">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver a recursos
                </Link>
              </Button>
              <Button
                asChild
                className="bg-[#38ac49] hover:bg-[#2d9a3d] text-white"
              >
                <Link href="/#bundles">
                  Explorar bundles
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </main>

      {/* Simple Footer */}
      <footer className="bg-[#272d2d] py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Viva Aerobús. Uso exclusivo interno.
          </p>
        </div>
      </footer>
    </div>
  )
}
