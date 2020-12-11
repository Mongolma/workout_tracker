const express = require("express");
const router = express.Router();

let mongoose = require("mongoose");
let db = require("./models");
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//get last record
router.get("/api/workouts", ({ body }, res) => {
    db.Workout.find({}).then((dbWorkouts => {
      res.json(dbWorkouts);  
    })).catch(err => {
        res.json(err);
    });
});

//Add exercises to a previous workout plan.
router.put("/api/workouts/:id", function({ body, params }, res){
if (params.id) {
    db.Workout.findByIdAndUpdate(params.id,
        {
            $push: { exercises: body }
            
        }).then(data =>{ 
            res.json(data)}
        ).catch(err => {
            res.json(err)}
    )
} else {
  let newWorkout = {
        day: new Date().setDate(new Date().getDate()),
        exercises: [ body ]
      }
    db.Workout.create(newWorkout).then((dbWorkouts => {
        res.json(dbWorkouts);  
      })).catch(err => {
          res.json(err);
      });
}
});

     
    //Add new exercises to a new workout plan.
    router.post("/api/workouts", ({ body }, res) => {
        
    });


    module.exports = router;
   
    //View the combined weight of multiple exercises on the `stats` page.