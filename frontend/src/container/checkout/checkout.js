import { Link } from "react-router-dom";
import Breadcrumb from "../../component/breadcrumbs";
import BillingAddress from "./components/billingAddress";
import PaymentInfo from "./components/paymentInfo";

const Checkout = () => {
    return <>
        <Breadcrumb title="Checkout" isPath={true}/>
        <section className="shopify-cart checkout-wrap py-5">
            <div className="container-lg">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">3</span>
                        </h4>
                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">Product name</h6>
                                    <small className="text-body-secondary">Brief description</small>
                                </div>
                                <span className="text-body-secondary">$12</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">Second product</h6>
                                    <small className="text-body-secondary">Brief description</small>
                                </div>
                                <span className="text-body-secondary">$8</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">Third item</h6>
                                    <small className="text-body-secondary">Brief description</small>
                                </div>
                                <span className="text-body-secondary">$5</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                                <div className="text-success">
                                    <h6 className="my-0">Promo code</h6>
                                    <small>EXAMPLECODE</small>
                                </div>
                                <span className="text-success">−$5</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>$20</strong>
                            </li>
                        </ul>
                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Promo code" />
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <form className="needs-validation" novalidate="">
                            <h4 className="mb-3">Billing address</h4>
                            <BillingAddress />

                            <h4 className="mb-3">Payment</h4>
                            <PaymentInfo />

                            <Link to="/order-detail" className="w-100 btn btn-primary btn-lg">Place Order</Link>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Checkout;