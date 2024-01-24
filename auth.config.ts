import type { NextAuthConfig } from "next-auth"
import Credentials from 'next-auth/providers/credentials';

import bcrypt from 'bcryptjs'
import { LoginSchema } from "./schema";




export default {
  providers: [
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