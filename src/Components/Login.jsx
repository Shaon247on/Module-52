import { Link } from "react-router-dom";
import Header from "./Pages/Shared/Header";
import Heading from "./Pages/Shared/Heading";

const Login = () => {

    const handleLogin = e =>{
        e.preventDefault()
        // const email = e.target.email.value
        // const password = e.target.password.value
        // console.log(email, password)
        const form = new FormData(e.currentTarget)
        console.log(e.currentTarget)
        console.log(form.get('email'))
        console.log(form.get('password'))

    }


    return (
        <div>
            <Heading></Heading>
            <Header></Header>
            <div>
                <h2 className="text-4xl text-center mt-6">Please Login</h2>
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
                        type="password" 
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
                <p className="text-center">Do not have an account. <Link to='/register' className="text-blue-500 underline">Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;