import { useState } from 'react'
import { Link } from "react-router-dom";
import { LoginImg } from "../../assets/images";
import Breadcrumb from "../../component/breadcrumbs";
import { useDispatch } from "react-redux";
import { signIn } from '../../redux/actions/profile';
import { jwtDecode } from 'jwt-decode'
import { createCookie } from "../../common/cookie";
import { setToken } from "../../service";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loading) return
        if (email && password) {
            setLoading(true)
            setError('Please wait...')
            dispatch(
                signIn({ email, password }, (res) => {
                    setLoading(false);
                    if (res.status === 200) {
                        const { token, status } = res.data;
                        if (status) {
                            createCookie(token);
                            // localStorage.setItem("jwtToken", token);
                            setToken(token)
                            const decoded = jwtDecode(token);
                            // history.push("/");
                        } else {
                        }
                    } else {
                        // setErrors({...res.data});
                        // if (res.data.message)
                    }
                })
            );
        } else {
            setError('Email and password is required')
        }

    }

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmail(e.target.value.trim());
                break;
            case 'password':
                setPassword(e.target.value.trim());
                break;
            default:
                break;
        }
        setError('')
    }

    return <>
        <Breadcrumb title="Sign In" isPath={true} />
        <section className="py-5 my-5">
            <div className="container-sm">
                <div className="row justify-content-center">
                    <div className="col-lg-6 d-flex align-items-end">
                        <img src={LoginImg} alt="Login" className="img-fluid" />
                    </div>
                    <div className="col-lg-6 p-5 bg-white border shadow-sm">
                        <h5 className="text-uppercase mb-3">Login</h5>
                        <label className="mb-3">Please enter your email address and password</label>
                        <form id="form" className="form-group flex-wrap">
                            <div className="col-12 pb-3">
                                <label className="d-none">Username or email address *</label>
                                <input type="text" name="email" value={email} onChange={handleChange}
                                    placeholder="Email" className="form-control" />
                            </div>
                            <div className="col-12 pb-3">
                                <label className="d-none">Password *</label>
                                <input type="text" name="password" value={password} onChange={handleChange}
                                    placeholder="Password" className="form-control" />
                            </div>
                            <div className="col-12">
                                <button type="submit" name="submit" onClick={handleSubmit}
                                    className="btn btn-primary text-uppercase w-100">Log in
                                </button>
                                <p><Link to="/forgot">Lost your password?</Link></p>
                            </div>
                            <p style={{ color: 'red' }}>{error}</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default SignIn;