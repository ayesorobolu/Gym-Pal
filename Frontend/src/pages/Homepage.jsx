import React from 'react'
import { useEffect} from 'react'
import { Text, SimpleGrid,VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import WorkoutDetails from "../components/WorkoutDetails"
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const Homepage = () => {
const {workouts, dispatch} = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok) {
       dispatch({type:  'SET_WORKOUTS', payload:json})
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
<VStack spacing={8}>
  <div className='home'>
    <div className='workouts'>
      {workouts && workouts.length === 0 && (
        <p style={{ textAlign: "center", fontSize: "18px", color: "#888" }}>
          No workouts found. Add a new workout! ❌ 
          <Link to={"/create"}>
            <Text as="span" color={"#319795"} _hover={{ textDecoration: "underline" }}>
              Create Workouts
            </Text>
          </Link>
        </p>
      )}

      {workouts && workouts.length > 0 && (
        <>
          <h1><b>MY WORKOUTS</b></h1>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {workouts.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))}
          </SimpleGrid>
        </>
      )}
    </div>
  </div>
  </VStack>
  )
}

export default Homepage