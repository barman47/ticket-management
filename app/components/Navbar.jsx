import Link from 'next/link';
import Image from 'next/image';
import logo from './dojo-logo.png';
import LogoutButton from './LogoutButton';

export default function Navbar({ user }) {
    return (
        <nav>
            <Image 
                src={logo}
                alt="Dojo Helpdesk logo"
                width={70}
                quality={100}
                placeholder='blur'
            />
            <Link href="/"><h1>Dojo Helpdesk</h1></Link>
            <Link href="/">Dashboard</Link>
            <Link href="/tickets" className="mr-auto">Tickets</Link>
            
            {user && <span>Hello, {user.email}</span>}
            <LogoutButton />
        </nav>
    );
}
