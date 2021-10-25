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
                    .category-card:hover .category-card-image {
                        transform: scale(1.1);
                    }
                    @media (min-width: 640px) {
                        .category-card {
                            font: normal 700 14px/150% "Poppins", sans-serif;  
                        }
                    }
                    @media (min-width: 1024px) {
                        .category-card {
                            border-radius: 8px;
                            font: normal 700 16px/150% "Poppins", sans-serif;  
                        }
                    }
                    @media (min-width: 1600px) {
                        .category-card {
                            font: normal 700 18px/150% "Poppins", sans-serif;  
                        }
                    }
                `}
            </style>
        </div>
    );
}
