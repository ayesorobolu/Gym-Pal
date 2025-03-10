import React from 'react'
import { FaTrash } from "react-icons/fa"
import { DeleteIcon } from "@chakra-ui/icons"
import { Box, Heading, Text, IconButton } from "@chakra-ui/react"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { useWorkoutsContext, } from '../hooks/useWorkoutsContext'

const WorkoutDetails = ({ workout }) => {
  const {dispatch} = useWorkoutsContext( )
  
  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })

    if(response.ok) {
     dispatch({type: 'DELETE_WORKOUT', payload: workout._id })
    }
  }

  return (
    <div className='workout-details'>
<h4>{workout.title}</h4>
<p><strong>Load (kg): </strong>{workout.load}</p>
<br />
<p><strong>Reps: </strong>{workout.reps}</p>  
<br /> 
<p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix:true})}</p>
<span  onClick={handleClick}> <IconButton icon={<DeleteIcon />}  colorScheme="red"  /> </span>
    </div>
  )
}

export default WorkoutDetails