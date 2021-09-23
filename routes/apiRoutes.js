const db = require("../models");

module.exports = function (app) {
  //get last workout
  app.get("/api/workouts", async (req, res) => {
    try {
      const dbWorkout = await db.Workout.find({});
      res.json(dbWorkout);
    } catch {
      (err) => {
        res.status(400).json(err);
      };
    }
  });

  //post new workout
  app.post("api/workouts", async (req, res) => {
    try {
      const response = await db.Workout.create({ type: "workout" });
      res.json(response);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  //add exercise to workout
  app.put("/api/workouts/:id", async (req, res) => {
    try {
      const workout = await db.Workout.findByIdAndUpdate(
        { _id: req.params.id },
        { exercises: req.body }
      );

      res.json(workout);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  //get workouts in range for dashboard
  app.get("/api/workouts/range"),
    async (req, res) => {
      try {
        const workouts = await db.Workout.find({});
        res.json(workouts);
      } catch (err) {
        res.status(400).json(err);
      }
    };
};
