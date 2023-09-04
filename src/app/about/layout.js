import Link from "next/link";
import './about.css'

export default function Layout({ children }) {
    return (
        <div>
            <br />
            <div className="layout">
                 <h2>About Section</h2>
                <Link href="/about/aboutcollege">Go to About College</Link>
                <Link href="/about/aboutstudents">Go to About Students</Link>
            </div>

            <br />
            <br />
            <br />
            {children}
        </div>
    )
}
