import React,{useState}from 'react'
import axios from 'axios'

const Workoutform = () => {
    const [title,settitle]=useState('');
    const[load,setload]=useState('');
    const[reps,setreps]=useState('');
    const [description,setdescription]=useState('');
    const handlesubmit=async(e)=>{
         e.preventDefault();
        const workout={title,load,reps,description};
      const  res=await axios.post('http://localhost:3003/api/workouts',workout);
        console.log(res);   
        if(!res.status===200){
            console.log('Post error');
        }
        if(res.status===200){
            settitle('');
            setload('');
            setreps('');
            setdescription('');
                console.log('Post success');
        }
    }
  return (
      <form className="create" onSubmit={handlesubmit}>
   <h3>Add a Item detail</h3>
   <label>Item Name:</label>
    <input type="text"  onChange={(e)=>settitle(e.target.value)} value={title} placeholder="Type a name of item" required/>
    <label>Amount(kg or L):</label>
    <input type="text"  onChange={(e)=>setload(e.target.value)} value={load} placeholder="Type Only Number" required/>
    <label>Rupees:</label>
    <input type="text"  onChange={(e)=>setreps(e.target.value)} value={reps} placeholder="Type Only Number" required/>
    <label for="body">Item description:</label>
    <textarea id="body" onChange={(e)=>setdescription(e.target.value)} value={description} placeholder="Write description of item" required></textarea>
    <button>Add Due</button>
      </form>
 
  )
}

export default Workoutform
