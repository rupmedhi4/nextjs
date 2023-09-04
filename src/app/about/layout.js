"use client"
import Link from "next/link";
import './about.css'
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const pathName = usePathname()
    return (
        <div>
            <br />
            <div className="layout">
                {
                    pathName !== "/about/aboutcollege" ? <>
                        <h2>About Section</h2>
                        <Link href="/about/aboutcollege">Go to About College</Link>
                        <Link href="/about/aboutstudents">Go to About Students</Link>
                    </> : null
                }

            </div>

            <br />
            <br />
            <br />
            {children}
        </div>
    )
}
