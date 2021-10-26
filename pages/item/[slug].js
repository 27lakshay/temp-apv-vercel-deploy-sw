import React from "react";
import { getDetailAxios } from "../../utils/requests";
import Link from "next/link";
import { CATEGORIES } from "../../utils/routes";

const socialIcons = [
    {
        id: 1,
        src: "/images/icon-fb.svg",
        title: "facebook",
    },
    {
        id: 2,
        src: "/images/icon-twitter.svg",
        title: "twitter",
    },
    {
        id: 3,
        src: "/images/icon-insta.svg",
        title: "instagram",
    },
    {
        id: 4,
        src: "/images/copy-link.svg",
        title: "copy to clipboard",
    },
];

export default function CategoryDetails({ categoryDetails, slug }) {
    // console.log(categoryDetails,"DETAILS");

    // console.log(slug,"SLUG");
    const [copied, setCopied] = React.useState(false);

    function copy() {
        const el = document.createElement("input");
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
    }

    return (
        <>
            <nav className="navbar">
                <Link href="/">
                    <span className="navbar-logo">
                        <img src="/images/logo.png" />
                    </span>
                </Link>
                <span className="navbar-options">
                    <Link href={CATEGORIES}>
                        <span className="option">Categories</span>
                    </Link>
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
                    .option {
                        display: none;
                        padding: 0.25em 1em;
                        color: #ffffff;
                        font: normal 400 18px/150% "Poppins", sans-serif;
                        cursor: pointer;
                        position: relative;
                    }
                    .option:after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 50%;
                        height: 2px;
                        background-color: #ffffff;
                        transition: width 0.3s ease;
                    }
                    .option:hover:after {
                        width: 75%;
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
                        .option {
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
            <div className="desc_img_div">
                <img className="desc_img" src="/images/family.png" alt="gif" />
            </div>

            <ul className="social-share-icons">
                {socialIcons.map((i) => (
                    <li key={i.id}>
                        <img src={i.src} onClick={i.id === 4 ? copy : null} alt={i.title} />
                    </li>
                ))}
            </ul>
            {copied ? <p className="copied-msg">link copied</p> : null}
        </>
    );
}

export async function getServerSideProps(ctx) {
    var propsData = {
        categoryDetails: "",
        slug: "",
    };
    // CATEGORY DATA
    let slug = ctx["query"]["slug"];
    propsData.slug = slug;

    const categoryDetailsResp = await getDetailAxios("getArticleData", null, slug);
    if (categoryDetailsResp && categoryDetailsResp.data) {
        propsData.categoryDetails = categoryDetailsResp.data;
    }

    return { props: propsData };
}
