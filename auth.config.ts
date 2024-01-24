import type { NextAuthConfig } from "next-auth"
import Credentials from 'next-auth/providers/credentials';
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import bcrypt from 'bcryptjs'
import { LoginSchema } from "./schema";




export default {
  providers: [
    
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      
      // credentials: {
      //   email: {
      //     label: 'email',
      //     type: 'email',
      //     placeholder: 'jsmith@example.com',
      //   },
      //   password: { label: 'Password', type: 'password' }
      // },
      async authorize(credentials) {
        
        const validatedFields = LoginSchema.safeParse(credentials);

        return {
          name:"Demo Account",
          age:"30",
          email:"Gello@gmail.com",
        }
        return null
      }
    })
  ],
} satisfies NextAuthConfig