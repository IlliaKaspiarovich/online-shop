type ThemeMode = 'light' | 'dark'

type Product = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

type ApiResponse = {
  limit: number
  products: Product[]
  skip: number
  total: number
}
