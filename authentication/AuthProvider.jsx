'use client'

import { SessionProvider } from 'next-auth/react'
const AuthProvider = ({ children, session }) => {
  console.log(session)
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider
