import { Link} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

return ( 

<footer className="footer" >
{ isMobile &&  <div className="fcenter">
        <ul name="menu-footer" className="menu-footer">
        <li>
                <Link className="H" to={'/'} >Home</Link>
            </li>
            <li>
                <Link className="A" to={'/aboutus'} >About</Link>
            </li>
            <li>
                <Link className="T" to={'/terms'} >Term</Link>
            </li>
            <li>
                <Link className="P" to={'/privacy'} >Privacy</Link>
            </li>
            <li>
                <Link className="E" to={'/earnings'} >Earnings</Link>
            </li>
        </ul>
        <p>Copyright © 2021 amazinglife.solutions<br/> 
All rights reserved.</p>
    </div>}
{ !isMobile &&  <div className="fcenter">
        <ul name="menu-footer" className="menu-footer">
        <li>
                <Link to={'/'} >Home</Link>
            </li>
            <li>
                <Link to={'/aboutus'} >About Us</Link>
            </li>
            <li>
                <Link to={'/terms'} >Terms and Conditions</Link>
            </li>
            <li>
                <Link to={'/privacy'} >Privacy Policy</Link>
            </li>
            <li>
                <Link to={'/earnings'} >Earnings Disclaimer</Link>
            </li>
        </ul>
        <p>Copyright © 2021  amazinglife.solutions 
All rights reserved and other such important stuff. </p>
    </div>
}

</footer>
);
}

export default Footer;