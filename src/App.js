import './App.css';
import Navigation from './components/header/header'
import Footer from './components/footer/footer'
import AnimatedRoutes from './AnimatedRoutes'
import {BrowserRouter} from 'react-router-dom'



function App() {
  return (
        <BrowserRouter>
          <div className="container-fluid">
            <Navigation/>
            <AnimatedRoutes/>
            <Footer/>
          </div>
        </BrowserRouter>
 
  );
}

export default App;
