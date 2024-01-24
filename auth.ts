import NextAuth from "next-auth"
// import GitHub from "next-auth/providers/github"

import authConfig from "./auth.config"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./lib/clientPromise"
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log('signIn', { user, account, profile, email, credentials })

      return true
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },
    async session({session, token }) {
      session.user.userData = token?.userData
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      
      if(!token.userData){
        token.userData = user
      }

      return token
      
    }
  },
  adapter: MongoDBAdapter(clientPromise),
  session: {strategy: "jwt"},
  ...authConfig,
  // providers: [GitHub],
})