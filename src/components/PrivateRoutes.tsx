import { Navigate, Outlet } from 'react-router-dom'
import { AuthenticationService } from '../services/AuthenticationService'

export default function PrivateRoutes() {
  const authService = new AuthenticationService()
  try {
    const user = authService.GetAuthenticatedUserToken()
    return user.email_verified ? <Outlet /> : <Navigate to="login" />
  } catch {
    return <Navigate to="login" />
  }
}
