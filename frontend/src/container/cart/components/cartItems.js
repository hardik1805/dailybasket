import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { updateItemQty, removeItem } from "../../../redux/slices/cartSlice";
import QuentityStepper from "../../../component/quentityStepper";
import { currencySymbol } from "../../../common/constant";

const CartItems = () => {
    const dispatch = useDispatch();
    const { cartInfo } = useSelector((state) => state.cart);
    const { productList } = useSelector((state) => state.product);

    const getProductDetails = (pid) => {
        return productList.find((_) => _.id === Number(pid))
    }

    const getPriceCalculation = (item) => {
        const { unitPrice, discount } = getProductDetails(item.productId);
        if (discount !== 0) {
            return (Number(unitPrice) * (1 - discount / 100)).toFixed(2)
        } else if (discount) {
            return Number(unitPrice).toFixed(2)
        } else {
            return Number(unitPrice).toFixed(2)
        }
    }

    const changeItemQty = (qty, pid) => {
        const { name, stock } = getProductDetails(pid)
        if (qty > stock) {
            toast.success(`Limited quantity available for product ${name}. Quantity has been reset as per availability.`, { position: "top-right" });
        } else {
            dispatch(updateItemQty({ qty, pid }))
        }
    }

    return <div className="table-responsive cart">
        <table className="table">
            <thead>
                <tr>
                    <th itemScope="col" sco className="card-title text-uppercase text-muted">Product</th>
                    <th itemScope="col" className="card-title text-uppercase text-muted">Price</th>
                    <th itemScope="col" className="card-title text-uppercase text-muted">Quantity</th>
                    <th itemScope="col" className="card-title text-uppercase text-muted">Subtotal</th>
                    <th itemScope="col" className="card-title text-uppercase text-muted"></th>
                </tr>
            </thead>
            <tbody style={{ verticalAlign: 'baseline' }}>
                {cartInfo.items.map((item) => {
                    const { name, image } = getProductDetails(item.productId)
                    return <tr key={item.productId}>
                        <td itemScope="row" className="py-4">
                            <div className="cart-info d-flex flex-wrap align-items-center mb-4">
                                <div className="col-lg-3">
                                    <div className="card-image">
                                        <img src={image} alt="product name" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="card-detail ps-3">
                                        <h5 className="card-title">
                                            <Link to={`/product?id=${item.productId}`} className="text-decoration-none">{name}</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="py-4">
                            {currencySymbol}{getPriceCalculation(item)}
                        </td>
                        <td className="py-4">
                            <QuentityStepper qty={Number(item.qty)} setQty={(qty) => changeItemQty(qty, item.productId)} productDetail={getProductDetails(item.productId)} />
                        </td>
                        <td className="py-4">
                            <div className="total-price">
                                <span className="money text-dark">{currencySymbol}{(getPriceCalculation(item) * item.qty).toFixed(2)}</span>
                            </div>
                        </td>
                        <td className="py-4">
                            <div className="cart-remove" onClick={() => dispatch(removeItem(item.productId))}>
                                <Link to="">
                                    <svg width="24" height="24">
                                        <use xlinkHref="#trash"></use>
                                    </svg>
                                </Link>
                            </div>
                        </td>
                    </tr>
                })}
                {!cartInfo.items.length &&
                    <tr>
                        <td colSpan={4} style={{ textAlign: 'center' }}>There are no items in your cart.</td>
                    </tr>
                }
            </tbody>
        </table>
    </div>
}

export default CartItems;