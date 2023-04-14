import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { useSelector } from 'react-redux'

import type { RootState } from './store'
import { router } from './router'
import { darkTheme, lightTheme } from './theme'

export const App: React.FC = () => {
  const themeMode = useSelector((state: RootState) => state.settings.themeMode)

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
