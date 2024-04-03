import BreakingNews from "./BreakingNews";
import Header from "./Shared/Header";
import Heading from "./Shared/Heading";
import LeftSideNav from "./Shared/LeftSideNav";
import RightSideNav from "./Shared/RightSideNav";

const Home = () => {
    return (
        <div>
            <Heading></Heading>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6  justify-center  text-center">
                <div className="border-2 border-gray-700">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-1 lg:col-span-2 border-2 border-gray-700">
                    <h2 className="text-4xl">News Coming Soon</h2>
                </div>
                <div className="border-2 border-gray-700">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;