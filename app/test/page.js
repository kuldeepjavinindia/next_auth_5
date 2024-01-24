'use client'

import { useEffect } from "react"
import { userSession } from "../../actions/helper"
import { LoginAction } from "../../actions/LoginAction"


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
    </div>
  )
}

export default page
