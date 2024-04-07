import { Link,useLocation,useNavigate } from "react-router-dom";
import Header from "./Pages/Shared/Header";
import Heading from "./Pages/Shared/Heading";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Login = () => {
    const { logIn } = useContext(AuthContext)
    const [hidden, setHidden] = useState(true)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    console.log('from login:', location)
    const handleLogin = e => {
        e.preventDefault()
        // const email = e.target.email.value
        // const password = e.target.password.value
        // console.log(email, password)
        const form = new FormData(e.currentTarget)
        console.log(e.currentTarget)
        console.log(form.get('email'))
        const email = form.get('email')
        console.log(form.get('password'))
        const password = form.get('password')
        setError('')
        setSuccess('')
        logIn(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess("Successfully logged in")
                navigate(location?.state ? location.state: "/")
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })

    }


    return (
        <div>
            <Heading></Heading>
            <Header></Header>
            <div>
                <h2 className="text-4xl text-center mt-6">Please Login</h2>
                <div className="relative">
                    <form onSubmit={handleLogin} className="card-body lg:w-1/2 mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email address"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type={hidden ? 'text' : "password"}
                                placeholder="Enter your password"
                                className="input input-bordered"
                                required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#403F3F] text-white">Login</button>
                        </div>
                    </form>
                    <button onClick={() => setHidden(!hidden)} className="btn absolute bottom-[145px] lg:bottom-[145px] right-10 lg:right-[320px] rounded-full">{hidden ? <IoEyeOff></IoEyeOff> : <IoEye></IoEye>}</button>
                    <div className="text-center mb-5">
                        {success && <p className="text-green-500">{success}</p>}
                        {!success && <p className="text-red-500">{error}</p>}
                    </div>
                </div>
                <p className="text-center">Do not have an account. <Link to='/register' className="text-blue-500 underline">Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;