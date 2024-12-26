import { Link } from "react-router-dom";
import { LoginImg } from "../../assets/images";
import Breadcrumb from "../../component/breadcrumbs";

const SignIn = () => {
    return <>
        <Breadcrumb title="Sign In" isPath={true}/>
        <section className="py-5 my-5">
            <div className="container-sm">
                <div className="row justify-content-center">
                    <div className="col-lg-6 d-flex align-items-end">
                        <img src={LoginImg} alt="Login" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 p-5 bg-white border shadow-sm">
                        <h5 className="text-uppercase mb-4">Login</h5>
                        <form id="form" className="form-group flex-wrap">
                            <div className="col-12 pb-3">
                                <label className="d-none">Username or email address *</label>
                                <input type="text" name="name" placeholder="Email" className="form-control" />
                            </div>
                            <div className="col-12 pb-3">
                                <label className="d-none">Password *</label>
                                <input type="text" name="email" placeholder="Password" className="form-control" />
                            </div>
                            {/* <div className="col-12 pb-3">
                                <label>
                                    <input className="m-1" type="checkbox" required="" />
                                    <span className="label-body">Remember me</span>
                                </label>
                            </div> */}
                            <div className="col-12">
                                <button type="submit" name="submit" className="btn btn-primary text-uppercase w-100">Log in</button>
                                <p><Link to="/forgot">Lost your password?</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default SignIn;