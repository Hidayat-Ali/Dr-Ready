import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes, BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'
import ApplyDoctor from './components/ApplyDoctor'
import AvailableDoctor from './components/AvailableDoctor.js'
import Appointment from './components/Appointment.js'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const HomeDashboard = React.lazy(() => import('./views/dashboard/HomeDashboard.js'))
const Login = React.lazy(() => import('./views/registration/Login'))
const Register = React.lazy(() => import('./views/registration/Register'))

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="pt-3 text-center">
              <CSpinner color="primary" variant="grow" />
            </div>
          }
        >
          <Routes>
            {/* private routes */}
            <Route path="/dashboard/*" element={<Dashboard />}>
              <Route path="" element={<HomeDashboard />} />
              <Route path="apply-for-doctor" element={<ApplyDoctor />} />
              <Route path="available-doctors" element={<AvailableDoctor />} />
              <Route path="appointments" element={<Appointment />} />
            </Route>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
