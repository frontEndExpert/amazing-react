
import SolForm from './solForm';



const Header = () => (

<header className="header" >
    <div className="bgcontainer">
        <div className="bgvideo">
            <iframe title="background" className="vimeo" id="lp-pom-block-8-video-background-iframe" 
            src="//player.vimeo.com/video/159993044?background=1&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;badge=0&amp;byline=0&amp;title=0&amp;portrait=0" width="100%" height="100%" frameBorder="0" allowFullScreen=""></iframe>
        </div>
    </div>
    <div className="logo-title">
        <img src="../images/tree.jpg" width="160" height="160" className="logo"/>
        <h1 className="title">Amazing Life Solutions</h1>
    </div>
    <div className="headlines-title">
        <span>Our Booming Company<br/> is looking for More <br/>
        New Managers </span>
    </div>
    <div className="headlines"> 
        <ul> 
            <li>Commission up to $5000 per sale</li>             
            <li>Be your own boss</li>             
            <li>Copy what successful executive are doing to succeed</li>             
            <li>Marketing training provided</li>             
            <li>Personal development training provided</li>             
            <li>Make an executive income without the office hussle</li>             
            <li>work from home</li>             
        </ul>
        <br/>
    </div>     
    <div className="tvideo">
        <iframe title="Listen to Rachel" src="https://player.vimeo.com/video/230584283?wmode=opaque"  width="100%" height="100%" frameBorder="0"></iframe>
        <h3 className="caption">Listen to Rachel - The Company Co-Owner.</h3>
    </div>
    <SolForm />
</header>

);
//webkitAllowFullScreen="" mozallowFullScreen="" allowFullScreen=""
export default Header;