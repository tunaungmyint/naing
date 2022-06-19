import Link from 'next/link'
import { useEffect } from 'react'
import {useRouter} from 'next/router'

export default function NotFound() {

const router = useRouter()

useEffect(()=>{
    setTimeout(()=>{
        router.push('/')
    },3000)
},[])

  return (
    <div className='not-found'>
      <h1>Opps...........</h1>
      <p>Page is not found.</p>
      <p>Go Back to <Link href="/"><a>HomePage</a></Link></p>
    </div>
  )
}
