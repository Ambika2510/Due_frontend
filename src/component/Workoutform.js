import React,{useState}from 'react'
import axios from 'axios'

const Workoutform = () => {
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
      const  res=await axios.post('https://fair-lime-gecko-tutu.cyclic.app/api/workouts',workout,config);
        console.log(res.data);   
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
        return;
      }
      else{
          seterror('You must be logged in');
          return;
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
    {error && <div className="error">{error}</div>}
      </form>
 
  )
}

export default Workoutform
