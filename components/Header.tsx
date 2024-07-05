import Link from 'next/link'

export const Header = () => {
    return (
        <header>
            <h1>Welcome to AddressForge</h1>
            <h1 className="font-trade">This is in Trade Winds</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/tool">Tool</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
