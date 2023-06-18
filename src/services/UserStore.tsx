import React from 'react'
import { GoogleUserInfo } from '../types/GoogleUserInfo'

export const useUser = (initial: GoogleUserInfo) =>
  React.useState<GoogleUserInfo>(initial)

export type UserStore = ReturnType<typeof useUser>

const UserContext = React.createContext<UserStore | null>(null)

export const useUserContext = () => React.useContext(UserContext)!

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const user = useUser({} as GoogleUserInfo)
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
