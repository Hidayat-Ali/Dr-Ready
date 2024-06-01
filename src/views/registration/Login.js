import '../../scss/vendors/Login.css'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import drLottie from '../../lotties/dr-lottie.json'
import { Link } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
}

const formVariants = {
  hidden: { x: '-100vw' },
  visible: { x: 0, transition: { type: 'spring', stiffness: 120 } },
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: { duration: 0.3, yoyo: Infinity },
  },
}

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    <motion.div
      className="login-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.form className="login-form" variants={formVariants} onSubmit={handleLogin}>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            paddingTop: '14px',
            justifyContent: 'space-between',
          }}
        >
          <h2 className="headding1">Login</h2>
          <img src="../logo.png" alt="drik" className="rounded-circle logo-login" />
        </div>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(jwtDecode(credentialResponse?.credential))
          }}
          onError={() => {
            console.log('Login Failed')
          }}
        />
        <br></br>

        <label htmlFor="username">Username || Email</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <Link to="/forget-password" className="text-decoration-none">
            <small className="quickLinks">Forgot Password?</small>{' '}
          </Link>
          <br />
          <Link to="/register" className="text-decoration-none">
            <small className="quickLinks">Not Registered? SignUp</small>{' '}
          </Link>
        </div>
        <motion.button variants={buttonVariants} whileHover="hover" type="submit" className="mt-3">
          Sign In
        </motion.button>
      </motion.form>
      <Lottie animationData={drLottie} style={{ width: 300, height: 300 }} className="lottie-dr" />
    </motion.div>
  )
}

export default Login
