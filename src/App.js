import './App.css';
import{BrowserRouter,Routes, Route,Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Workoutpagedetail from './component/Workoutpagedetail';
import Updateform from './component/Updateform';
import Signup from './pages/Signup';
import Login from './pages/Login';
function App() {
    let user=null;
    if(localStorage.length>0){
        user=localStorage.getItem('user');
    }
    return ( 
    <BrowserRouter>
    <Navbar/>
    <div className='pages'>
    <Routes>
 <Route path="/" element={user ? <Home/> : <Navigate to= "/Login" />} />
 <Route path="/Workoutpagedetail/:id" element={<Workoutpagedetail/>}/>
 <Route path="/update/:id" element={<Updateform/>}/>
 <Route   path="/login"  element={!user? <Login /> : <Navigate to="/" />} />
 <Route  path="/signup"  element={!user ? <Signup /> : <Navigate to="/" />} />
 

 </Routes>
    </div>
    </BrowserRouter>
    );
}

export default App;