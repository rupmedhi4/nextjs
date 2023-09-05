"use client"
import Link from 'next/link'
export default function Studentslist() {
  return (
    <div>
      <h1>student list</h1>
      <u>
        <li> 
        <Link href="/studentslist/rup">rup</Link>
        </li>
       
        <li> 
        <Link href="/studentslist/jyoti">jyoti</Link>
        </li>
       
        <li> 
        <Link href="/studentslist/deep">deep</Link>
        </li>
       
      </u>
    </div>
  )
}
