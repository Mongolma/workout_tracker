const express = require("express");

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

    module.exports = router;
    
    //Add new exercises to a new workout plan.
    
   

    //View the combined weight of multiple exercises on the `stats` page.