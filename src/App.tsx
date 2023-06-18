import './styles/main.scss'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PricingPage from './pages/PricingPage'
import LoginPage from './pages/LoginPage'
import AdminLayout from './pages/AdminLayout'
import PrivateRoutes from './components/PrivateRoutes'
import { UserProvider } from './services/UserStore'
import ChatComponent from './components/admin/ChatComponent'

export const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
        <Route element={<PrivateRoutes />}>
          <Route path="admin" element={<AdminLayout />}>
            <Route path="chat" element={<ChatComponent />} />
          </Route>
        </Route>
        <Route path="/" element={<HomePage />}>
          <Route path="pricing" element={<PricingPage />} />
        </Route>
      </Routes>
    </UserProvider>
  )
}
