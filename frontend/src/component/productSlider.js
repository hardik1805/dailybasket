import ProductCard from "../common/productCard";

const ProductSlider = ({ title, data }) => {
    return (<section key={title} id="featured-products" className="products-carousel">
        <div className="container-lg overflow-hidden py-4">
            <div className="row">
                <div className="col-md-12">

                    <div className="section-header d-flex flex-wrap justify-content-between my-4">

                        <h2 className="section-title">{title}</h2>

                        <div className="d-flex align-items-center">
                            <a href="/" className="btn btn-primary me-2">View All</a>
                            <div className="swiper-buttons">
                                <button className="swiper-prev products-carousel-prev btn btn-primary">❮</button>
                                <button className="swiper-next products-carousel-next btn btn-primary">❯</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            {data.map((item) => {
                                return <ProductCard item={item} style={{ width: '286.4px', marginRight: '30px', flexShrink: 0 }} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default ProductSlider;