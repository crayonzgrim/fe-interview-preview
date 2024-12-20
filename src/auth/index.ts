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
    // Credentials({
    //   name: 'Credentials',
    //   credentials: {
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
  secret: process.env.NEXTAUTH_SECRET
}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
