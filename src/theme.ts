import { createTheme } from '@mui/material'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0099FF'
    },
    secondary: {
      main: '#FFA500'
    },
    contrastThreshold: 4.5
  }
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFC107'
    },
    secondary: {
      main: '#4CAF50'
    },
    contrastThreshold: 4.5
  }
})
