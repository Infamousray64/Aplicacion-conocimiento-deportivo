//import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import { App } from './App'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <GoogleOAuthProvider clientId="973630044438-g98urd73oopkpedbaie3ngpgicdj238t.apps.googleusercontent.com">
    <HashRouter>
      <App />
    </HashRouter>
  </GoogleOAuthProvider>
)
