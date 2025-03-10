import mongoose  from "mongoose";
import Workout from "../models/workout.model.js";

//GET all workouts route
export const getWorkout = async(req, res) => {
const workouts = await Workout.find({}).sort({createdAt: -1})  

res.status(200).json(workouts)
}

//GET specific workout route
export const getWorkoutById = async(req, res) => {
const { id } = req.params;
  
// Check if the ID is a valid MongoDB ObjectId
 if (!mongoose.Types.ObjectId.isValid(id)) {
return res.status(400).json({ error: "Invalid workout ID" });
}
  
 try {
const workouts = await Workout.findById(id);
  
if (!workouts) {
return res.status(404).json({ error: "Workout not found" });
}
  
res.status(200).json(workouts);
} catch (error) {
res.status(500).json({ error: error.message });
}
}

//POST new workout
export const createWorkout = async(req, res) => {
const {title,load,reps} = req.body   

let emptyFields = []

if (!title){
    emptyFields.push("title")
}
if (!load){
    emptyFields.push("load")
}
if (!reps){
    emptyFields.push("reps")
}
if (emptyFields.length > 0){
    return res.status(400).json({error:"Please fill in all fields", emptyFields})
}

//add to your database
 try {
 const workout = await Workout.create({title, load, reps})  
 res.status(200).json(workout);
 } catch (error) {
   res.status(400).json({error: error.message}) 
 }
}

//DELETE workout
export const deleteWorkout =  async (req, res) => {
    const { id } = req.params; 



    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid workout ID"})
    }

    try {
        await Workout.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Workout deleted"}); //to delete 
    } catch (error) {
        console.error("Error in delete workout:", error.message );
        res.status(500).json({success:false, message: "Server Error"})
    }
};

//UPDATE workout
export const updateWorkout = async (req,res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid workout ID"})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body})

    if(!workout){
        return res.status(400).json({error: "Invalid workout ID"})
    }
     res.status(200).json(workout)
};