import moment from 'moment';
import logo from '../../../assets/images/logo.png'
const Heading = () => {
    return (
        <div className='text-center mt-16'>
            <img src={logo} alt=""  className='mx-auto'/>
            <h4>Journalism Without Fear or Favour</h4>
            <p className="text-lg">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Heading;