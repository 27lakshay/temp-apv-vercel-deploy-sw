import Link from "next/link";
import { ITEM } from "../../utils/routes";

export default function CategoryCard({ data }) {
    return (
        <Link href={`${ITEM}/${data.title}`}>
            <div className="category-card" key={data.key && data.key}>
                <img className="category-card-image" src={data.src && data.src} />
                <style jsx>
                    {`
                        .category-card {
                            position: relative;
                            overflow: hidden;
                            cursor: pointer;
                            border-radius: 4px;
                            font: normal 700 12px/150% "Poppins", sans-serif;
                            letter-spacing: 3px;
                            text-transform: uppercase;
                            color: #fff;
                        }
                        .category-card-image {
                            height: 100%;
                            width: 100%;
                            object-fit: cover;
                            background-position: center;
                            transition: all 0.3s ease;
                        }
                        .category-card:hover .category-card-image {
                            transform: scale(1.1);
                        }
                        @media (min-width: 640px) {
                        }
                        @media (min-width: 1024px) {
                            .category-card {
                                border-radius: 8px;
                            }
                        }
                        @media (min-width: 1600px) {
                        }
                    `}
                </style>
            </div>
        </Link>
    );
}
