export default function CategoryCard({ data }) {
    return (
        <div className="category-card" key={data.key && data.key}>
            <img className="category-card-image" src={data.src && data.src} />
            <div className="category-card-body">
                <h4 className="category-card-title">{data.title && data.title}</h4>
            </div>
            <style jsx>
                {`
                    .category-card {
                        position: relative;
                    }
                    .category-card-image {
                        width: auto;
                        max-width: 100%;
                        object-fit: cover;
                        background-position: center;
                    }
                    .category-card-body {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: flex-end;
                    }
                `}
            </style>
        </div>
    );
}
