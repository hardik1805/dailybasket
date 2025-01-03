import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from '../../component/breadcrumbs';
import { Orders, ScheduleDelivery } from '../../assets/images';
import SimpleReactValidator from 'simple-react-validator';
import PostcodeLookupComponent from '../../component/postcodeLookup';
import { addProductToWishlist, getUserDetails, updateUserDetails } from '../../redux/actions/profile';
import { toast } from 'react-toastify';
import { checkCookie } from '../../common/cookie';
import { useNavigate } from 'react-router';
import { loginSuccess, updateUserInfo } from '../../redux/slices/userSlice';
import { product, products } from '../../common/constant';
import ProductCard from '../../common/productCard';
import { Link } from 'react-router-dom';



const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { _id, userInfo } = useSelector((state) => state.user);
    const validator = useRef(new SimpleReactValidator());
    const [, forceUpdate] = useState();
    const [tab, setTab] = useState(1);
    const [address, setAddress] = useState({
        line_1: "",
        line_2: "",
        line_3: "",
        post_town: "",
        postcode: ""
    });
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        postcode: "",
        paymentDetails: {
            cardHolder: "",
            cardNumber: "",
            expiryDate: "",
            cvv: ""
        },
        expireDate: {
            expireMM: "",
            expireYY: ""
        }
    });
    const element = document.getElementById("preloader");
    const years = Array.from(new Array(10), (val, index) => (index + 25));

    useEffect(() => {
        if (!checkCookie('dailyBasket')) navigate('/')
    }, [])

    useEffect(() => {
        if (userInfo) {
            const { firstName, lastName, email, phone, address, postcode, paymentDetails } = userInfo;
            setState({
                ...state, firstName, lastName, email, phone, address, postcode, paymentDetails, expireDate: {
                    expireMM: paymentDetails?.expiryDate?.split('/')[0],
                    expireYY: paymentDetails?.expiryDate?.split('/')[1]
                }
            })
        }
    }, [userInfo])

    useEffect(() => {
        if (address.line_1 && address.postcode) {
            setState({
                ...state,
                address: address.line_1,
                postcode: address.postcode
            })
        }
    }, [address])

    const onHandleChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
            ...prevState,
            ...(name === "cardHolder" ||
                name === "cardNumber" ||
                name === "expiryDate" ||
                name === "cvv"
                ? {
                    paymentDetails: {
                        ...prevState.paymentDetails,
                        [name]: value
                    }
                }
                : name === "expireMM" ||
                    name === "expireYY"
                    ? {
                        expireDate: {
                            ...prevState.expireDate,
                            [name]: value
                        }
                    }
                    : { [name]: value }),
        }));
    }

    const updateDetails = (e) => {
        e.preventDefault();
        let { firstName, lastName, phone, address, postcode, paymentDetails, expireDate } = state;
        paymentDetails = {
            ...paymentDetails,
            expiryDate: expireDate.expireMM + "/" + expireDate.expireYY
        }
        element.style.display = 'block';
        if (validator.current.allValid()) {
            updateUserDetails({ updateFields: { firstName, lastName, phone, address, postcode, paymentDetails } }, (res) => {
                element.style.display = 'none'
                if (res.status === 200 || res.status === 201) {
                    dispatch(updateUserInfo(res.data.userDetails))
                    toast.success(res.data.message, { position: "top-right" });
                } else {
                    toast.error(res.data.message, { position: "top-right" });
                }
            })
        } else {
            element.style.display = 'none';
            validator.current.showMessages(true);
            forceUpdate(1);
        }
    }

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
        addProductToWishlist({ productId: pid, action: userInfo?.wishList?.includes(pid) ? false : true }, (res) => {
            if (res.status === 200 || res.status === 201) {
                toast.success(res.data.message, { position: "top-right" });
                userDetails();
            } else {
                element.style.display = 'none';
                toast.error(res.data.message, { position: "top-right" });
            }
        })
    }

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
                    {tab === 1 && <div className="col-md-8 col-lg-9 col-xl-10 col-xxl-10">
                        <section>
                            <h5 className='p-3 border-dashed tab-description-heading'>Peronal Information</h5>
                            <div className='card border-0 shadow-sm p-3 my-2'>
                                <form id="form" className="form-group flex-wrap row">
                                    <div className="col-lg-4 pb-3">
                                        <label>First Name</label>
                                        <input type="text" name="firstName" className="form-control" value={state.firstName} onChange={onHandleChange} />
                                    </div>
                                    <div className="col-lg-4 pb-3">
                                        <label>Last Name</label>
                                        <input type="text" name="lastName" className="form-control" value={state.lastName} onChange={onHandleChange} />
                                    </div>
                                    <div className="col-lg-4 pb-3">
                                        <label>Email Address</label>
                                        <input type="email" name="email" className="form-control" value={state.email} readOnly />
                                    </div>
                                    <div className="col-lg-4 pb-3">
                                        <label>Phone Number</label>
                                        <input type="text" name="phone" className="form-control" value={state.phone} onChange={onHandleChange} />
                                        <span className="error-message">{validator.current.message('Phone Number', state.phone, 'phone')}</span>
                                    </div>
                                </form>
                            </div>
                        </section>
                        <section>
                            <h5 className='p-3 border-dashed tab-description-heading'>Contact Information</h5>
                            <div className='card border-0 shadow-sm p-3 my-2'>
                                <form id="form" className="form-group flex-wrap row">
                                    <div className="col-lg-4 pb-3 find-address-section">
                                        <label>Find My Address</label>
                                        <PostcodeLookupComponent onAddressSelected={(address) => setAddress(address)} />
                                    </div>
                                    <div className="col-lg-4 pb-3">
                                        <label>Address</label>
                                        <input type="text" name="address" className="form-control" value={state.address} readOnly />
                                    </div>
                                    <div className="col-lg-4 pb-3">
                                        <label>Postcode</label>
                                        <input id="postcode" type="text" name="postcode" className="form-control" value={state.postcode} readOnly />
                                    </div>
                                </form>
                            </div>
                        </section>
                        <section>
                            <h5 className='p-3 border-dashed tab-description-heading'>Payment Information</h5>
                            <div className='card border-0 shadow-sm p-3 my-2'>
                                <form id="form" className="form-group flex-wrap row">
                                    <div className="col-lg-4 pb-3">
                                        <label>Card Holder Name</label>
                                        <input type="text" name="cardHolder" className="form-control" value={state.paymentDetails.cardHolder} onChange={onHandleChange} />
                                        <span className="error-message">{validator.current.message('Card Holder Name', state.paymentDetails.cardHolder, 'alpha_space')}</span>
                                    </div>
                                    <div className="col-lg-4 pb-3">
                                        <label>Card Number</label>
                                        <input type="text" name="cardNumber" className="form-control" value={state.paymentDetails.cardNumber} onChange={onHandleChange} />
                                        <span className="error-message">{validator.current.message('Card Number', state.paymentDetails.cardNumber, 'card_num')}</span>
                                    </div>
                                    <div className="col-lg-4 pb-3 row">
                                        <label>Expire Date</label>
                                        <div className='d-flex gap-2'>
                                            <select name='expireMM' className='form-select' value={state.expireDate.expireMM} onChange={onHandleChange}>
                                                <option value=''>Month</option>
                                                <option value='01'>January</option>
                                                <option value='02'>February</option>
                                                <option value='03'>March</option>
                                                <option value='04'>April</option>
                                                <option value='05'>May</option>
                                                <option value='06'>June</option>
                                                <option value='07'>July</option>
                                                <option value='08'>August</option>
                                                <option value='09'>September</option>
                                                <option value='10'>October</option>
                                                <option value='11'>November</option>
                                                <option value='12'>December</option>
                                            </select>
                                            <select name='expireYY' className='form-select' value={state.expireDate.expireYY} onChange={onHandleChange}>
                                                <option value=''>Year</option>
                                                {years.map((y) => {
                                                    return <option value={y}>20{y}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 pb-3">
                                        <label>CVV</label>
                                        <input type="text" name="cvv" className="form-control" value={state.paymentDetails.cvv} onChange={onHandleChange} />
                                        <span className="error-message">{validator.current.message('CVV', state.paymentDetails.cvv, 'min:3|max:4')}</span>
                                    </div>
                                </form>
                                <div className='text-center'>
                                    <button type='button' className="btn btn-primary text-uppercase" onClick={updateDetails}>Save</button>
                                </div>
                            </div>
                        </section>
                    </div>}
                    {tab === 2 && <div className="col-md-8 col-lg-9 col-xl-10 col-xxl-10">
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
                    </div>}
                    {tab === 3 && <div className="col-md-8 col-lg-9 col-xl-10 col-xxl-10">
                        <h5 className='p-3 border-dashed tab-description-heading'>Favorites List</h5>
                        <div className='card border-0 shadow-sm p-3'>
                            <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4">
                                {(userInfo.wishList.length ? product.filter(_ => userInfo.wishList.includes(_.id)) : []).map((item) => <div key={item.name} className="wishlist-card col">
                                    <button type="button" className="btn-close" onClick={() => onHandleWishlist(item.id)} ></button>
                                    <ProductCard item={item} isWishlist={true} />
                                </div>)}
                                {(userInfo.wishList.length ? product.filter(_ => userInfo.wishList.includes(_.id)) : []).length === 0 && "Favorites list not added"}
                            </div>
                        </div>
                    </div>}
                    {tab === 4 && <div className="col-md-8 col-lg-9 col-xl-10 col-xxl-10">
                        <h5 className='p-3 border-dashed tab-description-heading'>Order History</h5>
                        <div className='card border-0 shadow-sm p-3 gap-2'>
                            <section className='col order-product-list'>
                                <ul className="list-group mb-3">
                                    {products.map((item) => <li className="list-group-item lg-d-flex justify-content-between lh-sm">
                                        <div className='d-flex w-100 gap-3'>
                                            <div style={{ width: '100px', textAlign: 'center' }}>
                                                <img src={item.image} alt="product name" className="img-fluid" style={{ height: "70px" }} />
                                            </div>
                                            <div className='w-100'>
                                                <div className='d-grid mb-2' style={{ lineHeight: '1.5' }}>
                                                    <b className="text-body-secondary mb-0">Order# 403-44320678-8545959</b>
                                                    <small className="text-body-secondary">Ordered 8 November</small>
                                                    <small className="text-body-secondary">Order Total $870.00</small>
                                                </div>
                                                <div className="product-info">
                                                    <h6 className="pb-1">{item.name}</h6>
                                                    <p className="m-0 pb-1">Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea
                                                        blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris,
                                                        cras egestas quam venenatis neque.</p>
                                                    <div className="meta-product pt-2">
                                                        <div className="meta-item d-flex align-items-baseline">
                                                            <h6 className="item-title no-margin pe-2">Category:</h6>
                                                            <Link to="">Watch</Link>, <Link to=""> Screen touch</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>)}
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
