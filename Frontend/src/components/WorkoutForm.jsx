import React, { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const WorkoutForm = () => {

    const {dispatch} = useWorkoutsContext()

    
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    const toast = useToast() 
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {title, load, reps}

        const response = await fetch('https://gym-pal.onrender.com/api/workouts', {
            method: "POST",
            body: JSON.stringify(workout),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json ()

        if (!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
            toast({
                title: 'Error',
                description: "Fill all fields",
                status: 'error',
                duration: 3000,
                isClosable: true,
              });
        }

        if(response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log("New workout added", json)
            dispatch({type:'CREATE_WORKOUT', payload: json })
            toast({
                title: 'Success',
                description: "Workout created successfully",
                status: 'success',
                duration: 3000,
                isClosable: true,
              });

              setTimeout(() => {
                navigate("/") 
            })  
        }
    }
  return (
  <div className="form-container">
    <form className='create' onSubmit={handleSubmit}>
        <h1>Add a new Workout</h1>

        <label> Exercise Title: </label>
        <input type="text" 
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
        />

        <label>Load (in kg):  </label>
        <input type="number" 
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes("load") ? "error" : ""}
        />

        <label>Reps:</label>
        <input type="number" 
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFields.includes("reps") ? "error" : ""}
        />

        <button>Add Workout</button>
        {error && <div className='error'>{error}</div>}
    </form>
    </div>
  )
}

export default WorkoutForm