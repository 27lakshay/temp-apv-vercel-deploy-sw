import Link from "next/link";

export default function Navbar({ title }) {
    return (
        <nav className="navbar">
            <Link href="/">
                <span className="navbar-logo">
                    <img src="/images/logo.png" />
                </span>
            </Link>
            {title && <span className="navbar-title">{title}</span>}
            <span className="navbar-options">
                <ul className="options-socials">
                    <li>
                        <img src="/images/icon-fb.svg" />
                    </li>
                    <li>
                        <img src="/images/icon-twitter.svg" />
                    </li>
                    <li>
                        <img src="/images/icon-insta.svg" />
                    </li>
                </ul>
            </span>
            <style jsx>{`
                .navbar {
                    height: 160px;
                    background-color: transparent;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1em 0;
                }
                .navbar-logo {
                    cursor: pointer;
                }
                .navbar-title {
                    font: normal 700 24px/150% "Poppins", sans-serif;
                    display: flex;
                    align-items: center;
                    letter-spacing: 4px;
                    text-transform: uppercase;
                    color: #ffffff;
                    opacity: 0.2;
                }
                .navbar-options {
                    display: none;
                    padding: 0 1em;
                }
                .navbar-options .options-socials {
                    list-style: none;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0;
                    margin: 0;
                    gap: 2rem;
                }
                @media (min-width: 640px) {
                    .navbar-title {
                        font-size: 32px;
                    }
                }
                @media (min-width: 1024px) {
                    .navbar {
                        height: 140px;
                        flex-direction: row;
                        justify-content: space-between;
                    }
                    .navbar-title {
                        font-size: 40px;
                    }
                    .navbar-options {
                        display: block;
                    }
                }
                @media (min-width: 1600px) {
                    .navbar-title {
                        font-size: 48px;
                    }
                }
                @media (min-width: 1920px) {
                    .navbar-title {
                        font-size: 54px;
                    }
                }
            `}</style>
        </nav>
    );
}
