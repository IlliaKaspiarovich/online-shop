import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <CssBaseline enableColorScheme />
    <RouterProvider router={router} />
  </React.StrictMode>
)
