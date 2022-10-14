import './App.css';
import Navigation from './components/header/header'
import Footer from './components/footer/footer'
import AnimatedRoutes from './AnimatedRoutes'
import {HashRouter} from 'react-router-dom'



function App() {
  return (
        <HashRouter>
            <div className='container-fluid'>
              <Navigation/>
              <AnimatedRoutes/>
              <Footer/>
            </div>
        </HashRouter>
 
  );
}

export default App;
