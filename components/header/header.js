'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image.js';
import NavLink from './nav-link.js';
import logo from '@/assets/img/logo.png';
import { MdSearch, MdMenu } from "react-icons/md";
import './header.css';

export default function Header(){
    const [ headerFixed, setHeaderFixed] = useState(false);
    useEffect(() => {
        const headerheight = document.getElementById('header').clientHeight;
        const handleHeaderFixed = () => setHeaderFixed( window.scrollY > headerheight );
        window.addEventListener('scroll', handleHeaderFixed);
        return () => window.removeEventListener('scroll', handleHeaderFixed);
    }, []);
    
    return(
        <header id="header" className={`py-3 position-fixed top-0 end-0 start-0${headerFixed ? ' fixed' : ''}`}>
            <nav className="navbar navbar-expand-lg p-0">
                <div className="container">
                    <Link href="/" className="navbar-brand d-flex gap-2 align-items-center p-0 me-5">
                        <Image src={logo} className="img-fluid" width={97} height={50} alt="CineMania"  />
                    </Link>
                    <button className="navbar-toggler p-0 border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <MdMenu size="24px" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink href="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="/movies">Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="/musics">Musics</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item">
                                <NavLink href="">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <button className="btn p-1 border-0" type="submit">
                                    <MdSearch className="d-block" size="24px" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}