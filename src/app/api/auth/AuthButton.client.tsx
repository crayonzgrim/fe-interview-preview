'use client'

import { useEffect, useState } from 'react'

import { signin, signout } from '@/auth/helper'
import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'

export default function AuthClientButton() {
  /** Property */
  const session = useSession()

  const [isSignin, setIsSignin] = useState(false)

  const signinHandler = async () => {
    await signin()
  }

  const signoutHandler = async () => {
    await signout()
  }

  /** Lifecycle */
  useEffect(() => {
    console.log(session?.data?.user)
    console.log(window.localStorage.getItem('user'))

    if (session?.data?.user) {
      setIsSignin(true)
      window.localStorage.setItem('user', JSON.stringify(session?.data?.user))
    } else {
      setIsSignin(false)
      window.localStorage.removeItem('user')
    }
    // if (session?.data?.user) {
    //   setIsSignin(true)
    //   window.localStorage.setItem('user', JSON.stringify(session?.data?.user))
    // } else {
    //   signoutHandler()
    // }
  }, [session?.data?.user])

  /** Render */
  return session?.data?.user ? (
    <Button
      onClick={async () => {
        window.localStorage.removeItem('user')
        await signout()
      }}
      className="flex h-12 w-28 items-center gap-2 rounded-none border border-black bg-white px-3 py-1 font-bold text-black shadow-[-7px_7px_0px_#000000] hover:bg-transparent sm:px-6 sm:py-3"
    >
      로그아웃
    </Button>
  ) : (
    <Button
      onClick={async () => await signin()}
      className="flex h-12 w-28 items-center gap-2 rounded-none border border-black bg-white px-3 py-1 font-bold text-black shadow-[-7px_7px_0px_#000000] hover:bg-transparent sm:px-6 sm:py-3"
    >
      로그인
    </Button>
  )

  // return (
  //   <Button
  //     onClick={session?.data?.user ? signoutHandler : signinHandler}
  //     className="flex h-12 w-28 items-center gap-2 rounded-none border border-black bg-white px-3 py-1 font-bold text-black shadow-[-7px_7px_0px_#000000] hover:bg-transparent sm:px-6 sm:py-3"
  //   >
  //     {isSignin ? '로그아웃' : '로그인'}
  //   </Button>
  // )
}
