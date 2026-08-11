import { Exercise } from "./exercise"

export type WorkoutExercise = {
    id: string,
    exercise: Exercise,
    sets: number,
    reps: string, // can be a number or a range like "8-12" or a time like "30s"
    rest: number // in seconds
}