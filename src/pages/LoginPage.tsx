import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/ivo-lg2.png'
import { GoogleLogin } from '@react-oauth/google'
import { GoogleAuthResponse } from '../types/GoogleAuthResponse'
import { AuthenticationService } from '../services/AuthenticationService'
import { useUserContext } from '../services/UserStore'

export default function LoginPage() {
  const [, setUserState] = useUserContext()
  const authService = new AuthenticationService()
  const navigate = useNavigate()

  const successfullLogin = (credentialResponse: GoogleAuthResponse) => {
    authService.AuthenticateUserWithToken(credentialResponse)
    setUserState(authService.GetAuthenticatedUserToken())
    navigate('/admin')
  }

  const onLoginError = () => {
    console.log('Login Failed')
    navigate('/')
  }

  return (
    <section className="login">
      <main id="login" className="form-signin text-center">
        <form className="form-singin">
          <Link to="/">
            <img className="mb-4" src={logo} alt="" />
          </Link>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <Link to="/">forgot your Passsword?</Link>
          <button className="loginbutton" type="submit">
            Sign in
          </button>
          <div className="googleButtonWrapper">
            <GoogleLogin
              onSuccess={successfullLogin}
              onError={onLoginError}
              useOneTap
            />
          </div>
          <p className="mt-5 mb-3 text-muted">&copy; 2017-2021</p>
        </form>
      </main>
    </section>
  )
}
