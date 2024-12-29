import {Link} from "react-router-dom";
import {Logo} from "../../assets/images";
import {checkCookie} from "../cookie";

const Header = () => {
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
                    <h4 className="fw-normal text-uppercase fs-6">Menu</h4>
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
                        <div
                            className="col-4 col-sm-2 col-lg-2 text-center text-sm-start d-flex gap-3 justify-content-center justify-content-md-start">
                            <div className="d-flex align-items-center my-3 my-sm-0">
                                <Link to="/">
                                    <img src={Logo} alt="logo" className="img-fluid"/>
                                </Link>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasNavbar"
                                    aria-controls="offcanvasNavbar">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <use xlinkHref="#menu"></use>
                                </svg>
                            </button>
                        </div>
                        <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-4">
                            <div className="search-bar row bg-light p-2 rounded-4">
                                <div className="col-11 col-md-11">
                                    <form id="search-form" className="text-center" action="index.html" method="post">
                                        <input type="text" className="form-control border-0 bg-transparent"
                                               placeholder="Search for more than 20,000 products"/>
                                    </form>
                                </div>
                                <div className="col-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                              d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-8 col-sm-4 col-lg-6 d-flex gap-5 align-items-center justify-content-center justify-content-sm-end">
                            <ul className="d-flex justify-content-end list-unstyled m-0">
                                <li>
                                    <Link to={checkCookie('dailyBasket') ? "/profile" : "/login"} className="p-2 mx-1">
                                        <svg width="24" height="24">
                                            <use xlinkHref="#user"></use>
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="p-2 mx-1">
                                        <svg width="24" height="24">
                                            <use xlinkHref="#wishlist"></use>
                                        </svg>
                                    </Link>
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
