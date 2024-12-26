import { Link } from "react-router-dom";
import { cartItems } from "../../../common/constant";

const CartItems = () => {
    return <div className="table-responsive cart">
        <table className="table">
            <thead>
                <tr>
                    <th itemScope="col" sco className="card-title text-uppercase text-muted">Product</th>
                    <th itemScope="col" className="card-title text-uppercase text-muted">Quantity</th>
                    <th itemScope="col" className="card-title text-uppercase text-muted">Subtotal</th>
                    <th itemScope="col" className="card-title text-uppercase text-muted"></th>
                </tr>
            </thead>
            <tbody style={{ verticalAlign: 'baseline' }}>
                {cartItems.map((item) => {
                    return <tr key={item.id}>
                        <td itemScope="row" className="py-4">
                            <div className="cart-info d-flex flex-wrap align-items-center mb-4">
                                <div className="col-lg-3">
                                    <div className="card-image">
                                        <img src={item.image} alt="product name" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="card-detail ps-3">
                                        <h5 className="card-title">
                                            <Link to="" className="text-decoration-none">{item.name}</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="py-4">
                            <div className="input-group product-qty w-50">
                                <span className="input-group-btn">
                                    <button type="button" className="quantity-left-minus btn btn-light btn-number" data-type="minus">
                                        <svg width="16" height="16">
                                            <use xlinkHref="#minus"></use>
                                        </svg>
                                    </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number text-center" value={item.qty} />
                                <span className="input-group-btn">
                                    <button type="button" className="quantity-right-plus btn btn-light btn-number" data-type="plus"
                                        data-field="">
                                        <svg width="16" height="16">
                                            <use xlinkHref="#plus"></use>
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </td>
                        <td className="py-4">
                            <div className="total-price">
                                <span className="money text-dark">${(item.price * item.qty).toFixed(2)}</span>
                            </div>
                        </td>
                        <td className="py-4">
                            <div className="cart-remove">
                                <Link to="">
                                    <svg width="24" height="24">
                                        <use xlinkHref="#trash"></use>
                                    </svg>
                                </Link>
                            </div>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}

export default CartItems;