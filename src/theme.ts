import { createTheme } from '@mui/material'
import green from '@mui/material/colors/green'
import blue from '@mui/material/colors/blue'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: green,
    contrastThreshold: 4.5
  }
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: blue,
    contrastThreshold: 4.5
  }
})
