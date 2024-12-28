import { useRef, useState } from "react";
import { LoginImg } from "../../assets/images";
import Breadcrumb from "../../component/breadcrumbs";
import SimpleReactValidator from 'simple-react-validator';

const SignIn = () => {
    const validator = useRef(new SimpleReactValidator());
    const [, forceUpdate] = useState();
    const [state, setState] = useState({ fname: "", lname: "", email: "", password: "" });

    const onHandleChange = (event) => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const authanticate = () => {
        if (validator.current.allValid()) {
            console.log("state:-", state);
        } else {
            validator.current.showMessages(true);
            forceUpdate(1);
        }
    }

    return <>
        <Breadcrumb title="Create an Account" isPath={true} />
        <section className="py-5 my-5">
            <div className="container-sm">
                <div className="row justify-content-center">
                    <div className="col-lg-6 d-flex align-items-end">
                        <img src={LoginImg} alt="Account" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 p-5 bg-white border shadow-sm">
                        <h5 className="text-uppercase mb-3">Create an Account</h5>
                        <form id="form" className="form-group flex-wrap">
                            <div className="col-12 pb-3">
                                <input type="text" name="fname" placeholder="First Name" className="form-control" value={state.fname} onChange={onHandleChange} />
                                <span className="error-message">{validator.current.message('First Name', state.fname, 'required')}</span>
                            </div>
                            <div className="col-12 pb-3">
                                <input type="text" name="lname" placeholder="Last Name" className="form-control" value={state.lname} onChange={onHandleChange} />
                                <span className="error-message">{validator.current.message('Last Name', state.lname, 'required')}</span>
                            </div>
                            <div className="col-12 pb-3">
                                <input type="email" name="email" placeholder="Email" className="form-control" value={state.email} onChange={onHandleChange} />
                                <span className="error-message">{validator.current.message('Email address', state.email, 'required|email')}</span>
                            </div>
                            <div className="col-12 pb-3">
                                <input type="password" name="password" placeholder="Password" className="form-control" value={state.password} onChange={onHandleChange} />
                                <span className="error-message">{validator.current.message('Password', state.password, 'required|min:5|max:10')}</span>
                            </div>
                            <button type="button" className="btn btn-primary text-uppercase w-100" onClick={authanticate}>Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default SignIn;