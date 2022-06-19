import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav>
       
        <Link href="/">
            <a className="logo"><Image src="/logo.png" width={100} height={60} /></a>
        </Link>
       
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/ninjas"><a>မြန်မာဟာသများ</a></Link>
       
    </nav>
  )
}
