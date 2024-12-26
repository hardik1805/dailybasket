import { Link } from "react-router-dom";
import { ProductLarge1, ProductLarge2, ProductLarge3, ProductLarge4, ProductLarge5 } from "../../assets/images";
import Breadcrumb from "./components/breadcrumbs";

const ProductDetail = () => {
    return <>
        <section id="selling-product" className="single-product mt-0 mt-md-5">
            <div className="container-lg">
                <Breadcrumb isPath={true}/>
                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="row flex-column-reverse flex-lg-row">
                            <div className="col-md-12 col-lg-2">
                                <div className="swiper product-thumbnail-slider">
                                    <div className="pdp-swiper-wrapper">
                                        <div className="pdp-swiper-slide">
                                            <img src={ProductLarge1} alt="" className="thumb-image img-fluid" />
                                        </div>
                                        <div className="pdp-swiper-slide">
                                            <img src={ProductLarge2} alt="" className="thumb-image img-fluid" />
                                        </div>
                                        <div className="pdp-swiper-slide">
                                            <img src={ProductLarge3} alt="" className="thumb-image img-fluid" />
                                        </div>
                                        <div className="pdp-swiper-slide">
                                            <img src={ProductLarge4} alt="" className="thumb-image img-fluid" />
                                        </div>
                                        <div className="pdp-swiper-slide">
                                            <img src={ProductLarge5} alt="" className="thumb-image img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-10">
                                <div className="swiper product-large-slider">
                                    <div className="swiper-wrapper">
                                        <div className="pdp-large-swiper-slide">
                                            <div className="image-zoom" data-scale="2.5" data-image="images/product-large-1.jpg"><img
                                                src={ProductLarge1} alt="product-large" className="img-fluid" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="product-info">
                            <div className="element-header">
                                <h2 itemprop="name">Cashew Butter 500mg CBD</h2>
                                <div className="rating-container d-flex gap-0 align-items-center">
                                    <span className="rating me-2">
                                        <svg width="24" height="24" className="text-warning">
                                            <use xlinkHref="#star-full"></use>
                                        </svg>
                                        <svg width="24" height="24" className="text-warning">
                                            <use xlinkHref="#star-full"></use>
                                        </svg>
                                        <svg width="24" height="24" className="text-warning">
                                            <use xlinkHref="#star-full"></use>
                                        </svg>
                                        <svg width="24" height="24" className="text-warning">
                                            <use xlinkHref="#star-full"></use>
                                        </svg>
                                        <svg width="24" height="24" className="text-warning">
                                            <use xlinkHref="#star-half"></use>
                                        </svg>
                                    </span>
                                    <span className="rating-count">(4.5)</span>
                                </div>
                            </div>
                            <div className="product-price pt-3 pb-3">
                                <strong className="text-primary display-6 fw-bold">$870.00</strong><del className="ms-2">$940.00</del>
                            </div>
                            <p>Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea
                                blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris,
                                cras egestas quam venenatis neque.</p>
                            <div className="cart-wrap py-4">
                                <div className="color-options pb-3">
                                    <div className="color-toggle" data-option-index="0">
                                        <h6 className="item-title text-uppercase text-dark">Color:</h6>

                                        <input type="radio" className="btn-check" name="options-color" id="option5" autocomplete="off" checked />
                                        <label className="btn" for="option5">Green</label>

                                        <input type="radio" className="btn-check" name="options-color" id="option6" autocomplete="off" />
                                        <label className="btn" for="option6">Orange</label>

                                        <input type="radio" className="btn-check" name="options-color" id="option7" autocomplete="off" disabled />
                                        <label className="btn" for="option7">Red</label>

                                        <input type="radio" className="btn-check" name="options-color" id="option8" autocomplete="off" />
                                        <label className="btn" for="option8">Black</label>
                                    </div>
                                </div>
                                <div className="swatch" data-option-index="1">
                                    <h6 className="item-title text-uppercase text-dark">Size:</h6>
                                    <input type="radio" className="btn-check" name="options-size" id="option9" autocomplete="off" checked />
                                    <label className="btn" for="option9">XL</label>

                                    <input type="radio" className="btn-check" name="options-size" id="option10" autocomplete="off" />
                                    <label className="btn" for="option10">L</label>

                                    <input type="radio" className="btn-check" name="options-size" id="option11" autocomplete="off" disabled />
                                    <label className="btn" for="option11">M</label>

                                    <input type="radio" className="btn-check" name="options-size" id="option12" autocomplete="off" />
                                    <label className="btn" for="option12">S</label>
                                </div>
                                <div className="product-quantity pt-3">
                                    <div className="stock-number text-dark"><em>2 in stock</em></div>
                                    <div className="stock-button-wrap">

                                        <div className="input-group product-qty" style={{ maxWidth: '150px' }}>
                                            <span className="input-group-btn">
                                                <button type="button" className="quantity-left-minus btn btn-light btn-number" data-type="minus"
                                                    data-field="">
                                                    <svg width="16" height="16">
                                                        <use xlinkHref="#minus"></use>
                                                    </svg>
                                                </button>
                                            </span>
                                            <input type="text" id="quantity" name="quantity" className="form-control input-number text-center"
                                                value="1" min="1" max="100" />
                                            <span className="input-group-btn">
                                                <button type="button" className="quantity-right-plus btn btn-light btn-number" data-type="plus"
                                                    data-field="">
                                                    <svg width="16" height="16">
                                                        <use xlinkHref="#plus"></use>
                                                    </svg>
                                                </button>
                                            </span>
                                        </div>
                                        <div className="qty-button d-flex flex-wrap pt-3">
                                            <button type="submit" className="btn btn-primary py-3 px-4 text-uppercase me-3 mt-3">Buy now</button>
                                            <Link to="/cart" name="add-to-cart" value="1269" className="btn btn-dark py-3 px-4 text-uppercase mt-3">Add to cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="meta-product py-2">
                                <div className="meta-item d-flex align-items-baseline">
                                    <h6 className="item-title no-margin pe-2">SKU:</h6>
                                    <span>1223</span>
                                </div>
                                <div className="meta-item d-flex align-items-baseline">
                                    <h6 className="item-title no-margin pe-2">Category:</h6>
                                    <Link to="">Watch</Link>, <Link to=""> Screen touch</Link>
                                </div>
                                <div className="meta-item d-flex align-items-baseline">
                                    <h6 className="item-title no-margin pe-2">Tags:</h6>
                                    <Link to="">Classic</Link>, <Link to=""> Modern</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="product-info-tabs py-3">
            <div className="container-lg">
                <div className="row">
                    <div className="tab-content py-4" id="v-pills-tabContent">
                        <div className="tab-pane active">
                            <h5>Product Description</h5>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                                Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
                                nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim
                                pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
                                vulputate sem tristique cursus.</p>
                            <ul style={{ listStyleType: "disc" }} className="list-unstyled ps-4">
                                <li>Donec nec justo eget felis facilisis fermentum.</li>
                                <li>Suspendisse urna viverra non, semper suscipit pede.</li>
                                <li>Aliquam porttitor mauris sit amet orci.</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                                Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
                                nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim
                                pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
                                vulputate sem tristique cursus. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default ProductDetail;