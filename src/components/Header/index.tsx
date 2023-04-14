import React from 'react'
import styles from './index.module.css'
import Button from '@mui/material/Button'

export const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <Button variant="contained">Hello World</Button>
    </header>
  )
}
