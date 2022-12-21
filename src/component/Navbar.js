import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const handleclick = () => {
        localStorage.removeItem('user')
        window.location.href = '/login'
    }
    if(localStorage.length>0){
        const user = JSON.parse(localStorage.getItem("user"))
        return(
            <header>
            <div className='container'>
                <Link to='/'>
                    <h1>Total Due</h1>
                </Link>
            <nav>
                 <span>{user.email}</span>
            <button onClick={handleclick}>Logout</button>
        </nav>
            </div>
        </header>
        )
    }
    else{
        return ( 
            <header>
                <div className='container'>
                    <Link to='/'>
                        <h1>Total Due</h1>
                    </Link>
                    <nav>
                       
              <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </div>
            </nav>
                </div>
            </header>
           
        )
    }
    
}

export default Navbar