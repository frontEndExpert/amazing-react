
import './style.css';
import HomePage from './pages/HomePage'
import AboutUs from './pages/aboutus';
import Earnings from './pages/earnings'
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import Footer from './components/footer';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <>
     <BrowserRouter basename="/" >
      
          <Switch>
            <Route path='/aboutus' component={AboutUs}  />
            <Route path='/earnings' component={Earnings}  />
            <Route path='/privacy' component={Privacy} />
            <Route path='/terms' component={Terms} />
            <Route path='/thankyou' exact component={HomePage} />
            <Route path='/' exact component={HomePage} />
            
          </Switch>
          <Footer />
    </BrowserRouter>
    
    </>
  );
}

export default App;
