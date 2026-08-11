export type Exercise = {
  id: string;
  name: string;
  type: ExerciseType
}

export type ExerciseType = 'strength' | 'cardio' | 'flexibility' | 'balance' | 'rest'

