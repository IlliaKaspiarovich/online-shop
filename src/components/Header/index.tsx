import React from 'react'
import Switch from '@mui/material/Switch'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useDispatch } from 'react-redux'
import { toggleThemeMode } from 'src/store/reducers/settings'

export const Header: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <Switch onChange={() => dispatch(toggleThemeMode())} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
