import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    console.log(categories)
    useEffect(() => {
        fetch('Categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl font-bold mb-3 text-start">All Categories</h2>
            <div className="flex flex-col gap-2 text-start ml-10 text-[20px] font-semibold">
                {
                    categories.map(category => <Link 
                        key={category.id}
                        to={`/category/${category.id}`}
                        >{category.name}</Link>)
                }
            </div>

        </div>
    );
};

export default LeftSideNav;