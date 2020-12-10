const express = require("express");
const db = require("./models");
const router = express.Router();

//Add exercises to a previous workout plan.
router.put("/api/workouts/:id", function({ body, params }, res){
    //    db.Stats.create(body)
    //    .then((params.id) => return {
        db.Add.findByIdAndUpdate(params.id,
        {
            $push: { exercises: body }
            
        }).then(data =>{ 
            res.json(data)}
        ).catch(err => {
            res.json(err)}
    )} );

    router.post("/api/workouts", ({ body }, res) => {
        db.Add.create(body).then((dbWorkouts => {
          res.json(dbWorkouts);  
        })).catch(err => {
            res.json(err);
        });
    });

    module.exports = router;
    
    //Add new exercises to a new workout plan.
    // async createWorkout(data = {}) {
    //     const res = await fetch("/api/workouts", {
    //       method: "POST",
    //       body: JSON.stringify(data),
    //       headers: { "Content-Type": "application/json" }
    //     });
    
    //     const json = await res.json();
    
    //     return json;
    //   },

    //View the combined weight of multiple exercises on the `stats` page.