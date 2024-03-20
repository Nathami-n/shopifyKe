'use client'
 import {createUser} from '@actions/createUser'

const SignUP = () => {
    const handleRegister = () => {
        const user = createUser(); 
    }
  return (
    <div>
    
    <form action={handleRegister}>

    </form>
    </div>
  )
}

export default SignUP