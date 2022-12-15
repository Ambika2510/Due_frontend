import React from 'react'
import { Link } from 'react-router-dom';
const Workoutdetail = ({workout}) => {
  const l='/Workoutpagedetail/'+workout._id;

  return (
    <div className='workout-details'>
    <h4>{workout.title}</h4>
    <p><strong>Rupees:</strong>{workout.reps}</p>
      <Link to={l} id="link"><span>Detail</span></Link>
    </div>
  )
}

export default Workoutdetail
