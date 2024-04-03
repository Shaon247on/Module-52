import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn bg-[#D72050]">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
            <Link to='' className="mr-6">Global leaders meet to address climate crisis in emergency summit....     ||</Link>   
            <Link to='' className="mr-6">Stock markets plunge amid economic uncertainty, inflation concerns rise....  ||</Link>   
            <Link to='' className="mr-6">Scientists discover potential breakthrough in renewable energy technology....  ||</Link>   
            </Marquee>
        </div>
    );
};

export default BreakingNews;