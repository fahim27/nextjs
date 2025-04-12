import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary text-white">
                <div className="container">
                    <div className='d-flex justify-content-between w-100 py-2'>
                        <a className="navbar-brand" href="#">Navbar</a>
                        <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
                            <ul className="navbar-nav  w-100 text-end justify-content-end  ">
                                <li className="nav-item text-white">
                                    <Link href="/" className='nav-link text-white' > Home </Link>
                                </li>
                                <li className="nav-item text-white">
                                    <Link href="/about" className='nav-link text-white'> About </Link>
                                </li>
                                <li className="nav-item text-white">
                                    <Link href="/login" className='nav-link text-white' > Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
