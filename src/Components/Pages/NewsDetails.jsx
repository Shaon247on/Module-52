import Header from "./Shared/Header";
import Heading from "./Shared/Heading";
import RightSideNav from "./Shared/RightSideNav";
import {useParams} from "react-router-dom" 

const NewsDetails = () => {
    const {id} = useParams()
    return (
        <div>
            <Heading></Heading>
            <Header></Header>
            <div className="grid grid-cols-4">
                <div className="col-span-3 text-2xl">
                    <h1>News Details no: {id }</h1>
                </div>
                <div className="  ">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;