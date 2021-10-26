import { getDetailAxios } from "../utils/requests"; 
import Link from "next/link";
const imageGridData = [
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

function Home({ categoryData }) {
  // console.log(categoryData, "category data");
  return (
    <div className="image-grid">
      {imageGridData.map((k) => (
        <div key={k.id} id={"item-" + k.id}>
          <Link href={k.id === 13 ? "/categories" : "/"}>
            <img className="img-src" src={k.src} alt={k.title} />
          </Link>
          <h3 className="image-title">{k.title}</h3>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(ctx) {
  var propsData = {
    categoryData: [],
  };
  const categoryResp = await getDetailAxios(
    "categoryData",
    null,
    `?offset=${8}&limit=${8}`
  );
  if (categoryResp && categoryResp.data) {
    propsData.categoryData = categoryResp.data;
  }

  return {
    props: propsData,
  };
}
export default Home;
