import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { currencySymbol } from "../common/constant";

const MiniCart = ({ isTotal = false }) => {
    const navigate = useNavigate();
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

    const finalTotal = cartInfo.items.reduce((sum, row) => sum + Number(getPriceCalculation(row) * row.qty), 0)

    return <>
        <h4 className="d-flex justify-content-between align-items-center" style={{ padding: "0px 15px" }}>
            <span className="text-secondery">{isTotal ? "Order Summary" : "Your Cart"}</span>
            {!isTotal && <span className="badge bg-primary rounded-pill">{cartInfo.items.length}</span>}
        </h4>
        <ul className="list-group mb-3">
            {cartInfo.items.map((item) => {
                return <>
                    <li className="list-group-item d-flex justify-content-between lh-sm" >
                        <div>
                            <h6 className="my-0" onClick={() => navigate(`/product?id=${item.productId}`)} style={{ cursor: "pointer" }}>{getProductDetails(item.productId).name}</h6>
                            <small className="text-body-secondary">{getProductDetails(item.productId).info}</small>
                        </div>
                        <div className="d-flex gap-3">
                            <span>{item.qty}</span>
                            <span className="text-body-secondary">{currencySymbol}{getPriceCalculation(item)}</span>
                        </div>
                    </li>
                    {isTotal &&
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <span className="text-dark">Item Total</span>
                            <span className="text-dark">{currencySymbol}{(getPriceCalculation(item) * item.qty).toFixed(2)}</span>
                        </li>
                    }
                </>
            })}
            {isTotal && <>
                <li className="list-group-item lh-sm" style={{ borderTopColor: "#ececec", borderTopWidth: "2px", cursor: 'pointer', textAlign: 'center' }}>
                    <Link to='/cart' className="text-dark">EDIT BAG</Link>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm" style={{ borderTopColor: "#ececec", borderTopWidth: "2px" }}>
                    <strong className="text-dark">Total</strong>
                    <strong className="text-dark">{currencySymbol}{finalTotal.toFixed(2)}</strong>
                </li>
            </>}
        </ul>
    </>
}

export default MiniCart