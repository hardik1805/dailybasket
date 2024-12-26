import { LoginImg } from "../../assets/images";
import Breadcrumb from "../../component/breadcrumbs";

const SignIn = () => {
    return <>
        <Breadcrumb title="Create an Account" isPath={true}/>
        <section className="py-5 my-5">
            <div className="container-sm">
                <div className="row justify-content-center">
                    <div className="col-lg-6 d-flex align-items-end">
                        <img src={LoginImg} alt="Account" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 p-5 bg-white border shadow-sm">
                        <h5 className="text-uppercase mb-4">Create an Account</h5>
                        <form id="form" className="form-group flex-wrap">
                            <div className="col-12 pb-3">
                                <label className="d-none">Full Name</label>
                                <input type="text" name="name" placeholder="Full Name" className="form-control" />
                            </div>
                            <div className="col-12 pb-3">
                                <label className="d-none">Email Address *</label>
                                <input type="email" name="email" placeholder="Email Address" className="form-control" />
                            </div>
                            <div className="col-12 pb-3">
                                <label className="d-none">Password *</label>
                                <input type="password" name="password" placeholder="Password" className="form-control" />
                            </div>
                            <div className="col-12 pb-3">
                                <label className="d-none">Confirm Password *</label>
                                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="form-control" />
                            </div>
                            <div className="col-12">
                                <button type="submit" name="submit" className="btn btn-primary text-uppercase w-100">Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default SignIn;