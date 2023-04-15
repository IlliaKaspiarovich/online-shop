import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ProductsState {
  products: Product[]
  isLoading: boolean
}

const initialState: ProductsState = {
  products: [],
  isLoading: false
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Array<Product>>) => {
      state.products = action.payload
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  }
})

export const { setProducts, setIsLoading } = productsSlice.actions
export default productsSlice.reducer
