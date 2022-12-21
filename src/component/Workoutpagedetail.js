import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';


const Workoutpagedetail = () => {
    const routid = useParams().id;
    const p='/update/'+routid;
    const [workouts, setWorkouts] = useState([]);
    useEffect(() => {
        if(localStorage.length>0){
            const user=JSON.parse(localStorage.getItem('user'));
            const config={	
                headers: {
                'authorization': `Bearer ${user.token}`
            }}
        axios
            .get("https://fair-lime-gecko-tutu.cyclic.app/api/workouts/"+routid,config)
            .then((response) => {
                // console.log(response.data);
                setWorkouts(response.data)
            });
    }}, );
    const handleclick=async()=>{
        // console.log(workouts._id);
        if(localStorage.length>0){
            const user=JSON.parse(localStorage.getItem('user'));
            const config={	
                headers: {
                'authorization': `Bearer ${user.token}`
            }}
      const  res=await axios.delete('https://fair-lime-gecko-tutu.cyclic.app/api/workouts/'+routid,config);
        if(!res.status===200){
          console.log('delete error');
      }
      if(res.status===200){
            console.log('delete success');
            
    }
}
      }

    if (!workouts) return <h4> Succesfully deleted </h4>
    return ( 
        <div className = 'workout-details'>
            <h4>{workouts.title}</h4>
            <p><strong>Amount(kg or L):</strong>{workouts.load}</p>
      <p><strong>Rupees:</strong>{workouts.reps}</p>
      <p><strong>Description:</strong>{workouts.description}</p>
      <p>{workouts.updatedAt}</p>
            <Link to='/' id="link"><span onClick={handleclick}>Delete</span></Link>
            <Link to={p} id="update">Update</Link>
            
            </div>
                    )
                }


export default Workoutpagedetail
