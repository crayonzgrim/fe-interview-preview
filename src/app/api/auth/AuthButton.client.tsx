'use client'

import { useEffect, useState } from 'react'

import { signin, signout } from '@/auth/helper'
import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'

export default function AuthClientButton() {
  /** Property */
  const session = useSession()

  const [isSignin, setIsSignin] = useState(false)

  /** Lifecycle */
  useEffect(() => {
    if (session?.data?.user) {
      setIsSignin(true)
    } else {
      setIsSignin(false)
    }
  }, [session])

  /** Render */
  return (
    <Button
      onClick={
        isSignin ? async () => await signout() : async () => await signin()
      }
      className="flex h-12 w-28 items-center gap-2 rounded-none border border-black bg-white px-3 py-1 font-bold text-black shadow-[-7px_7px_0px_#000000] hover:bg-transparent sm:px-6 sm:py-3"
    >
      {isSignin ? '로그아웃' : '로그인'}
    </Button>
  )
}
