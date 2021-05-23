import { useMediaQuery } from 'react-responsive';


const Reasons = () => {

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    
return (
<>
{ !isMobile && <div className="reasons">
    <ul className="area1">
        <li>NO PUSH TO FRIENDS/FAMILY</li>
        <li>NO STOCKING PRODUCT</li>
        <li>NO CRYPTO</li>
    </ul>     
    <ul className="area2"> 
        <li>WORK PORTABLY</li>
        <li>PERSONAL DEVELOPMENT</li>
        <li>FOR BIG THINKERS</li>
    </ul>     
    <ul className="area3">
        <li>FLEXIBLE HOURS</li>
        <li>SIMPLE SYSTEM</li>
        <li>FULL TRAINING</li>         
    </ul>
</div>}
{ isMobile && 
<div className="reasons">
    <ul className="area1">
        <li>NO PUSH TO FRIENDS OR FAMILY</li>
        <li>NO STOCKING PRODUCT</li>
        <li>NO CRYPTO</li>
        <li>WORK PORTABLY</li>
        <li>PERSONAL DEVELOPMENT</li>
        <li>FOR BIG THINKERS</li>
        <li>FLEXIBLE HOURS</li>
        <li>SIMPLE SYSTEM</li>
        <li>FULL TRAINING</li>         
    </ul>
</div>}
</>
);
}

export default Reasons;