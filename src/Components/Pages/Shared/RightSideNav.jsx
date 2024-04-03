import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Zone1 from "../../../assets/images/qZone1.png"
import Zone2 from "../../../assets/images/qZone2.png"
import Zone3 from "../../../assets/images/qZone3.png"
const RightSideNav = () => {
    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold mb-3 text-start">Login With</h2>
                <div className="flex flex-col gap-2">
                    <button className="btn w-[250px] border border-gray-950 mx-auto text-blue-400"> <FaGoogle className="text-lg text-blue-400"></FaGoogle>Login with Google</button>
                    <button className="btn w-[250px] border border-gray-950 mx-auto text-gray-700"> <FaGithub className="text-lg text-gray-700"></FaGithub>Login with Github</button>
                </div>
            </div>
            <div className="mt-11">
                <h1 className="text-2xl font-bold mb-3 text-start ">Find Us On</h1>
                <div className="flex flex-col gap-8">
                    <a href="" className="flex items-center gap-3 w-[120px]  ml-6 text-[#706F6F] font-medium"><FaFacebookF className="text-[#58A7DE]"></FaFacebookF> Facebook</a>
                    <a href="" className="flex items-center gap-3 w-[120px]  ml-6 text-[#706F6F] font-medium"><FaTwitter className="text-[#3B599C]"></FaTwitter> Facebook</a>
                    <a href="" className="flex items-center gap-3 w-[120px]  ml-6 text-[#706F6F] font-medium"><FaInstagram className="bg-gradient-to-t from-[#E23085] to-[#FBA756] rounded-md"></FaInstagram  > Facebook</a>
                </div>
            </div>
            <div className="mt-11">
                <h1 className="text-2xl font-bold mb-3 text-start">Q-Zone</h1>
                <div>
                    <img src={Zone1} alt="" />
                    <img src={Zone2} alt="" />
                    <img src={Zone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;