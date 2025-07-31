"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Calendar, Terminal } from "lucide-react"
import { useParams } from "next/navigation"

const blogContent = {
  "recursion-basics": {
    title: "Introducción a la Recursión: Conceptos Fundamentales",
    category: "Recurrencia y Árboles",
    date: "2024-01-15",
    readTime: "8 min",
    content: `# Introducción a la Recursión

La **recursión** es uno de los conceptos más elegantes y poderosos en programación. Se trata de una técnica donde una función se llama a sí misma para resolver un problema más pequeño del mismo tipo.

## ¿Qué es la Recursión?

La recursión es como una muñeca rusa: cada nivel contiene una versión más pequeña del mismo problema. Para que funcione correctamente, necesitamos:

1. **Caso base**: Una condición que detiene la recursión
2. **Caso recursivo**: La función se llama a sí misma con un problema más pequeño

## Ejemplo Clásico: Factorial

\`\`\`python
def factorial(n):
    # Caso base
    if n == 0 or n == 1:
        return 1
    
    # Caso recursivo
    return n * factorial(n - 1)

# Uso del factorial
print(factorial(5))  # Output: 120
print(factorial(0))  # Output: 1
\`\`\`

## Ventajas de la Recursión

- **Código más limpio**: Soluciones elegantes para problemas complejos
- **Divide y vencerás**: Descompone problemas grandes en subproblemas
- **Natural para estructuras recursivas**: Árboles, listas enlazadas, etc.

## Cuándo Usar Recursión

- Problemas que se pueden dividir en subproblemas similares
- Estructuras de datos recursivas (árboles, grafos)
- Algoritmos de divide y vencerás
- Backtracking y búsqueda exhaustiva`,
  },
  "binary-trees": {
    title: "Árboles Binarios: Estructura y Recorridos",
    category: "Recurrencia y Árboles",
    date: "2024-01-20",
    readTime: "12 min",
    content: `# Árboles Binarios: Estructura y Recorridos

Los **árboles binarios** son estructuras de datos fundamentales que organizan información de manera jerárquica. Cada nodo tiene como máximo dos hijos: izquierdo y derecho.

## Estructura de un Árbol Binario

\`\`\`python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Crear un árbol simple
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
\`\`\`

## Tipos de Recorridos

### 1. Recorrido Inorden

\`\`\`python
def inorder_traversal(root):
    if root is None:
        return []
    
    result = []
    result.extend(inorder_traversal(root.left))
    result.append(root.val)
    result.extend(inorder_traversal(root.right))
    
    return result
\`\`\`

### 2. Recorrido Preorden

\`\`\`python
def preorder_traversal(root):
    if root is None:
        return []
    
    result = [root.val]
    result.extend(preorder_traversal(root.left))
    result.extend(preorder_traversal(root.right))
    
    return result
\`\`\`

## Aplicaciones Prácticas

- **Árboles de búsqueda binaria**: Búsqueda eficiente O(log n)
- **Árboles de expresiones**: Evaluación de expresiones matemáticas
- **Sistemas de archivos**: Organización jerárquica

Los árboles binarios son la base para estructuras más complejas y algoritmos avanzados.`,
  },
  "programming-basics": {
    title: "Variables y Tipos de Datos: Tu Primer Paso",
    category: "Fundamentos de Programación",
    date: "2024-01-10",
    readTime: "6 min",
    content: `# Variables y Tipos de Datos: Tu Primer Paso

Las **variables** son contenedores que almacenan datos en la memoria de tu programa. Son la base fundamental de cualquier lenguaje de programación.

## ¿Qué es una Variable?

Una variable es como una caja etiquetada donde guardas información. Puedes:

- Almacenar un valor
- Leer ese valor
- Modificar el valor

## Declaración de Variables

### Python
\`\`\`python
# Declaración e inicialización
nombre = "Juan"
edad = 25
altura = 1.75
es_estudiante = True
\`\`\`

### JavaScript
\`\`\`javascript
// Diferentes formas de declarar
let nombre = "Juan";
const edad = 25;
var altura = 1.75;
\`\`\`

## Tipos de Datos Fundamentales

### 1. Números Enteros (int)
- Representan números sin decimales
- Ejemplo: 42, -17, 0

### 2. Números Decimales (float)
- Representan números con decimales
- Ejemplo: 3.14, -2.5, 0.0

### 3. Cadenas de Texto (string)
- Secuencias de caracteres
- Ejemplo: "Hola mundo", "Python"

### 4. Booleanos (bool)
- Valores de verdad
- Solo dos valores: True/False

## Ejemplo Práctico

\`\`\`python
# Programa para calcular el área de un rectángulo
base = 10.5
altura = 7.2
area = base * altura

print(f"El área del rectángulo es: {area}")
\`\`\`

Las variables son tu primera herramienta para crear programas útiles y dinámicos.`,
  },
  "control-structures": {
    title: "Estructuras de Control: Tomando Decisiones",
    category: "Fundamentos de Programación",
    date: "2024-01-25",
    readTime: "10 min",
    content: `# Estructuras de Control: Tomando Decisiones

Las **estructuras de control** permiten que tu programa tome decisiones y repita acciones. Son el cerebro de la lógica de programación.

## Condicionales: if, elif, else

### Estructura Básica

\`\`\`python
edad = 18

if edad >= 18:
    print("Eres mayor de edad")
else:
    print("Eres menor de edad")
\`\`\`

### Múltiples Condiciones

\`\`\`python
calificacion = 85

if calificacion >= 90:
    print("Excelente")
elif calificacion >= 80:
    print("Muy bueno")
elif calificacion >= 70:
    print("Bueno")
else:
    print("Necesitas mejorar")
\`\`\`

## Operadores de Comparación

- **==** : Igual a
- **!=** : Diferente de
- **<** : Menor que
- **>** : Mayor que
- **<=** : Menor o igual que
- **>=** : Mayor o igual que

## Bucles: Repitiendo Acciones

### Bucle for

\`\`\`python
# Contar del 1 al 5
for i in range(1, 6):
    print(f"Número: {i}")

# Iterar sobre una lista
frutas = ["manzana", "banana", "naranja"]
for fruta in frutas:
    print(f"Me gusta la {fruta}")
\`\`\`

### Bucle while

\`\`\`python
contador = 0

while contador < 5:
    print(f"Contador: {contador}")
    contador += 1
\`\`\`

Las estructuras de control son esenciales para crear programas interactivos y dinámicos.`,
  },
  "arrays-introduction": {
    title: "Arreglos: Almacenando Múltiples Valores",
    category: "Arreglos",
    date: "2024-02-01",
    readTime: "7 min",
    content: `# Arreglos: Almacenando Múltiples Valores

Los **arreglos** son estructuras de datos que permiten almacenar múltiples valores en una sola variable. Son fundamentales en programación.

## ¿Qué es un Arreglo?

Un arreglo es como un estante con compartimentos numerados donde cada compartimento puede guardar un valor.

\`\`\`python
# Lista en Python
numeros = [1, 2, 3, 4, 5]
nombres = ["Ana", "Luis", "María", "Carlos"]
mixto = [1, "Hola", 3.14, True]
\`\`\`

## Características de los Arreglos

1. **Indexados**: Cada elemento tiene una posición
2. **Ordenados**: Mantienen el orden de inserción
3. **Mutables**: Se pueden modificar después de crear
4. **Dinámicos**: Pueden crecer o reducirse

## Acceso a Elementos

\`\`\`python
frutas = ["manzana", "banana", "naranja", "uva"]

print(frutas[0])  # "manzana" (primer elemento)
print(frutas[1])  # "banana"
print(frutas[-1]) # "uva" (último elemento)
\`\`\`

## Operaciones Básicas

### Agregar Elementos
\`\`\`python
numeros = [1, 2, 3]

# Agregar al final
numeros.append(4)

# Insertar en posición específica
numeros.insert(1, 10)

# Extender con otra lista
numeros.extend([5, 6])
\`\`\`

### Eliminar Elementos
\`\`\`python
numeros = [1, 2, 3, 4, 5]

# Eliminar por valor
numeros.remove(3)

# Eliminar por índice
del numeros[0]

# Eliminar y obtener el último
ultimo = numeros.pop()
\`\`\`

Los arreglos son herramientas poderosas para manejar colecciones de datos de manera eficiente.`,
  },
  "array-algorithms": {
    title: "Algoritmos con Arreglos: Búsqueda y Ordenamiento",
    category: "Arreglos",
    date: "2024-02-05",
    readTime: "15 min",
    content: `# Algoritmos con Arreglos: Búsqueda y Ordenamiento

Los algoritmos de búsqueda y ordenamiento son fundamentales en programación. Te permiten encontrar y organizar datos eficientemente.

## Algoritmos de Búsqueda

### 1. Búsqueda Lineal

\`\`\`python
def busqueda_lineal(arr, objetivo):
    for i in range(len(arr)):
        if arr[i] == objetivo:
            return i  # Retorna el índice
    return -1  # No encontrado

# Ejemplo de uso
numeros = [64, 34, 25, 12, 22, 11, 90]
resultado = busqueda_lineal(numeros, 22)
print(f"Elemento encontrado en índice: {resultado}")
\`\`\`

### 2. Búsqueda Binaria

\`\`\`python
def busqueda_binaria(arr, objetivo):
    izquierda = 0
    derecha = len(arr) - 1
    
    while izquierda <= derecha:
        medio = (izquierda + derecha) // 2
        
        if arr[medio] == objetivo:
            return medio
        elif arr[medio] < objetivo:
            izquierda = medio + 1
        else:
            derecha = medio - 1
    
    return -1

# Ejemplo de uso (requiere arreglo ordenado)
numeros_ordenados = [11, 12, 22, 25, 34, 64, 90]
resultado = busqueda_binaria(numeros_ordenados, 25)
\`\`\`

## Algoritmos de Ordenamiento

### 1. Ordenamiento Burbuja

\`\`\`python
def ordenamiento_burbuja(arr):
    n = len(arr)
    
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    
    return arr

# Ejemplo de uso
numeros = [64, 34, 25, 12, 22, 11, 90]
print("Arreglo ordenado:", ordenamiento_burbuja(numeros))
\`\`\`

### 2. Ordenamiento por Selección

\`\`\`python
def ordenamiento_seleccion(arr):
    n = len(arr)
    
    for i in range(n):
        min_idx = i
        
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    
    return arr
\`\`\`

## Comparación de Algoritmos

**Tabla de Complejidades:**

**Algoritmo Burbuja:**
- Mejor Caso: O(n)
- Caso Promedio: O(n²)
- Peor Caso: O(n²)

**Algoritmo Selección:**
- Mejor Caso: O(n²)
- Caso Promedio: O(n²)
- Peor Caso: O(n²)

**Algoritmo Inserción:**
- Mejor Caso: O(n)
- Caso Promedio: O(n²)
- Peor Caso: O(n²)

Dominar estos algoritmos te dará una base sólida para resolver problemas complejos de manera eficiente.`,
  },
  "oop-concepts": {
    title: "POO: Clases, Objetos y Encapsulación",
    category: "Programación Orientada a Objetos",
    date: "2024-02-10",
    readTime: "9 min",
    content: `# POO: Clases, Objetos y Encapsulación

La **Programación Orientada a Objetos** es un paradigma que organiza el código en torno a objetos que contienen datos y código.

## Conceptos Fundamentales

### ¿Qué es una Clase?

Una **clase** es como un molde que define las características y comportamientos que tendrán los objetos.

\`\`\`python
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
    
    def saludar(self):
        return f"Hola, soy {self.nombre} y tengo {self.edad} años"
    
    def cumplir_anos(self):
        return f"Ahora tengo {self.edad} años"
\`\`\`

### ¿Qué es un Objeto?

Un **objeto** es una instancia específica de una clase.

\`\`\`python
# Crear objetos de la clase Persona
persona1 = Persona("Ana", 25)
persona2 = Persona("Luis", 30)

# Usar los métodos
print(persona1.saludar())
print(persona2.saludar())

# Modificar el estado del objeto
print(persona1.cumplir_anos())
\`\`\`

## Encapsulación

La **encapsulación** oculta los detalles internos y expone solo lo necesario.

\`\`\`python
class CuentaBancaria:
    def __init__(self, titular, saldo_inicial=0):
        self.titular = titular
        self.__saldo = saldo_inicial  # Atributo privado
    
    def depositar(self, cantidad):
        if cantidad > 0:
            self.__saldo += cantidad
            return f"Depósito exitoso. Saldo: ${self.__saldo}"
        return "La cantidad debe ser positiva"
    
    def retirar(self, cantidad):
        if cantidad > 0 and cantidad <= self.__saldo:
            self.__saldo -= cantidad
            return f"Retiro exitoso. Saldo: ${self.__saldo}"
        return "Fondos insuficientes"
    
    def consultar_saldo(self):
        return f"Saldo actual: ${self.__saldo}"

# Uso de la clase
cuenta = CuentaBancaria("María", 1000)
print(cuenta.depositar(500))
print(cuenta.retirar(200))
print(cuenta.consultar_saldo())
\`\`\`

## Ventajas de la POO

1. **Reutilización**: Las clases se pueden usar múltiples veces
2. **Mantenibilidad**: Código más organizado
3. **Escalabilidad**: Fácil agregar nuevas funcionalidades
4. **Abstracción**: Oculta la complejidad interna

La POO te permite crear código más organizado, reutilizable y fácil de mantener.`,
  },
  "inheritance-polymorphism": {
    title: "Herencia y Polimorfismo en la Práctica",
    category: "Programación Orientada a Objetos",
    date: "2024-02-15",
    readTime: "11 min",
    content: `# Herencia y Polimorfismo en la Práctica

La **herencia** y el **polimorfismo** son pilares fundamentales de la POO que permiten crear jerarquías de clases y escribir código más flexible.

## Herencia: Extendiendo Funcionalidad

La **herencia** permite crear nuevas clases basadas en clases existentes.

\`\`\`python
# Clase padre
class Animal:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
        self.vivo = True
    
    def comer(self):
        return f"{self.nombre} está comiendo"
    
    def dormir(self):
        return f"{self.nombre} está durmiendo"
    
    def hacer_sonido(self):
        return "El animal hace un sonido"

# Clase hija
class Perro(Animal):
    def __init__(self, nombre, edad, raza):
        super().__init__(nombre, edad)
        self.raza = raza
    
    def hacer_sonido(self):
        return f"{self.nombre} dice: ¡Guau!"
    
    def mover_cola(self):
        return f"{self.nombre} está moviendo la cola"

class Gato(Animal):
    def __init__(self, nombre, edad, color):
        super().__init__(nombre, edad)
        self.color = color
    
    def hacer_sonido(self):
        return f"{self.nombre} dice: ¡Miau!"
    
    def ronronear(self):
        return f"{self.nombre} está ronroneando"
\`\`\`

## Polimorfismo: Una Interfaz, Múltiples Formas

El **polimorfismo** permite que objetos de diferentes clases respondan al mismo método de manera específica.

\`\`\`python
def hacer_sonidos_animales(animales):
    for animal in animales:
        print(animal.hacer_sonido())

# Lista con diferentes tipos de animales
animales = [
    Perro("Rex", 4, "Pastor Alemán"),
    Gato("Whiskers", 1, "Siamés"),
    Perro("Buddy", 2, "Labrador")
]

# Cada animal responde diferente al mismo método
hacer_sonidos_animales(animales)
\`\`\`

## Ventajas de Herencia y Polimorfismo

1. **Reutilización de código**: No repetir funcionalidad común
2. **Extensibilidad**: Fácil agregar nuevos tipos
3. **Mantenibilidad**: Cambios se propagan automáticamente
4. **Flexibilidad**: Código que funciona con múltiples tipos

La herencia y el polimorfismo son herramientas poderosas que te permitirán crear sistemas flexibles y escalables.`,
  },
}

// Función para procesar markdown
function processMarkdown(text: string) {
  // Procesar texto en negrita
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-wine-800 font-semibold">$1</strong>')

  // Procesar código inline
  text = text.replace(
    /`([^`]+)`/g,
    '<code class="bg-gray-800 text-green-400 px-2 py-1 rounded font-mono text-sm border border-gray-600">$1</code>',
  )

  return text
}

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  const post = blogContent[slug as keyof typeof blogContent]

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-wine-50 via-cream-50 to-wine-100 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-12 border border-wine-200">
            <h1 className="text-4xl font-bold text-wine-900 mb-4">Artículo no encontrado</h1>
            <p className="text-gray-600 mb-8">El artículo que buscas no existe.</p>
            <Button
              asChild
              className="bg-gradient-to-r from-wine-700 to-wine-800 hover:from-wine-800 hover:to-wine-900 shadow-lg"
            >
              <Link href="/">Volver al inicio</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-wine-50 via-cream-50 to-wine-100">
      {/* Header con degradado animado */}
      <header className="animated-gradient text-white shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-3xl font-bold hover:text-wine-200 transition-all duration-300 transform hover:scale-105 drop-shadow-lg"
            >
              CodeMaster Blog
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="glass-effect text-white hover:bg-white/20 border-white/30 backdrop-blur-sm transition-all duration-300 shadow-lg bg-transparent"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <Link href="/">Volver</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border border-wine-200/50">
          {/* Article Header */}
          <div className="mb-8">
            <Badge
              variant="outline"
              className="mb-4 text-wine-700 border-wine-300 bg-gradient-to-r from-wine-50 to-cream-50 shadow-sm"
            >
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-wine-900 via-wine-700 to-wine-800 bg-clip-text text-transparent mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2 bg-gradient-to-r from-wine-50 to-cream-50 px-4 py-2 rounded-full shadow-sm">
                <Calendar className="h-4 w-4 text-wine-600" />
                <span className="font-medium">{post.date}</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-wine-50 to-cream-50 px-4 py-2 rounded-full shadow-sm">
                <Clock className="h-4 w-4 text-wine-600" />
                <span className="font-medium">{post.readTime} de lectura</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("# ")) {
                return (
                  <h1
                    key={index}
                    className="text-3xl font-bold bg-gradient-to-r from-wine-900 to-wine-700 bg-clip-text text-transparent mt-8 mb-6 border-b-2 border-wine-200 pb-2"
                  >
                    {paragraph.slice(2)}
                  </h1>
                )
              } else if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-bold bg-gradient-to-r from-wine-800 to-wine-600 bg-clip-text text-transparent mt-8 mb-4"
                  >
                    {paragraph.slice(3)}
                  </h2>
                )
              } else if (paragraph.startsWith("### ")) {
                return (
                  <h3
                    key={index}
                    className="text-xl font-bold bg-gradient-to-r from-wine-700 to-wine-500 bg-clip-text text-transparent mt-6 mb-3"
                  >
                    {paragraph.slice(4)}
                  </h3>
                )
              } else if (paragraph.startsWith("```")) {
                const codeMatch = paragraph.match(/```(\w+)?\n?([\s\S]*?)```/)
                if (codeMatch) {
                  const language = codeMatch[1] || "code"
                  const code = codeMatch[2]
                  return (
                    <div key={index} className="my-8">
                      <div className="flex items-center gap-2 mb-3">
                        <Terminal className="h-5 w-5 text-wine-600" />
                        <span className="text-sm font-bold text-wine-700 uppercase tracking-wider bg-gradient-to-r from-wine-100 to-cream-100 px-3 py-1 rounded-full">
                          {language}
                        </span>
                      </div>
                      <div className="code-container rounded-xl overflow-hidden shadow-2xl">
                        <pre className="p-6 overflow-x-auto">
                          <code className="font-mono text-sm leading-relaxed text-green-400 block whitespace-pre">
                            {code}
                          </code>
                        </pre>
                      </div>
                    </div>
                  )
                }
              } else if (paragraph.startsWith("- ") || paragraph.startsWith("* ")) {
                return (
                  <li key={index} className="ml-6 mb-3 text-gray-700 leading-relaxed list-disc">
                    <span dangerouslySetInnerHTML={{ __html: processMarkdown(paragraph.slice(2)) }} />
                  </li>
                )
              } else if (paragraph.startsWith("**") && paragraph.endsWith(":**")) {
                // Handle special formatted sections like "**Algoritmo Burbuja:**"
                return (
                  <div
                    key={index}
                    className="my-6 p-4 bg-gradient-to-r from-wine-50 to-cream-50 rounded-lg border-l-4 border-wine-600"
                  >
                    <h4 className="text-lg font-bold text-wine-800 mb-2">{paragraph.slice(2, -2)}</h4>
                  </div>
                )
              } else if (paragraph.trim()) {
                return (
                  <p key={index} className="mb-6 text-gray-700 leading-relaxed text-lg">
                    <span dangerouslySetInnerHTML={{ __html: processMarkdown(paragraph) }} />
                  </p>
                )
              }
              return null
            })}
          </div>

          {/* Article Footer */}
          <div className="mt-12 pt-8 border-t-2 border-gradient-to-r from-wine-200 to-cream-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="bg-gradient-to-r from-wine-50 to-cream-50 p-6 rounded-xl shadow-lg border border-wine-200">
                <p className="text-wine-800 font-semibold text-lg">¿Te gustó este artículo?</p>
                <p className="text-wine-600 mt-1">Compártelo con otros desarrolladores</p>
              </div>
              <Button className="bg-gradient-to-r from-wine-700 to-wine-800 hover:from-wine-800 hover:to-wine-900 shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-3 text-lg">
                <Link href="/">Ver más artículos</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
