import {Link} from "react-router-dom";

const ProductCard = ({item, style}) => {
    return <div key={item.name} className="product-item" style={style}>
        <figure>
            <Link to={`/product?id=${item.id}`} title="Product Title">
                <img src={item.image} alt="Product Thumbnail" className="tab-image"/>
            </Link>
        </figure>
        <div className="d-flex flex-column text-center">
            <h3 className="fs-6 fw-normal">{item.name}</h3>
            <div>
                <span className="rating">
                    <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                    <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                    <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                    <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                    <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-half"></use></svg>
                </span>
                <span>(222)</span>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-2">
                {item.discount ? <del>${item.unitPrice}</del> : <span>${item.unitPrice}</span>}
                {item.discount !== 0 && <span
                    className="text-dark fw-semibold"> ${((item.unitPrice * (1 - item.discount / 100)).toFixed(2))}</span>}
                <span
                    className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">{item.discount}% OFF</span>
            </div>
            <div className="button-area p-3 pt-0">
                <div className="row g-1 mt-2">
                    <div className="col-3"><input type="number" name="quantity"
                                                  className="form-control border-dark-subtle input-number quantity"
                                                  value="1"/></div>
                    <div className="col-7"><Link to="" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart">
                        <svg width="18" height="18">
                            <use xlinkHref="#cart"></use>
                        </svg>
                        Add to Cart</Link></div>
                    <div className="col-2"><Link to="" className="btn btn-outline-dark rounded-1 p-2 fs-6">
                        <svg width="18" height="18">
                            <use xlinkHref="#heart"></use>
                        </svg>
                    </Link></div>
                </div>
            </div>
        </div>
    </div>
}

export default ProductCard;