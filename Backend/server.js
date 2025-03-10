import express from "express";
import dotenv from "dotenv"; 
import cors from "cors";
import workoutRoute from "./routes/workout.route.js"
import { connectDB } from "./config/db.js";


dotenv.config();

const PORT = process.env.PORT || 4001 
const app = express();

app.use(cors());

//middleware
app.use(express.json());

app.use((req,res, next) => {
    console.log(req.path, req.method)
    next()
})

// app.get('/api/workouts', (req, res) => {
//     res.json([{ id: 1, name: "Workout A" }, { id: 2, name: "Workout B" }]);
// });
//routes
app.use("/api/workouts", workoutRoute);

app.listen(PORT, () =>{
    connectDB();
    console.log(`server started on port ${PORT}`)
})
