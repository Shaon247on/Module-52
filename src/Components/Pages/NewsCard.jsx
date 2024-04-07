import moment from 'moment';
import { CiBookmark, CiShare2 } from "react-icons/ci";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ aNew }) => {
    console.log(aNew)
    const { title, details, image_url, rating, total_view, author,_id } = aNew
    const { img, name, published_date } = author
    const { number } = rating

    return (
        <div className='p-8 border-rose-200 border-2'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={img} alt="" className="w-10 h-10 rounded-full" />
                    <div className='text-start text-[#403F3F]'>
                        <h4 className='font-semibold'>{name}</h4>
                        <p className='text-[#706F6F]'>{moment(published_date).format("D-M-YYYY")}</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <CiBookmark className='text-[24px]'></CiBookmark>
                    <CiShare2 className='text-[24px]'></CiShare2>
                </div>
            </div>
            <div>
                <h1 className='font-extrabold text-[20px] text-[#403F3F] text-start mt-6 mb-3'>{title}</h1>
            </div>
            <div className="card glass">
                <figure><img src={image_url} alt="car!" /></figure>
                <div className="mt-5 text-start">
                    {
                        details.length > 200 ?
                            <>
                                <h2 className="text-[#706F6F] text-start">{details.slice(0, 300)}.....</h2>
                                <Link className='text-[#FF8C47]' to={`/news/${_id}`}>Read More</Link>
                            </> :
                            <h2 className="text-[#706F6F] text-start">{details}</h2>
                    }                   
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    aNew: PropTypes.array
}

export default NewsCard;