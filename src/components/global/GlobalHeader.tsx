import AuthServerButton from '@/app/api/auth/AuthButton.server'
import Link from 'next/link'

export const GlobalHeader = () => {
  /** Property */
  // const router = useRouter()

  /** Render */
  return (
    <div className="p-5 md:px-12 lg:px-28">
      <div className="flex items-center justify-between">
        <Link href={'/'}>
          <h1 className="border border-black px-3 py-1 font-medium shadow-[-7px_7px_0px_#000000] sm:px-6 sm:py-3">
            FE Interview
          </h1>
        </Link>

        <AuthServerButton />
      </div>
    </div>
  )
}
