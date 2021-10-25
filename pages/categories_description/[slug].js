import React from "react";
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

export default function CategoryDetails({categoryDetails, slug}) {
    console.log(categoryDetails,"DETAILS");

    console.log(slug,"SLUG");
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
      <div id="category-details-nav">
        <img src="/images/logo.png" alt="logo" className="alignleft" />
        <p className="categories_link">CATEGORIES</p>
        <div style={{ clear: "both" }}></div>
      </div>
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
  
  export default CategoryDetails;