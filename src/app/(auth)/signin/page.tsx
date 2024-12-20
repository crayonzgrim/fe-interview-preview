import { Signin } from '@/components/auth'

export default function SigninPage() {
  return (
    <div className="container">
      <div className="flex h-full flex-col items-center justify-center space-y-10">
        <div className="">
          <h1 className="title">로그인</h1>
        </div>

        <div className="flex w-full items-start justify-center">
          <Signin />
        </div>
      </div>
    </div>
  )
}
