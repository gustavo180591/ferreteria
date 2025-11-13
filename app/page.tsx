import { Mail, Phone, MapPin, Wrench, Hammer, Zap, Droplets, Shield, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Ferretería El Tornillo Feliz | Herramientas y Materiales",
  description:
    "Todo para tus proyectos: herramientas, tornillos, pinturas y más. Atención personalizada, buenos precios y stock permanente.",
}

const categories = [
  { icon: Wrench, label: "Herramientas Manuales" },
  { icon: Zap, label: "Herramientas Eléctricas" },
  { icon: Hammer, label: "Tornillería" },
  { icon: Home, label: "Construcción" },
  { icon: Droplets, label: "Pinturas" },
  { icon: Shield, label: "Seguridad" },
  { icon: Wrench, label: "Electricidad" },
  { icon: Droplets, label: "Plomería" },
]

const products = [
  { name: "Taladro Percutor 650W", price: "$8.500", image: "/taladro.png" },
  { name: "Set de Llaves Combinadas", price: "$2.200", image: "/bunch-of-keys.png" },
  { name: "Martillo de Acero 16oz", price: "$1.800", image: "/martillo.png" },
  { name: "Kit Destornilladores 12pcs", price: "$3.500", image: "/various-screwdrivers.png" },
  { name: "Cinta Métrica 5m", price: "$950", image: "/cinta-metrica.jpg" },
  { name: "Nivel Láser", price: "$5.200", image: "/nivel.jpg" },
  { name: "Tornillos Surtido 1kg", price: "$1.200", image: "/tornillos.jpg" },
  { name: "Pintura Látex 20L", price: "$4.800", image: "/abstract-colorful-painting.png" },
]

const services = [
  { title: "Corte de Vidrio", description: "Cortamos vidrio a medida para tus proyectos." },
  { title: "Asesoramiento Técnico", description: "Nuestro equipo te ayuda a elegir lo que necesitas." },
  { title: "Servicio Express", description: "Retiro o entrega en el día en zona." },
]

export default function Page() {
  return (
    <main className="bg-background">
      {/* Header */}
      <header className="bg-white border-b border-amber-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-amber-700">🔩 El Tornillo Feliz</h1>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#productos" className="text-gray-700 hover:text-amber-700 transition">
              Productos
            </a>
            <a href="#servicios" className="text-gray-700 hover:text-amber-700 transition">
              Servicios
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-amber-700 transition">
              Contacto
            </a>
          </nav>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full">
            <Phone className="w-4 h-4 mr-2" />
            Llamar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 px-4 md:py-32">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url(/placeholder.svg?height=600&width=1200&query=ferramientas-construccion)" }}
        ></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pretty">Todo para tus proyectos, en un solo lugar</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 text-pretty">
            Herramientas, materiales y asesoramiento para profesionales y aficionados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white rounded-full">
              Ver productos destacados
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full bg-transparent"
            >
              Consultar por WhatsApp
            </Button>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-amber-400">✓</span> Atención personalizada
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400">✓</span> Buenos precios
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400">✓</span> Stock permanente
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Categorías Principales</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => {
              const Icon = cat.icon
              return (
                <Card key={idx} className="p-6 hover:shadow-lg transition text-center border border-gray-200 bg-white">
                  <div className="flex justify-center mb-4">
                    <div className="bg-amber-100 p-4 rounded-lg">
                      <Icon className="w-6 h-6 text-amber-700" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-4">{cat.label}</h4>
                  <Button
                    variant="outline"
                    className="w-full border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                  >
                    Ver más
                  </Button>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="productos" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Productos Destacados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition border border-gray-200">
                <div className="bg-gray-200 h-48 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h4>
                  <p className="text-xl font-bold text-amber-700 mb-4">{product.price}</p>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-lg">Consultar</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Nuestros Servicios</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="p-6 text-center border border-amber-200 bg-white">
                <div className="text-amber-600 text-4xl mb-4">
                  {idx === 0 && "✂️"}
                  {idx === 1 && "💡"}
                  {idx === 2 && "🚚"}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-amber-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-4">¿Necesitas ayuda?</h3>
          <p className="text-lg mb-8 text-pretty">
            Comunícate con nosotros por WhatsApp, teléfono o visítanos en el local.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 rounded-full">
              <Phone className="w-4 h-4 mr-2" />
              +54 11 2345-6789
            </Button>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full">
              💬 WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="text-white font-bold mb-4">Ferretería El Tornillo Feliz</h5>
              <p className="text-sm">Tu tienda de confianza para todos tus proyectos de construcción y reparación.</p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Contacto</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +54 11 2345-6789
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> info@tornilllofeliz.com
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Av. Principal 1234, Buenos Aires
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Horario</h5>
              <div className="space-y-1 text-sm">
                <p>Lunes - Viernes: 8:00 - 19:00</p>
                <p>Sábado: 9:00 - 18:00</p>
                <p>Domingo: Cerrado</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2025 Ferretería El Tornillo Feliz. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
