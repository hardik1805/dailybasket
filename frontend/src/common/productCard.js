import {Link} from "react-router-dom";

const ProductCard = ({item, style}) => {
    return <div key={item.name} className="product-item" style={style}>
        <figure>
            <Link to={`/product?id=${item.id}`} title="Product Title">
                <img src={item.image} alt="Product Thumbnail" className="tab-image"/>
            </Link>
        </figure>
        <div className="d-flex flex-column text-center">
            <h3 className="fs-6 fw-normal" style={{ height: '40px' }}>{item.name}</h3>
            <div className="d-flex justify-content-center align-items-center gap-2">
                {item.discount ? <del>${item.unitPrice}</del> : <span className="text-dark fw-semibold">${item.unitPrice}</span>}
                {item.discount !== 0 && <span className="text-dark fw-semibold"> ${((item.unitPrice * (1 - item.discount / 100)).toFixed(2))}</span>}
            </div>
        </div>
        {/*<span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">{item.discount}% OFF</span>*/}
        <Link to="/" className="button-area btn btn-primary rounded-1 p-2 fs-7 btn-cart">
            <svg width="18" height="18">
                <use xlinkHref="#cart"></use>
            </svg>
            Add to Cart
        </Link>
    </div>
}

export default ProductCard;