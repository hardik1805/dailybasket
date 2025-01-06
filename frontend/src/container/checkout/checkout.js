import { Link } from "react-router-dom";
import Breadcrumb from "../../component/breadcrumbs";
import BillingAddress from "./components/billingAddress";
import PaymentInfo from "./components/paymentInfo";
import MiniCart from "../../component/miniCart";

const Checkout = () => {
    return <>
        <Breadcrumb title="Checkout" />
        <section className="shopify-cart checkout-wrap py-5">
            <div className="container-lg">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <MiniCart isTotal={true}/>
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