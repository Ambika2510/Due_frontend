import './App.css';
import{BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Workoutpagedetail from './component/Workoutpagedetail';
import Updateform from './component/Updateform';

function App() {
    return ( 
    <BrowserRouter>
    <Navbar/>
    <div className='pages'>
    <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/Workoutpagedetail/:id" element={<Workoutpagedetail/>}/>
 <Route path="/update/:id" element={<Updateform/>}/>
 </Routes>
    </div>

    
  
    </BrowserRouter>
    );
}

export default App;