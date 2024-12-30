import { BASE_PATH, auth } from '@/auth'
import { SessionProvider } from 'next-auth/react'
import { cookies } from 'next/headers'

import AuthClientButton from './AuthButton.client'

export default async function AuthServerButton() {
  /** Property */
  const cookieStore = await cookies()

  const session = await auth()

  if (session && session.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image
    }
  }

  console.log(cookieStore.get('authjs.session-token'))

  /** Render */
  return (
    <SessionProvider basePath={BASE_PATH} session={session}>
      <AuthClientButton />
    </SessionProvider>
  )
}
