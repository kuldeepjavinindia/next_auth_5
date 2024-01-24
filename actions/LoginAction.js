'use server'
// import { LoginSchema } from "@/schema";
import { signIn } from "./../auth";

export const LoginAction = async () => {
  await signIn('credentials', {
    email: "ak@gmail.com",
    password: "123456",
    redirectTo:'/'
  });

    let values = {
        email: "ak@gmail.com",
        password: "123456",
    }

// const validatedFields = LoginSchema.safeParse(values)
//     if(!validatedFields.success){
//         return {
//             error: "invalid files"
//         }
//     }

//     const {
//         email,
//         password
//     } = validatedFields.data

//     try {
//         await signIn("credentials", {
//             email,
//             password,
//             redirectTo: '/'
//         })
//     } catch (error) {
//         if(error instanceof AuthError){
//             switch (error.type) {
//                 case "CredentialsSignin":
//                         return {
//                             error: "invail credentials!"
//                         }
//                     break;
            
//                 default:
//                     return {
//                         error: "Something went wrong!"
//                     }
//                     break;
//             }
//         }
//         throw error;
//     }


};
