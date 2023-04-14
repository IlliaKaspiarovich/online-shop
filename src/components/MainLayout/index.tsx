import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from 'src/components/Header'

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
