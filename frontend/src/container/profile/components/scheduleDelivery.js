import { useMemo } from "react";
import { getScheduledOrders } from "../../../redux/actions/profile";
import { useDispatch, useSelector } from "react-redux";
import { setUserScheduledOrders } from "../../../redux/slices/userSlice";
import { toast } from "react-toastify";

const ScheduleDeliveryList = () => {
    const dispatch = useDispatch();
    const { userScheduledOrders } = useSelector((state) => state.user);
    const element = document.getElementById("preloader");

    useMemo(() => {
        element.style.display = 'block'
        getScheduledOrders('', (res) => {
            console.log("res=", res);
            element.style.display = 'none'
            if (res.status === 200 || res.status === 201) {
                dispatch(setUserScheduledOrders(res.data.orders))
            } else {
                toast.error(res?.response?.data?.message, { position: "top-right" });
            }
        })
    }, [])

    const renderScheduleList = useMemo(() => {
        console.log("userScheduledOrders:-", userScheduledOrders);
    }, [userScheduledOrders])

    return <div className="col-md-8 col-lg-9 col-xl-10 col-xxl-10">
        <h5 className='p-3 border-dashed tab-description-heading'>Delivery Information</h5>
        <div className='card border-0 shadow-sm p-3'>
            <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-4">
                {[1, 2, 3, 4, 5, 6].map((item) => {
                    return <div key={item} className="col mt-3">
                        <div className="delivery-info card mb-3 border border-dark-subtle p-2">
                            <button type="button" className="btn-close"></button>
                            <div className="delivery-info-body card-body p-0">
                                <h6 className="d-flex">
                                    <svg width="32" height="32">
                                        <use xlinkHref="#secure"></use>
                                    </svg>
                                    1205654815
                                </h6>
                                <p className="card-text">
                                    <b>Next Delivery :</b> <span>11/12/2025</span>
                                </p>
                                <p className="card-text">
                                    <b>Remaining :</b> <span>3</span>
                                </p>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        </div>
    </div>
}

export default ScheduleDeliveryList