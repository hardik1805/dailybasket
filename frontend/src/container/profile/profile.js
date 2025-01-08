import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from '../../component/breadcrumbs';
import { Orders, ScheduleDelivery } from '../../assets/images';
import { addProductToWishlist, getOrders, getUserDetails } from '../../redux/actions/profile';
import { toast } from 'react-toastify';
import { checkCookie } from '../../common/cookie';
import { useNavigate } from 'react-router';
import { loginSuccess, setUserOrderDetails } from '../../redux/slices/userSlice';
import ProductCard from '../../common/productCard';
import { category, currencySymbol, formatDate, getProductDetail } from '../../common/constant';
import MyProfile from './components/myProfile';
import ScheduleDeliveryList from './components/scheduleDelivery';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { _id, userInfo, userOrderDetails } = useSelector((state) => state.user);
    const { productList } = useSelector((state) => state.product);
    const [tab, setTab] = useState(1);
    const element = document.getElementById("preloader");

    useEffect(() => {
        if (!checkCookie('dailyBasket')) navigate('/')
    }, [])

    useMemo(() => {
        if (tab === 4) {
            element.style.display = 'block'
            getOrders('', (res) => {
                element.style.display = 'none'
                if (res.status === 200 || res.status === 201) {
                    dispatch(setUserOrderDetails(res.data.orders))
                } else {
                    toast.error(res.data.message, { position: "top-right" });
                }
            })
        }
    }, [tab])

    const userDetails = () => {
        getUserDetails({ user_id: _id }, (response) => {
            element.style.display = 'none'
            if (response.status === 200 || response.status === 201) {
                const { userDetails } = response.data
                dispatch(loginSuccess(userDetails))
            } else {
                toast.error(response.data.message, { position: "top-right" });
            }
        })
    }

    const onHandleWishlist = (pid) => {
        element.style.display = 'block';
        addProductToWishlist({ product_id: pid, action: userInfo?.wishList?.includes(pid) ? false : true }, (res) => {
            if (res.status === 200 || res.status === 201) {
                toast.success(res.data.message, { position: "top-right" });
                userDetails();
            } else {
                element.style.display = 'none';
                toast.error(res.data.message, { position: "top-right" });
            }
        })
    }

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

        // const { _id, products, updatedAt, total_amount } = userOrderDetails[0];
        // return userOrderDetails.length ? products?.map((item) => {
        //     const { id, image, name, info, categoryId } = getProductDetail(item);
        //     const categoryDetail = category.find(_ => _.id === Number(categoryId))

        //     return <li className="list-group-item lg-d-flex justify-content-between lh-sm" onClick={() => navigate(`/product?id=${id}`)}>
        //         <div className='d-flex w-100 gap-3'>
        //             <div style={{ width: '100px', textAlign: 'center' }}>
        //                 <img src={image} alt="product name" className="img-fluid" style={{ height: "70px" }} />
        //             </div>
        //             <div className='w-100'>
        //                 <div className='d-grid mb-2' style={{ lineHeight: '1.5' }}>
        //                     <b className="text-body-secondary mb-0">Order# {_id}</b>
        //                     <small className="text-body-secondary">Ordered {formatDate(updatedAt)}</small>
        //                     <small className="text-body-secondary">Order Total {currencySymbol}{total_amount}</small>
        //                 </div>
        //                 <div className="product-info">
        //                     <h6 className="pb-1">{name}</h6>
        //                     <p className="m-0 pb-1">{info}</p>
        //                     <div className="meta-product pt-2">
        //                         <div className="meta-item d-flex align-items-baseline">
        //                             <h6 className="item-title no-margin pe-2">Category:</h6>
        //                             <span>{categoryDetail.name}</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </li>
        // }) : null
    }, [userOrderDetails])

    return (<>
        <Breadcrumb title="Account Information" isPath={false} />
        <section className="pb-5">
            <div className="container-lg">
                <div className="row">
                    <div className="col-md-4 col-lg-3 col-xl-2 col-xxl-2">
                        <ul className="account navbar-nav justify-content-end menu-list list-unstyled d-flex mb-0">
                            <li className={`nav-item border-dashed ${tab === 1 ? 'active' : ''}`} onClick={() => setTab(1)}>
                                <div className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24">
                                        <use xlinkHref="#user" xlink></use>
                                    </svg>
                                    <span>My Profile</span>
                                </div>
                            </li>
                            <li className={`nav-item border-dashed ${tab === 2 ? 'active' : ''}`} onClick={() => setTab(2)}>
                                <div className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                    <img src={ScheduleDelivery} height="24px" />
                                    <span>Schedule Delivery </span>
                                </div>
                            </li>
                            <li className={`nav-item border-dashed ${tab === 3 ? 'active' : ''}`} onClick={() => setTab(3)}>
                                <div className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24">
                                        <use xlinkHref="#wishlist" xlink></use>
                                    </svg>
                                    <span>Wishlist</span>
                                </div>
                            </li>
                            <li className={`nav-item border-dashed ${tab === 4 ? 'active' : ''}`} onClick={() => setTab(4)}>
                                <div className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                    <img src={Orders} height="24px" />
                                    <span>Orders</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {tab === 1 && <MyProfile />}
                    {tab === 2 && <ScheduleDeliveryList />}
                    {tab === 3 && <div className="col-md-8 col-lg-9 col-xl-10 col-xxl-10">
                        <h5 className='p-3 border-dashed tab-description-heading'>Favorites List</h5>
                        <div className='card border-0 shadow-sm p-3'>
                            <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4">
                                {(userInfo.wishList.length ? productList.filter(_ => userInfo.wishList.includes(_.id)) : []).map((item) => <div key={item.name} className="wishlist-card col">
                                    <button type="button" className="btn-close" onClick={() => onHandleWishlist(item.id)} ></button>
                                    <ProductCard item={item} isWishlist={true} />
                                </div>)}
                                {(userInfo.wishList.length ? productList.filter(_ => userInfo.wishList.includes(_.id)) : []).length === 0 && "Favorites list not added"}
                            </div>
                        </div>
                    </div>}
                    {tab === 4 && <div className="col-md-8 col-lg-9 col-xl-10 col-xxl-10">
                        <h5 className='p-3 border-dashed tab-description-heading'>Order History</h5>
                        <div className='card border-0 shadow-sm p-3 gap-2'>
                            <section className='col order-product-list'>
                                <ul className="list-group mb-3">
                                    {renderOrderList}
                                </ul>
                            </section>
                        </div>
                    </div>}
                </div>
            </div>
        </section>
    </>
    );
};

export default Profile;
