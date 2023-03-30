
import { Inter } from '@next/font/google'
import DefaultLayout from './../layout/DefaultLayout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAuth } from 'firebase/auth';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router= useRouter()
  const auth = getAuth()
  const handleLogout = async()=>{
    await  auth.signOut()
    router.push('/login')
  }
  return (
    <>
      <main className='container mx-auto'>
        <div title='homepage'>home</div>
        <button title='logout' className="text-primary p-2 rounded-sm active:scale-90 bg-four" onClick={handleLogout}>
          Logout
        </button>
      </main>
    </>
  )
}

Home.getLayout = DefaultLayout
