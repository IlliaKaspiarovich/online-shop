import { configureStore } from '@reduxjs/toolkit'

import settingsReducer from './reducers/settings'
import productsReducer from './reducers/products'

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    products: productsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
