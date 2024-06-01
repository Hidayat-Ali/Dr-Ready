import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js'
import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App'
import store from './store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="109744374225-qqprkn6r9gjmvgt7t9p034dct5vlk2cm.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Provider>,
)
