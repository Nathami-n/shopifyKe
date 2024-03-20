'use client'
import { createUser } from '@app/actions/createUser'

const SignUP = () => {
    const handleRegister = (FormData: FormData) => {
        const user = createUser(FormData);
        console.log(user);
    }
    return (
        <div 
        className="
        flex
        justify-center
        items-center
        h-screen
        ">
           
            <form 
            className="
            border
            shadow-lg
            rounded-lg
            p-5
            h-[500px]
            "
            action={handleRegister}
            method='POST'
            >
             <h1 className="text-rose-600 text-xl text-center "> Awesome Form</h1>
                <input
                    type="text"
                    name='name'
                    required
                    className='
                    outline-none
                    border
                    w-full
                    p-5
                    mt-12
                    '
                />
                <input
                    type="password"
                    name='password'
                    required
                    className='
                    outline-none
                    border
                    w-full
                    p-5
                    mt-12
                    '
                />
                <button
                className='
                w-full
                border
                border-rose-400
                p-3
                bg-rose-400
                text-white
                rounded-lg
                mt-6
                ' 
                >Submit</button>
            </form>
        </div>
    )
}

export default SignUP