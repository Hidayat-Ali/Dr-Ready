import '../../scss/vendors/Login.css'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import drLottie from '../../lotties/dr-lottie.json'
import { Link } from 'react-router-dom'
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
        <label htmlFor="username">Username || Email</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <Link to="/forget-password">
            <small className="quickLinks">Forgot Password?</small>{' '}
          </Link>
          <br />
          <Link to="/register">
            <small className="quickLinks">Not Registered? SignUp</small>{' '}
          </Link>
        </div>
        <motion.button variants={buttonVariants} whileHover="hover" type="submit">
          Sign In
        </motion.button>
      </motion.form>
      <Lottie animationData={drLottie} style={{ width: 300, height: 300 }} className="lottie-dr" />
    </motion.div>
  )
}

export default Login
