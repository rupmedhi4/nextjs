"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function About() {
  const route = useRouter()
  const navigate = (routeName) => {
    route.push(routeName)
  }
  return (
    <div>
      this is about page
      <br />
      <br />
      <button onClick={() => navigate("/about/aboutcollege")}>Go to about college</button>
      <br />
      <br />
      <br />
      <Link href="/about/aboutstudents">Go to about students</Link>
    </div>
  )
}
