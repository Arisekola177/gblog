import Link from "next/link";


const AuthLogin = () => {

  const status = 'notauthenticated';
  return (
    <>
    {
       status === 'notauthenticated' ?
        (
        <Link className='text-sm font-semibold hover:text-red-500 hover:border-b-[2px] hover:border-red-500 underline-offset-4  duration-300' href='/login'>Login</Link>
        )
       :
        (
         <>
        <Link className='text-sm font-semibold hover:text-red-500 hover:border-b-[2px] hover:border-red-500 underline-offset-4  duration-300' href='/write'>Write</Link>
        <span> <Link className='text-sm font-semibold hover:text-red-500 hover:border-b-[2px] hover:border-red-500 underline-offset-4  duration-300' href='/logout'>Logout</Link></span> 
        </>
        )
    }
    </>
  )
}

export default AuthLogin