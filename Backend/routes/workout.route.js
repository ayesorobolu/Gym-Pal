import express  from "express";
import { getWorkout, createWorkout, getWorkoutById, deleteWorkout, updateWorkout } from "../controller/workout.controller.js";


const router = express.Router();

//GET all workouts route
router.get("/", getWorkout)

//GET specific workout route
router.get("/:id", getWorkoutById)

//POST new workout
router.post("/", createWorkout)

//DELETE specific workouts route
router.delete("/:id", deleteWorkout)

//UPDATE specific workout route
router.patch("/:id", updateWorkout)

export default router;