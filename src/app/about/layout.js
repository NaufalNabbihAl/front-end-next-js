import Navbar from './navbar'
import Footer from './footer'

export default function DashboardLayout({ children }) {
    return (
        <>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>{children} 
        </>
    )
}