import { BASE_PATH, auth } from '@/auth'
import { SessionProvider } from 'next-auth/react'

import AuthClientButton from './AuthButton.client'

export default async function AuthServerButton() {
  /** Property */
  const session = await auth()

  if (session && session.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email
    }
  }

  /** Render */
  return (
    <SessionProvider basePath={BASE_PATH} session={session}>
      <AuthClientButton />
    </SessionProvider>
  )
}
