'use client'

import { useEffect } from 'react'

import { signin, signout } from '@/auth/helper'
import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'

export default function AuthClientButton() {
  /** Property */
  const session = useSession()

  /** Lifecycle */
  useEffect(() => {
    if (session?.data?.user) {
      window.localStorage.setItem('user', JSON.stringify(session?.data?.user))
    } else {
      window.localStorage.removeItem('user')
    }
  }, [session?.data?.user])

  /** Render */
  return (
    <Button
      onClick={
        session.status === 'unauthenticated'
          ? async () => await signin()
          : async () => await signout()
      }
      className="flex h-12 w-28 items-center gap-2 rounded-none border border-black bg-white px-3 py-1 font-bold text-black shadow-[-7px_7px_0px_#000000] hover:bg-transparent sm:px-6 sm:py-3"
    >
      {session.status === 'unauthenticated' ? '로그인' : '로그아웃'}
    </Button>
  )
}
