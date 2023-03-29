import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cards from './components/Cards/Cards';
import Orders from './components/Orders/Orders';
import Maincomp from './components/Maincomp/Maincomp';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        
        <Maincomp></Maincomp>
      {/* <Sidebar/>
      
     
          
        
        
       
        <MainDash/>
    
        <RightSide/> */}
        
        
        
        
       
      </div>
    </div>
  );
}

export default App;
