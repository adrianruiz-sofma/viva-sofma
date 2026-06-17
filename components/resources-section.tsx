"use client"

import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { PlayCircle, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { CloudsBackground } from "@/components/clouds-background"
import { blogPosts, videos } from "@/lib/blog-data"
import Image from "next/image"

export function ResourcesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  
  // Estado para controlar qué video se está reproduciendo
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section id="recursos" className="relative py-20 bg-white scroll-mt-20">
      <CloudsBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-[#0a241a] text-white hover:bg-[#0a241a]/90">
            Centro de apoyo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#272d2d] mb-4">
            Recursos y Educación
          </h2>
          <p className="text-lg text-muted-foreground">
            Desde el despegue hasta el aterrizaje, hay algunas turbulencias y escalas. Accede a recursos diseñados para brindarte información, confianza y apoyo ¡Buen viaje!
          </p>
        </div>

        {/* Video Carousel */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-[#38ac49]" />
              <h3 className="text-xl font-semibold text-[#272d2d]">Videos Educativos</h3>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                className="h-9 w-9 rounded-full border-[#38ac49]/30 hover:bg-[#38ac49]/10 hover:border-[#38ac49]"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Anterior</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                className="h-9 w-9 rounded-full border-[#38ac49]/30 hover:bg-[#38ac49]/10 hover:border-[#38ac49]"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Siguiente</span>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {videos.map((video) => (
                <Card
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="flex-shrink-0 w-[300px] md:w-[350px] overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow border-none"
                >
                  {/* --- INICIO DE LA SECCIÓN DEL THUMBNAIL --- */}
                  <div className="relative aspect-video overflow-hidden bg-[#0a241a]">
                    
                    {/* 1. La imagen de portada */}
                    <Image 
                      src={video.thumbnail} 
                      alt={`Portada de ${video.title}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 300px, 350px"
                    />
                    
                    {/* 2. Filtro oscuro sutil para que el texto y el botón se lean bien */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                    {/* 3. Botón de Play al centro */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/40 group-hover:scale-110 transition-all shadow-lg">
                        <PlayCircle className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* 4. Etiqueta de duración */}
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="bg-black/60 backdrop-blur-md text-white text-xs px-2 py-1 rounded shadow-sm">
                        {video.duration}
                      </span>
                    </div>
                  </div>
                  {/* --- FIN DE LA SECCIÓN DEL THUMBNAIL --- */}

                  <CardHeader className="p-4 border-t">
                    <CardTitle className="text-base text-[#272d2d] line-clamp-1">
                      {video.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {video.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-[#272d2d]">Blog de Lactancia</h3>
            <Button variant="ghost" className="text-[#38ac49] hover:text-[#2d9a3d] hover:bg-[#38ac49]/10">
              Ver todos
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group"
              >
                <article className="p-5 rounded-xl border border-border hover:border-[#38ac49]/40 hover:bg-[#f8faf8] transition-all h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-[#38ac49] bg-[#38ac49]/10 px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h4 className="font-medium text-[#272d2d] mb-2 group-hover:text-[#38ac49] transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Reproductor de Video en Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-black border-none overflow-hidden flex flex-col rounded-xl">
          <DialogHeader className="p-4 bg-white border-b shrink-0">
            <DialogTitle className="text-xl text-[#272d2d]">
              {selectedVideo?.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="relative w-full aspect-video bg-black flex items-center justify-center">
            {/* Si el video tiene src, lo reproduce. Si no, muestra un mensaje */}
            {selectedVideo?.src ? (
              <video 
                src={selectedVideo.src} 
                controls 
                autoPlay 
                className="w-full h-full object-contain outline-none"
              >
                Tu navegador no soporta la etiqueta de video.
              </video>
            ) : (
              <p className="text-white">Video no encontrado. Asegúrate de agregar el "src" en tus datos.</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}