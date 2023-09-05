"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const navigate = (routeName)=>{
    router.push(routeName)
  }
  return (
    <main >
          <Link href="/home">GO TO HOME</Link>
          <br />
          <br />
          <Link href="/about">GO TO ABOUT</Link>
          <br />
          <br />
          <Link href="/login">GO TO LOGIN</Link>
          <br />
          <br /> 
          <br />
          <br />
          <button onClick={() => navigate('/home')}>GI TO HOME</button>
          <br />
          <br />
          <button onClick={() => navigate('/about')}>GI TO ABOUT</button>
          <br />
          <br />
          <button onClick={() => router.push('/login')}>GI TO LOGIN</button>
          <br />
          <br />
          <button onClick={() => router.push('/productList ')}>GI TO product</button>
          <br />
          <br />
    </main>
  )
}
