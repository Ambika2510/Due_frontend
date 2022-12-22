import React,{useState}from 'react'
import axios from 'axios'
const Forgetpassword = () => {
    const [error, setError] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        const signup = { email, password };

        axios.patch('https://fair-lime-gecko-tutu.cyclic.app/api/user/updatepassword', signup)
            .then(res => {
                setEmail('')
                setPassword('')
                window.location.href="/login";
            })
            .catch(err => { setError(err.response.data.error) })


    }
    return ( 
        <form className = "login"  onSubmit = { handleSubmit }>
        <h3> Change password</h3>

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

        <button >Change password </button>
        {error && <div className = "error" > { error } </div>}
        </form>
    )
}

export default Forgetpassword