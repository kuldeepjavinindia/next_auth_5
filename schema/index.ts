import * as z from 'zod'


export const LoginSchema = z.object({
    email: z.string().email({

        message:"Email is required!"
    }),
    password: z.string().min(1, {
        message:'password is required'
    })
})


export const RegisterSchema = z.object({
    email: z.string().email({

        message:"Email is required!"
    }),
    password: z.string().min(6, {
        message:'minimum 6 char is required'
    }),
    name: z.string().min(1, {
        message:'name is required'
    }),
})