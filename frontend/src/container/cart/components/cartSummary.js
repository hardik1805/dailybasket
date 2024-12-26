import { Link } from "react-router-dom";

const CartSummary = () => {
    return <div className="cart-totals bg-grey">
        <h4 className="text-dark pb-4">Cart Total</h4>
        <div className="total-price pb-5">
            <table cellspacing="0" className="table text-uppercase">
                <tbody>
                    <tr className="subtotal pt-2 pb-2 border-top border-bottom">
                        <th>Subtotal</th>
                        <td data-title="Subtotal">
                            <span className="price-amount amount text-dark ps-5">
                                <bdi>
                                    <span className="price-currency-symbol">$</span>370.00
                                </bdi>
                            </span>
                        </td>
                    </tr>
                    <tr className="order-total pt-2 pb-2 border-bottom">
                        <th>Total</th>
                        <td data-title="Total">
                            <span className="price-amount amount text-dark ps-5">
                                <bdi>
                                    <span className="price-currency-symbol">$</span>370.00</bdi>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="button-wrap row g-2">
            <div className="col-md-6">
                <Link to="/category" className="btn btn-dark py-3 px-3 text-uppercase btn-rounded-none w-100">Continue Shopping</Link>
            </div>
            <div className="col-md-6">
                <Link to="/checkout" className="btn btn-dark py-3 px-3 text-uppercase btn-rounded-none w-100">Process to Checkout</Link>
            </div>
        </div>
    </div>
}

export default CartSummary;