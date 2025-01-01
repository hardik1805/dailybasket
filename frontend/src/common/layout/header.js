import { Link, useNavigate } from "react-router-dom";
import { Login, Logo } from "../../assets/images";
import { checkCookie, deleteAllCookies } from "../cookie";

const Header = () => {
    const navigate = useNavigate()

    const signOut = () => {
        deleteAllCookies();
        navigate('/')
        window.location.reload(true)
    }

    return (
        <div className="header-container">
            <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasCart">
                <div className="offcanvas-header justify-content-center">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">3</span>
                        </h4>
                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">Growers cider</h6>
                                    <small className="text-body-secondary">Brief description</small>
                                </div>
                                <span className="text-body-secondary">$12</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">Fresh grapes</h6>
                                    <small className="text-body-secondary">Brief description</small>
                                </div>
                                <span className="text-body-secondary">$8</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">Heinz tomato ketchup</h6>
                                    <small className="text-body-secondary">Brief description</small>
                                </div>
                                <span className="text-body-secondary">$5</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>$20</strong>
                            </li>
                        </ul>

                        <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar">
                <div className="offcanvas-header justify-content-between">
                    <h4 className="fw-normal text-uppercase fs-6 mb-0">Category</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                        <li className="nav-item border-dashed active">
                            <Link to="/category" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use xlinkHref="#fruits" xlink></use>
                                </svg>
                                <span>Fruits and vegetables</span>
                            </Link>
                        </li>
                        <li className="nav-item border-dashed">
                            <Link to="/category" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use xlinkHref="#dairy"></use>
                                </svg>
                                <span>Dairy and Eggs</span>
                            </Link>
                        </li>
                        <li className="nav-item border-dashed">
                            <Link to="/category" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use xlinkHref="#meat"></use>
                                </svg>
                                <span>Meat and Poultry</span>
                            </Link>
                        </li>
                        <li className="nav-item border-dashed">
                            <Link to="/category" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use xlinkHref="#seafood"></use>
                                </svg>
                                <span>Seafood</span>
                            </Link>
                        </li>
                        <li className="nav-item border-dashed">
                            <Link to="/category" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use xlinkHref="#bakery"></use>
                                </svg>
                                <span>Bakery and Bread</span>
                            </Link>
                        </li>
                        <li className="nav-item border-dashed">
                            <Link to="/category" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use xlinkHref="#canned"></use>
                                </svg>
                                <span>Canned Goods</span>
                            </Link>
                        </li>
                        <li className="nav-item border-dashed">
                            <Link to="/category" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use xlinkHref="#frozen"></use>
                                </svg>
                                <span>Frozen Foods</span>
                            </Link>
                        </li>
                        <li className="nav-item border-dashed">
                            <Link to="/category" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use xlinkHref="#pasta"></use>
                                </svg>
                                <span>Pasta and Rice</span>
                            </Link>
                        </li>
                        <li className="nav-item border-dashed">
                            <Link to="/category" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use xlinkHref="#breakfast"></use>
                                </svg>
                                <span>Breakfast Foods</span>
                            </Link>
                        </li>
                        <li className="nav-item border-dashed">
                            <Link to="/category" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use xlinkHref="#snacks"></use>
                                </svg>
                                <span>Snacks and Chips</span>
                            </Link>
                        </li>
                        <li className="nav-item border-dashed">
                            <button
                                className="btn btn-toggle dropdown-toggle position-relative w-100 d-flex justify-content-between align-items-center text-dark p-2"
                                data-bs-toggle="collapse" data-bs-target="#beverages-collapse" aria-expanded="false">
                                <div className="d-flex gap-3">
                                    <svg width="24" height="24" viewBox="0 0 24 24">
                                        <use xlinkHref="#beverages"></use>
                                    </svg>
                                    <span>Beverages</span>
                                </div>
                            </button>
                            <div className="collapse" id="beverages-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal ps-5 pb-1">
                                    <li className="border-bottom py-2"><Link to="/category"
                                        className="dropdown-item">Water</Link></li>
                                    <li className="border-bottom py-2"><Link to="/category"
                                        className="dropdown-item">Juice</Link></li>
                                    <li className="border-bottom py-2"><Link to="/category"
                                        className="dropdown-item">Soda</Link></li>
                                    <li className="border-bottom py-2"><Link to="/category"
                                        className="dropdown-item">Tea</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item border-dashed">
                            <Link to="/category" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use xlinkHref="#spices"></use>
                                </svg>
                                <span>Spices and Seasonings</span>
                            </Link>
                        </li>
                        <li className="nav-item border-dashed">
                            <Link to="/category" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use xlinkHref="#baby"></use>
                                </svg>
                                <span>Baby Food and Formula</span>
                            </Link>
                        </li>
                        <li className="nav-item border-dashed">
                            <Link to="/category" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use xlinkHref="#health"></use>
                                </svg>
                                <span>Health and Wellness</span>
                            </Link>
                        </li>
                        <li className="nav-item border-dashed">
                            <Link to="/category" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use xlinkHref="#household"></use>
                                </svg>
                                <span>Household Supplies</span>
                            </Link>
                        </li>
                        <li className="nav-item border-dashed">
                            <Link to="/category" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use xlinkHref="#personal"></use>
                                </svg>
                                <span>Personal Care</span>
                            </Link>
                        </li>
                        <li className="nav-item border-dashed">
                            <Link to="/category" className="nav-link d-flex align-items-center gap-3 text-dark p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use xlinkHref="#pet"></use>
                                </svg>
                                <span>Pet Food and Supplies</span>
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>

            <header>
                <div className="container-fluid">
                    <div className="row py-3 border-bottom">
                        <div className="col-6 col-md-6 col-lg-6 text-center text-sm-start d-flex gap-3 justify-content-center justify-content-md-start">
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasNavbar"
                                aria-controls="offcanvasNavbar">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use xlinkHref="#menu"></use>
                                </svg>
                            </button>
                            <div className="my-3 my-sm-0">
                                <Link to="/" className="d-flex align-items-center nav-link">
                                    <img src={Logo} alt="logo" className="img-fluid" style={{ height: "50px" }} />
                                    <div className="logo-text-header"><span><b>D</b>aily</span><span><b>B</b>asket</span></div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-6 col-md-6 col-lg-6 d-flex gap-5 align-items-center justify-content-end">
                            <ul className="d-flex justify-content-end list-unstyled m-0">
                                <li>
                                    <Link to={checkCookie('dailyBasket') ? "" : "/login"} className="p-2 mx-1"
                                        id="pages" data-bs-toggle={checkCookie('dailyBasket') ? "dropdown" : ""} aria-expanded="false">
                                        {checkCookie('dailyBasket') ?
                                            <svg width="24" height="24">
                                                <use xlinkHref="#user"></use>
                                            </svg>
                                            : <img src={Login} height="24px" />}
                                    </Link>
                                    {checkCookie('dailyBasket') ?
                                        <ul className="logout-menu dropdown-menu border-0 p-3 rounded-0 shadow" aria-labelledby="pages">
                                            <li><Link to="/profile" class="dropdown-item">My Account</Link></li>
                                            <li onClick={signOut}><span className="dropdown-item">Sign Out</span></li>
                                        </ul> : null}
                                </li>
                                <li>
                                    <Link to="" className="p-2 mx-1" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                                        <svg width="24" height="24">
                                            <use xlinkHref="#shopping-bag"></use>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
