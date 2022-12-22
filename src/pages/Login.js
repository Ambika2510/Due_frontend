import React, { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Login = () => {
        const [error, setError] = useState(null)
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
            // const [isLoading, setIsLoading] = useState(false)
        const handleSubmit = (e) => {
            e.preventDefault()
            setError(null)
            const signup = { email, password };

            axios.post('https://fair-lime-gecko-tutu.cyclic.app/api/user/login', signup)
                .then(res => {
                    localStorage.setItem("user", JSON.stringify(res.data))
                    setEmail('')
                    setPassword('')
                    window.location.reload();
                })
                .catch(err => { setError(err.response.data.error) })


        }

        return ( 
            <form className = "login"  onSubmit = { handleSubmit }>
            <h3> Log in </h3>

            <label> Email address: </label> 
            <input type = "email" onChange = {
                (e) => setEmail(e.target.value)
            }
            value = { email }/>  
            <label> Password: </label> 
            <input type = "password"
            onChange = {
                (e) => setPassword(e.target.value)
            }
            value = { password }/>

            <button > Log in </button>
            <div><p>or</p></div>
            <Link to="/forgetpassword" id="link">Forget password</Link>
              {error && <div className = "error" > { error } </div>}   
                    </form>

            )


        }

        export default Login