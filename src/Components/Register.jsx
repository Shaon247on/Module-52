import { useContext } from "react";
import Header from "./Pages/Shared/Header";
import Heading from "./Pages/Shared/Heading";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault()
        // const email = e.target.email.value
        // const password = e.target.password.value
        // console.log(email, password)createUser
        const form = new FormData(e.currentTarget)
        console.log(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, email, password)
        createUser(email, password)
        .then( result =>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error);
        })
        // updateName(name)
        // .then( result =>{
        //     console.log(result.user)
        // })
        // .catch(error=>{
        //     console.error(error)
        // })
    }

    return (
        <div>
            <Heading></Heading>
            <Header></Header>
            <div>
                <h2 className="text-4xl text-center mt-6">Please Register</h2>
                <form onSubmit={handleRegister} className="card-body lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter your Name"
                            className="input input-bordered"
                            required />
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
                <p className="text-center">Already have an account. <Link to='/login' className="text-blue-500 underline">Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;