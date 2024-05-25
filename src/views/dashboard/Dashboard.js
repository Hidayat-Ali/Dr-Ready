import React from 'react'
import { Outlet } from 'react-router-dom'

import AppSidebar from '../../components/AppSidebar'

import AppHeader from '../../components/AppHeader'

const Dashboard = () => {
  return (
    <>
      <AppSidebar />
      <div className="wrapper d-flex flex-column ">
        <AppHeader />
      </div>
      <Outlet />
    </>
  )
}

export default Dashboard
