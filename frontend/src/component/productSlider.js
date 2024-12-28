import ProductCard from "../common/productCard";
import Slider from "react-slick";

const ProductSlider = ({ title, data }) => {
    const productConfig = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
    };

    return (<section key={title} id="featured-products" className="products-carousel">
        <div className="container-lg overflow-hidden py-4">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header d-flex flex-wrap justify-content-between my-4">
                        <h2 className="section-title">{title}</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="product-grid row">
                        <Slider {...productConfig}>
                            {data.map((item) => {
                                return <div key={item.title} className="col"><ProductCard item={item} style={{ width: '286.4px', marginRight: '30px', flexShrink: 0 }} /></div>
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default ProductSlider;