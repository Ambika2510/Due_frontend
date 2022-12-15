import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Workoutdetail from '../component/Workoutdetail'
import Workoutform from '../component/Workoutform'
const Home = () => {
        const [workouts, setWorkouts] = useState([])
        useEffect(() => {
            axios
                .get("https://fair-lime-gecko-tutu.cyclic.app/api/workouts")
                .then((response) => {
                    // console.log(response.data);
                    setWorkouts(response.data)
                });
        });
        if (workouts.length===0){
         return(
         <div className = 'home'>
            <h1> No Due!...</h1>
            <Workoutform />
            </div>)
         
        }
        else{
    return ( 
            <div className = 'home'>
                <div className = "workouts" > {
                    workouts.map((workout) => ( < Workoutdetail key = { workout._id }
                            workout = { workout }
                            />))}       
                            </div>  
                            <Workoutform />
                            </div>
                        )
                    }
                    }
                    export default Home