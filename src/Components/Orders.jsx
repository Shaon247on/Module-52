import Header from "./Pages/Shared/Header";
import Heading from "./Pages/Shared/Heading";

const Orders = () => {
    return (
        <div>
            <Heading></Heading>
            <Header></Header>
            <h1>Orders:</h1>
            <ul>
                <li>Item-1</li>
                <li>Item-2</li>
                <li>Item-3</li>
                <li>Item-4</li>
                <li>Item-5</li>
            </ul>
        </div>
    );
};

export default Orders;