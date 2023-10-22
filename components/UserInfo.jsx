"use client"
import { signOut } from "next-auth/react"
import {useSession} from "next-auth/react"

const UserInfo = () => {
  const {data: session} = useSession();
  return (
    <div className='grid place-items-center h-screen'>
        <div className='shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6'>
            <div className='font-bold'>Name: <span>{session?.user?.name}</span></div>
            <div className='font-bold'>Email: <span>{session?.user?.email}</span></div>
            <button onClick={()=>signOut()} className='bg-red-500 text-white font-bold py-2 px-6 rounded-md'>Sign Out</button>
        </div>
    </div>
  )
}

export default UserInfo