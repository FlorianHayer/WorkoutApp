import { WorkoutExercise } from "./workoutExercise"

export type Workout = {
  id: string,
  name: string,
  description: string,
  exercises: WorkoutExercise[]
}