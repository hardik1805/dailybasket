import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "./components/breadcrumbs";
import { category, product } from "../../common/constant";
import { useState } from "react";

const ProductDetail = () => {
    const location = useLocation();
    const { search } = location
    const prodID = new URLSearchParams(search).get("id")

    const productDetail = product.find(_ => _.id === Number(prodID))
    const categoryDetail = category.find(_ => _.id === Number(productDetail.categoryId))

    const [qty, setQty] = useState(1);

    const onHandleCart = () => {

        console.log("qty:-", qty, productDetail, { cartID: "bNtx3zqrZBzXXBGN2l5TuY9DrVgvH9GX", productId: productDetail.id, qty });


    }

    return <section id="selling-product" className="single-product mt-0 mt-md-5">
        <div className="container-lg">
            <Breadcrumb category={categoryDetail} product={productDetail} />
            <div className="row g-5">
                <div className="col-lg-6">
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-md-12 col-lg-12">
                            <div className="swiper product-large-slider">
                                <div className="swiper-wrapper">
                                    <div className="pdp-large-swiper-slide">
                                        <div className="image-zoom" data-scale="2.5" data-image="images/product-large-1.jpg"><img
                                            src={productDetail.image} alt="product-large" className="img-fluid" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="product-info">
                        <div className="element-header">
                            <h2 itemprop="name">{productDetail.name}</h2>
                        </div>
                        <div className="product-price pt-3 pb-3">
                            {productDetail.discount !== 0 && <span className="text-primary display-6 fw-bold"> ${((productDetail.unitPrice * (1 - productDetail.discount / 100)).toFixed(2))}</span>}
                            {productDetail.discount ? <del className="ms-2">${productDetail.unitPrice}</del> : <span className="text-primary display-6 fw-bold">${productDetail.unitPrice}</span>}
                        </div>
                        <p style={{ whiteSpace: 'pre-wrap' }}>{productDetail.info}</p>
                        <div className="meta-product py-2">
                            <div className="meta-item d-flex align-items-baseline">
                                <h6 className="item-title no-margin pe-2">Category:</h6>
                                <Link to={`/category?id=${categoryDetail.id}`}>{categoryDetail.name}</Link>
                            </div>
                        </div>
                        <div className="cart-wrap py-4">
                            <div className="product-quantity">
                                <div className="stock-button-wrap">
                                    <div className="input-group product-qty" style={{ maxWidth: '150px' }}>
                                        <span className="input-group-btn">
                                            <button type="button" onClick={() => setQty(qty > 1 ? qty - 1 : 1)} className="quantity-left-minus btn btn-light btn-number">
                                                <svg width="16" height="16">
                                                    <use xlinkHref="#minus"></use>
                                                </svg>
                                            </button>
                                        </span>
                                        <input type="text" name="quantity" className="form-control input-number text-center"
                                            value={qty} min="1" max="100" onChange={(e) => setQty(isNaN(Number(e.target.value)) ? 1 : e.target.value)} />
                                        <span className="input-group-btn">
                                            <button type="button" onClick={() => setQty(qty + 1)} className="quantity-right-plus btn btn-light btn-number">
                                                <svg width="16" height="16">
                                                    <use xlinkHref="#plus"></use>
                                                </svg>
                                            </button>
                                        </span>
                                    </div>
                                    {/* <div className="form-check mt-3" style={{ display: 'flex', alignItems: 'center' }}>
                                        <input type="checkbox" className="form-check-input" id="same-address" style={{ border: '1px solid #787474', padding: '10px' }} />
                                        <label className="form-check-label" for="same-address">
                                            &nbsp;Yes, I confirm that I am 21 years of age or older.
                                        </label>
                                    </div> */}
                                    <div className="qty-button d-flex flex-wrap pt-3">
                                        <button type="submit" className="btn btn-primary py-3 px-4 text-uppercase me-3 mt-3">Buy now</button>
                                        <button type="button" onClick={onHandleCart} className="btn btn-dark py-3 px-4 text-uppercase mt-3">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default ProductDetail;