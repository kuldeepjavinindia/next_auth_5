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
    
  },
  adapter: MongoDBAdapter(clientPromise),
  session: {strategy: "jwt"},
  ...authConfig,
  // providers: [GitHub],
})