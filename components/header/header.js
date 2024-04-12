import Link from 'next/link';

export default function Header(){
    return(
        <header id="header" className="position-fixed top-0 end-0 left-0">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link href="/" className="navbar-brand">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/movies" className="nav-link active" aria-current="page">Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/musics" className="nav-link">Musics</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}