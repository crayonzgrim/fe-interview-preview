import NextAuth, { NextAuthConfig } from 'next-auth'
// import Credentials from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

// interface User {
//   id: string
//   name: string
//   email: string
// }

export const BASE_PATH = '/api/auth'

const authOptions: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
    //     username: {
    //       label: 'Username',
    //       type: 'text',
    //       placeholder: 'username'
    //     },
    //     password: {
    //       label: 'Password',
    //       type: 'password'
    //     }
    //   },
    //   async authorize(credentials): Promise<User | null> {
    //     const users = [
    //       {
    //         id: 'admin',
    //         username: 'admin',
    //         name: 'admin',
    //         password: '1234',
    //         email: 'admin@gmail.com'
    //       }
    //     ]
    //
    //     const user = users.find(
    //       (user) =>
    //         user.username === credentials?.username &&
    //         user.password === credentials?.password
    //     )
    //
    //     return user ? { id: user.id, name: user.name, email: user.email } : null
    //   }
    // })
  ],
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24
  },
  callbacks: {
    signIn: async () => {
      return true
    },
    jwt: async ({ token, user }) => {
      return token
    },
    session: async ({ session, token }) => {
      return session
    },
    redirect: async ({ url, baseUrl }) => {
      if (url.startsWith('/')) return `${baseUrl}${url}`
      if (url) {
        const { search, origin } = new URL(url)
        const callbackUrl = new URLSearchParams(search).get('callbackUrl')
        if (callbackUrl)
          return callbackUrl.startsWith('/')
            ? `${baseUrl}${callbackUrl}`
            : callbackUrl
        if (origin === baseUrl) return url
      }
      return baseUrl
    }
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
