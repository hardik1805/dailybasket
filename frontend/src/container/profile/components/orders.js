import { toast } from "react-toastify"
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../redux/actions/profile"
import { setUserOrderDetails } from "../../../redux/slices/userSlice"
import { useMemo } from "react";
import { category, currencySymbol, formatDate, getProductDetail } from "../../../common/constant";

const MyOrders = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userOrderDetails } = useSelector((state) => state.user);
    const element = document.getElementById("preloader");

    useMemo(() => {
        element.style.display = 'block'
        getOrders('', (res) => {
            element.style.display = 'none'
            if (res.status === 200 || res.status === 201) {
                dispatch(setUserOrderDetails(res.data.orders))
            } else {
                toast.error(res.data.message, { position: "top-right" });
            }
        })
    }, [])

    const renderOrderList = useMemo(() => {
        return userOrderDetails.length ? userOrderDetails.map((item) => {
            const { _id, products, updatedAt, total_amount } = item
            const { id, image, name, info, categoryId } = getProductDetail(products[0]);
            const categoryDetail = category.find(_ => _.id === Number(categoryId))

            return <li className="list-group-item lg-d-flex justify-content-between lh-sm" onClick={() => navigate(`/product?id=${id}`)}>
                <div className='d-flex w-100 gap-3'>
                    <div style={{ width: '100px', textAlign: 'center' }}>
                        <img src={image} alt="product name" className="img-fluid" style={{ height: "70px" }} />
                    </div>
                    <div className='w-100'>
                        <div className='d-grid mb-2' style={{ lineHeight: '1.5' }}>
                            <b className="text-body-secondary mb-0">Order# {_id}</b>
                            <small className="text-body-secondary">Ordered {formatDate(updatedAt)}</small>
                            <small className="text-body-secondary">Order Total {currencySymbol}{total_amount}</small>
                        </div>
                        <div className="product-info">
                            <h6 className="pb-1">{name}</h6>
                            <p className="m-0 pb-1">{info}</p>
                            <div className="meta-product pt-2">
                                <div className="meta-item d-flex align-items-baseline">
                                    <h6 className="item-title no-margin pe-2">Category:</h6>
                                    <span>{categoryDetail.name}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        }) : null
    }, [userOrderDetails])

    return <div className="col-md-8 col-lg-9 col-xl-10 col-xxl-10">
        <h5 className='p-3 border-dashed tab-description-heading'>Order History</h5>
        <div className='card border-0 shadow-sm p-3 gap-2'>
            <section className='col order-product-list'>
                <ul className="list-group mb-3">
                    {renderOrderList}
                </ul>
            </section>
        </div>
    </div>
}

export default MyOrders