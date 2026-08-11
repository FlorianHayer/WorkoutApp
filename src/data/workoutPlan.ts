import { Day } from "./day";
import { Workout } from "./workout";

export type WorkoutPlan = {
  id: string,
  schedule: Record<Day, Workout>
};
