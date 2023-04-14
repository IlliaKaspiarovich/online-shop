import React from 'react'
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import { toggleThemeMode } from '../../store/reducers/settings'
import styles from './index.module.css'

export const Header: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <header className={styles.headerContainer}>
      <Button variant="contained">Hello World</Button>
      <Switch onChange={() => dispatch(toggleThemeMode())} />
    </header>
  )
}
