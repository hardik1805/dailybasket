import { LoginImg } from "../../assets/images";
import Breadcrumb from "../../component/breadcrumbs";

const ForgotPassword = () => {
    return <>
        <Breadcrumb title="Forgot Password" isPath={true}/>
        <section className="py-5 my-5">
            <div className="container-sm">
                <div className="row justify-content-center">
                    <div className="col-lg-6 d-flex align-items-end">
                        <img src={LoginImg} alt="Forgot Password" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 p-5 bg-white border shadow-sm">
                        <h5 className="text-uppercase mb-4">Forgot Password</h5>
                        <form id="form" className="form-group flex-wrap">
                            <div className="col-12 pb-3">
                                <label className="d-none">Email address *</label>
                                <input type="email" name="email" placeholder="Email" className="form-control" />
                            </div>
                            <div className="col-12 pb-3">
                                <label className="d-none">New Password *</label>
                                <input type="password" name="newPassword" placeholder="New Password" className="form-control" />
                            </div>
                            <div className="col-12 pb-3">
                                <label className="d-none">Confirm New Password *</label>
                                <input type="password" name="confirmNewPassword" placeholder="Confirm New Password" className="form-control" />
                            </div>
                            <div className="col-12">
                                <button type="button" name="submit" className="btn btn-primary text-uppercase w-100">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default ForgotPassword;