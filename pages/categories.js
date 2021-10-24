import CategoryCard from "../components/categories/categoryCard";

export default function Categories() {
    const dummyData = [
        { id: 0, src: "/images/logo.png", title: "" },
        { id: 1, src: "/images/romance.png", title: "Romance" },
        { id: 2, src: "/images/love.png", title: "Love" },
        { id: 3, src: "/images/say_prime.png", title: "" },
        { id: 4, src: "/images/office.png", title: "Office" },
        { id: 5, src: "/images/happy.png", title: "Happy" },
        { id: 6, src: "/images/colleagues.png", title: "Colleagues" },
        { id: 7, src: "/images/relationships.png", title: "Relationships" },
        { id: 8, src: "/images/family.png", title: "Family" },
        { id: 9, src: "/images/monday_blues.png", title: "Monday Blues" },
        { id: 10, src: "/images/fancy_friday.png", title: "Fancy Friday" },
        { id: 11, src: "/images/wfh.png", title: "Work from Home" },
        { id: 12, src: "/images/friendships.png", title: "Friendships" },
        { id: 13, src: "/images/explore.png", title: "" },
    ];
    return (
        <div className="wrapper-container categories-wrapper">
            {dummyData.map((item) => (
                <CategoryCard data={item} />
            ))}
            <style jsx>
                {`
                    .categories-wrapper {
                        display: grid;
                        grid-template-columns: repeat(5, minmax(0, 1fr));
                        gap: 12px;
                    }
                    @media (min-width: 640px) {
                        .categories-wrapper {
                            gap: 16px;
                        }
                    }
                    @media (min-width: 1024px) {
                        .categories-wrapper {
                            gap: 20px;
                        }
                    }
                    @media (min-width: 1600px) {
                        .categories-wrapper {
                            gap: 24px;
                        }
                    }
                `}
            </style>
        </div>
    );
}
