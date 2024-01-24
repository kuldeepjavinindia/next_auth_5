'use client'

import { useEffect } from "react"
import { userSession } from "../../actions/helper"
import { LoginAction, socialLoginAction } from "../../actions/LoginAction"


const page =  () => {
    
    
    const callAction = async () => {
        await LoginAction()
    }

    useEffect( async()=> {
        console.log( await userSession())
    }, [])
  return (
    <div>

         
        {JSON.stringify(userSession())}
       <button onClick={(e)=>callAction(e)} >
        signIn
      </button>
       <button onClick={(e)=>
      socialLoginAction('google', '/test')
      } >
        Google Sign in button
      </button>
    </div>
  )
}

export default page
