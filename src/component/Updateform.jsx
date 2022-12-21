import React,{useState} from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
// import {Link} from 'react-router-dom';
const Updateform = () => {
    const routid=useParams().id;
    const [title,settitle]=useState('');
    const[load,setload]=useState('');
    const[reps,setreps]=useState('');
    const [description,setdescription]=useState('');
    const [error,seterror]=useState(null);
    const handlesubmit=async(e)=>{
        e.preventDefault();
        if(localStorage.length>0){
          const user=JSON.parse(localStorage.getItem('user'));
          const config={	
              headers: {
              'authorization': `Bearer ${user.token}`
          }}
       const workout={title,load,reps,description};
     const  res=await axios.patch('https://fair-lime-gecko-tutu.cyclic.app/api/workouts/'+routid,workout,config);
       console.log(res);   
       if(!res.status===200){
           console.log('Update error');
       }
       if(res.status===200){
           settitle('');
           setload('');
           setreps('');
           setdescription('');
               console.log('Update success');
               window.location.href = "/";
       }
   }
   else{
    seterror('You must be logged in');
    return;
   }
  }
  return (
    <form className="create" onSubmit={handlesubmit}>
    <h3>Update a Item detail</h3>
    <label>Item Name:</label>
     <input type="text"  onChange={(e)=>settitle(e.target.value)} value={title} placeholder="Type a name of item" required/>
     <label>Amount(kg or L):</label>
     <input type="text"  onChange={(e)=>setload(e.target.value)} value={load} placeholder="Type Only Number" required/>
     <label>Rupees:</label>
     <input type="text"  onChange={(e)=>setreps(e.target.value)} value={reps} placeholder="Type Only Number" required/>
     <label for="body">Item description:</label>
    <textarea id="body" onChange={(e)=>setdescription(e.target.value)} value={description} placeholder="Write description of item" required></textarea>
     <button>Update Due</button>
     {error && <div className="error">{error}</div>}
       </form>
  )
}

export default Updateform
