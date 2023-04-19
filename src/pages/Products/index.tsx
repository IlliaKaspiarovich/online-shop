import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Grid } from '@mui/material'

import { productsUrl } from 'src/constants'
import { setProducts } from 'src/store/reducers/products'
import type { RootState } from 'src/store'
import { SideBar } from 'src/components/SideBar'
import { ProductCard } from 'src/components/ProductCard'

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
    <Box display={'flex'}>
      <SideBar />
      <Grid m={2} container spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item xs={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
