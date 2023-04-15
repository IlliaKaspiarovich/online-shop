import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from 'src/components/MainLayout'
import { Products } from 'src/pages/Products'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Products />
      }
    ]
  }
])
