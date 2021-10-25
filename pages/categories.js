import CategoryCard from "../components/categories/categoryCard";
import { getDetailAxios } from "../utils/requests";

export default function Categories(props) {
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
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        grid-auto-rows: 140px;
                        gap: 12px;
                        padding: 1em 0;
                    }
                    @media (min-width: 640px) {
                        .categories-wrapper {
                            grid-template-columns: repeat(3, minmax(0, 1fr));
                            grid-auto-rows: 160px;
                            gap: 16px;
                        }
                    }
                    @media (min-width: 1024px) {
                        .categories-wrapper {
                            grid-template-columns: repeat(4, minmax(0, 1fr));
                            grid-auto-rows: 220px;
                            gap: 20px;
                        }
                    }
                    @media (min-width: 1600px) {
                        .categories-wrapper {
                            grid-template-columns: repeat(5, minmax(0, 1fr));
                            grid-auto-rows: 240px;
                            gap: 24px;
                        }
                    }
                    @media (min-width: 1920px) {
                        .categories-wrapper {
                            grid-template-columns: repeat(5, minmax(0, 1fr));
                            grid-auto-rows: auto;
                            gap: 24px;
                        }
                    }
                `}
            </style>
        </div>
    );
}
export async function getServerSideProps(ctx) {
    var propsData = {
        categoryData: [],
    };
    const categoryResp = await getDetailAxios("categoryData", null, `?limit=${8}&offset=${0}`);
    if (categoryResp && categoryResp.data) {
        propsData.categoryData = categoryResp.data;
    }

    return {
        props: propsData,
    };
}
