import { Link } from "react-router-dom";
import { category } from "../common/constant";

const CategorySlider = () => {
    return (<section className="py-5 overflow-hidden">
        <div className="container-lg">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-header d-flex flex-wrap justify-content-between mb-5">
                        <h2 className="section-title">Category</h2>

                        <div className="d-flex align-items-center">
                            <Link to="" className="btn btn-primary me-2">View All</Link>
                            <div className="swiper-buttons">
                                <button className="swiper-prev category-carousel-prev btn btn-yellow">❮</button>
                                &nbsp;
                                <button className="swiper-next category-carousel-next btn btn-yellow">❯</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="category-carousel swiper">
                        <div className="swiper-wrapper">
                            {category.map((item) => {
                                return <Link key={item.name} to={`/category?id=${item.id}`} className="nav-link swiper-slide text-center">
                                    <img src={item.image} className="rounded-circle" alt="Category Thumbnail" />
                                    <h4 className="fs-6 mt-3 fw-normal category-title">{item.name}</h4>
                                </Link>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default CategorySlider;