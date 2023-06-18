import jwtDecode from 'jwt-decode'
import { GoogleAuthResponse } from '../types/GoogleAuthResponse'
import { GoogleUserInfo } from '../types/GoogleUserInfo'

export class AuthenticationService {
  private readonly userTokenKey = 'userToken'

  public AuthenticateUserWithToken(token: GoogleAuthResponse) {
    localStorage.setItem(this.userTokenKey, JSON.stringify(token.credential))
  }

  public GetAuthenticatedUserToken(): GoogleUserInfo {
    if (!this.IsUserAuthenticated()) {
      throw new Error('User is not authenticated')
    }
    const user = jwtDecode(localStorage.getItem(this.userTokenKey) || '')
    return user as GoogleUserInfo
  }

  private IsUserAuthenticated(): boolean {
    return localStorage.getItem(this.userTokenKey) !== null
  }
}
