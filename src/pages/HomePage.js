import Header from '../components/header';
import Reasons from '../components/reasons';
import Content from '../components/content';
import {useParams} from 'react-router-dom';



const HomePage = () => {

    return (
        <>
        <div className="site">
            <Header />
            <Reasons />
            <Content />
        </div>
        </>     
    )
}

export default HomePage;