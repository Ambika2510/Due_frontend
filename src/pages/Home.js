import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Workoutdetail from '../component/Workoutdetail'
import Workoutform from '../component/Workoutform'
const Home = () => {
        const [workouts, setWorkouts] = useState(null)
        useEffect(() => {
            axios
                .get("http://localhost:3003/api/workouts")
                .then((response) => {
                    // console.log(response.data);
                    setWorkouts(response.data)
                });
        }, );
        if (!workouts) return <h4> No data availaibe </h4>
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
                    export default Home