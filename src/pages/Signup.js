import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const [error, setError] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        const signup = {email, password};
       
     axios.post('https://fair-lime-gecko-tutu.cyclic.app/api/user/signup', signup)
               .then(res => { localStorage.setItem("user", JSON.stringify(res.data))
               setEmail('')
                setPassword('')
                       window.location.reload()})
               .catch(err => {setError(err.response.data.error)})
    
      
    }
    return ( 
        <form className = "signup" onSubmit = {handleSubmit}>
        <h3> Sign up </h3>

        <label> Email address: </label> <
        input type = "email"
        onChange = {
            (e) => setEmail(e.target.value)
        }
        value = { email }
         />
        <label> Password: </label> <
        input type = "password"
        onChange = {
            (e) => setPassword(e.target.value)
        }
        value = { password }
       />

        <button > Sign up </button> 
        {error && <div className = "error" >{error} </div>} 
        </form>

    )
}

export default Signup