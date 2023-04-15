import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { productsUrl } from 'src/constants'
import { setProducts } from 'src/store/reducers/products'
import type { RootState } from 'src/store'

export const Products: React.FC = () => {
  const dispatch = useDispatch()

  const products = useSelector((state: RootState) => state.products.products)

  useEffect(() => {
    const fetchProducts = async (): Promise<Product[]> => {
      const response = await fetch(productsUrl)
      const products = (await response.json()) as ApiResponse
      return products.products
    }

    void fetchProducts().then((products) => dispatch(setProducts(products)))
  }, [])

  return (
    <ul>
      {products.map(({ id, title, price }) => (
        <li key={id}>
          {title} {price}
        </li>
      ))}
    </ul>
  )
}
