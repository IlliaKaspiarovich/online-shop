import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from './components/MainLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/lalala',
        element: <div>lalala</div>
      }
    ]
  }
])
