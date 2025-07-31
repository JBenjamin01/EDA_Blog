import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Database, Layers } from "lucide-react"

const blogPosts = [
  // Recurrencia y árboles
  {
    id: "recursion-basics",
    title: "Introducción a la Recursión: Conceptos Fundamentales",
    description: "Aprende los conceptos básicos de la recursión y cómo aplicarla en la programación.",
    category: "Recurrencia y Árboles",
    icon: Database,
    readTime: "8 min",
    date: "2024-01-15",
  },
  {
    id: "binary-trees",
    title: "Árboles Binarios: Estructura y Recorridos",
    description: "Explora las estructuras de árboles binarios y los diferentes métodos de recorrido.",
    category: "Recurrencia y Árboles",
    icon: Database,
    readTime: "12 min",
    date: "2024-01-20",
  },
  // Fundamentos de programación
  {
    id: "programming-basics",
    title: "Variables y Tipos de Datos: Tu Primer Paso",
    description: "Comprende los conceptos básicos de variables y tipos de datos en programación.",
    category: "Fundamentos de Programación",
    icon: Code,
    readTime: "6 min",
    date: "2024-01-10",
  },
  {
    id: "control-structures",
    title: "Estructuras de Control: Tomando Decisiones",
    description: "Aprende sobre condicionales, bucles y cómo controlar el flujo de tu programa.",
    category: "Fundamentos de Programación",
    icon: Code,
    readTime: "10 min",
    date: "2024-01-25",
  },
  // Arreglos
  {
    id: "arrays-introduction",
    title: "Arreglos: Almacenando Múltiples Valores",
    description: "Descubre cómo usar arreglos para manejar colecciones de datos eficientemente.",
    category: "Arreglos",
    icon: Layers,
    readTime: "7 min",
    date: "2024-02-01",
  },
  {
    id: "array-algorithms",
    title: "Algoritmos con Arreglos: Búsqueda y Ordenamiento",
    description: "Implementa algoritmos clásicos de búsqueda y ordenamiento en arreglos.",
    category: "Arreglos",
    icon: Layers,
    readTime: "15 min",
    date: "2024-02-05",
  },
  // Programación orientada a objetos
  {
    id: "oop-concepts",
    title: "POO: Clases, Objetos y Encapsulación",
    description: "Introducción a los conceptos fundamentales de la programación orientada a objetos.",
    category: "Programación Orientada a Objetos",
    icon: BookOpen,
    readTime: "9 min",
    date: "2024-02-10",
  },
  {
    id: "inheritance-polymorphism",
    title: "Herencia y Polimorfismo en la Práctica",
    description: "Aprende a usar herencia y polimorfismo para crear código más flexible y reutilizable.",
    category: "Programación Orientada a Objetos",
    icon: BookOpen,
    readTime: "11 min",
    date: "2024-02-15",
  },
]

const categories = [
  { name: "Recurrencia y Árboles", count: 2, color: "bg-wine-100 text-wine-800" },
  { name: "Fundamentos de Programación", count: 2, color: "bg-amber-100 text-amber-800" },
  { name: "Arreglos", count: 2, color: "bg-emerald-100 text-emerald-800" },
  { name: "Programación Orientada a Objetos", count: 2, color: "bg-blue-100 text-blue-800" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-wine-50 to-cream-50">
      {/* Header con degradado animado */}
      <header className="animated-gradient text-white shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold drop-shadow-lg">CodeMaster Blog</h1>
              <p className="text-wine-100 mt-2 text-lg drop-shadow-md">Aprende programación paso a paso</p>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="#blog"
                className="hover:text-wine-200 transition-all duration-300 font-medium text-lg drop-shadow-md"
              >
                Blog
              </Link>
              <Link
                href="#categories"
                className="hover:text-wine-200 transition-all duration-300 font-medium text-lg drop-shadow-md"
              >
                Categorías
              </Link>
              <Link
                href="#about"
                className="hover:text-wine-200 transition-all duration-300 font-medium text-lg drop-shadow-md"
              >
                Acerca de
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-wine-900 mb-6">
            Aprende Programación
            <span className="block text-wine-700">Paso a Paso</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Explora conceptos fundamentales de programación con explicaciones claras, ejemplos prácticos y una
            metodología diseñada para facilitar tu proceso de aprendizaje en el desarrollo de software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-wine-700 hover:bg-wine-800 text-white px-8 py-3">
              <Link href="#blog">Explorar Artículos</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-wine-300 text-wine-700 hover:bg-wine-50 px-8 py-3 bg-transparent"
            >
              <Link href="#about">Conocer más</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-wine-900 mb-8 text-center">Categorías</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-wine-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-wine-800">{category.name}</CardTitle>
                  <Badge variant="secondary" className={category.color}>
                    {category.count} artículos
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-wine-900 mb-12 text-center">Últimos Artículos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const IconComponent = post.icon
              return (
                <Card
                  key={post.id}
                  className="hover:shadow-xl transition-all duration-300 border-wine-100 hover:border-wine-300 cursor-pointer"
                >
                  <Link href={`/blog/${post.id}`} className="block">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-wine-100 rounded-lg">
                          <IconComponent className="h-5 w-5 text-wine-700" />
                        </div>
                        <Badge variant="outline" className="text-wine-700 border-wine-300">
                          {post.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-wine-900 hover:text-wine-700 transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                        <span>{post.readTime} de lectura</span>
                        <span>{post.date}</span>
                      </div>
                      <div className="w-full py-2 px-4 border border-wine-300 text-wine-700 hover:bg-wine-50 bg-transparent rounded-md text-center transition-colors">
                        Leer más
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-wine-900 mb-8 text-center">Acerca de</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-bold text-wine-800 mb-4">Jhonatan B. Mamani Céspedes</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Estudiante de Ingeniería de Sistemas apasionado por la programación y el desarrollo de software. Este
                blog nace como un espacio para compartir conocimientos fundamentales de programación y ayudar a otros en
                su proceso de aprendizaje.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Aquí encontrarás explicaciones claras sobre conceptos esenciales como recursión, estructuras de datos,
                programación orientada a objetos y fundamentos de programación, presentados de manera práctica y con
                ejemplos que faciliten el entendimiento.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="text-wine-700 border-wine-300">
                  Ingeniería de Sistemas
                </Badge>
                <Badge variant="outline" className="text-wine-700 border-wine-300">
                  Programación
                </Badge>
                <Badge variant="outline" className="text-wine-700 border-wine-300">
                  Desarrollo de Software
                </Badge>
              </div>
            </div>
            <div className="bg-gradient-to-br from-wine-100 to-cream-100 p-8 rounded-lg">
              <h5 className="text-xl font-bold text-wine-800 mb-4">Objetivo del Blog</h5>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-wine-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Explicar conceptos de programación de forma clara y práctica</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-wine-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Proporcionar ejemplos de código funcionales y bien documentados</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-wine-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Crear un recurso de aprendizaje accesible para todos los niveles</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-wine-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Fomentar las buenas prácticas en el desarrollo de software</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wine-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">CodeMaster Blog</h4>
              <p className="text-wine-200 leading-relaxed">
                Un espacio dedicado al aprendizaje de programación, creado para compartir conocimientos y ayudar en el
                desarrollo de habilidades en ingeniería de software.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Categorías</h5>
              <ul className="space-y-2 text-wine-200">
                <li>
                  <Link href="#blog" className="hover:text-white transition-colors">
                    Recursión y Árboles
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="hover:text-white transition-colors">
                    Fundamentos de Programación
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="hover:text-white transition-colors">
                    Arreglos
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="hover:text-white transition-colors">
                    Programación Orientada a Objetos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Acerca del Autor</h5>
              <p className="text-wine-200 leading-relaxed">
                Jhonatan B. Mamani Céspedes
                <br />
                Estudiante de Ingeniería de Sistemas
                <br />
                Apasionado por la programación y el desarrollo de software
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-wine-800 text-center">
            <p className="text-wine-300">© 2024 CodeMaster Blog. Creado con fines educativos.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
