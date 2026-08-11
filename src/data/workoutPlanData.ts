import { WorkoutPlan } from './workoutPlan';

export const myWorkoutPlan: WorkoutPlan = {
  id: 'my-plan',
  schedule: {
    Mon: {
      id: 'upper-a',
      name: 'Upper A',
      description: 'Chest · back · rear delts',
      exercises: [
        {
          id: 'upper-a-pushups',
          exercise: {
            id: 'pushups',
            name: 'Push-ups',
            type: 'strength',
          },
          sets: 4,
          reps: '10–15',
          rest: 60,
        },
        {
          id: 'upper-a-bw-rows',
          exercise: {
            id: 'bw-rows',
            name: 'Bodyweight rows',
            type: 'strength',
          },
          sets: 4,
          reps: '10–15',
          rest: 60,
        },
        {
          id: 'upper-a-lateral-raises',
          exercise: {
            id: 'lateral-raises',
            name: 'Lateral raises',
            type: 'strength',
          },
          sets: 3,
          reps: '12–15',
          rest: 45,
        },
        {
          id: 'upper-a-rear-delt-raises',
          exercise: {
            id: 'rear-delt-raises',
            name: 'Rear delt raises',
            type: 'strength',
          },
          sets: 3,
          reps: '12–15',
          rest: 45,
        },
      ],
    },

    Tue: {
      id: 'run-easy',
      name: 'Run',
      description: 'Easy aerobic',
      exercises: [
        {
          id: 'run-easy-session',
          exercise: {
            id: 'easy-run',
            name: 'Easy run',
            type: 'cardio',
          },
          sets: 1,
          reps: '30–45 min',
          rest: 0,
        },
      ],
    },

    Wed: {
      id: 'lower-a',
      name: 'Lower A',
      description: 'Quads · calves · abs',
      exercises: [
        {
          id: 'lower-a-squats',
          exercise: {
            id: 'squats',
            name: 'Squats',
            type: 'strength',
          },
          sets: 4,
          reps: '12–15',
          rest: 60,
        },
        {
          id: 'lower-a-reverse-lunges',
          exercise: {
            id: 'reverse-lunges',
            name: 'Reverse lunges',
            type: 'strength',
          },
          sets: 3,
          reps: '10/side',
          rest: 60,
        },
        {
          id: 'lower-a-calf-raises',
          exercise: {
            id: 'calf-raises',
            name: 'Calf raises',
            type: 'strength',
          },
          sets: 3,
          reps: '15–20',
          rest: 45,
        },
        {
          id: 'lower-a-leg-raises-plank',
          exercise: {
            id: 'leg-raises-plank',
            name: 'Leg raises + plank',
            type: 'strength',
          },
          sets: 3,
          reps: '12 + 30s hold',
          rest: 60,
        },
      ],
    },

    Thu: {
      id: 'run-intervals',
      name: 'Run',
      description: 'Intervals / tempo',
      exercises: [
        {
          id: 'run-intervals-session',
          exercise: {
            id: 'interval-run',
            name: 'Interval run',
            type: 'cardio',
          },
          sets: 1,
          reps: '25–35 min',
          rest: 0,
        },
      ],
    },

    Fri: {
      id: 'upper-b',
      name: 'Upper B',
      description: 'Shoulders · arms · mid-back',
      exercises: [
        {
          id: 'upper-b-pike-pushups',
          exercise: {
            id: 'pike-pushups',
            name: 'Pike push-ups',
            type: 'strength',
          },
          sets: 4,
          reps: '8–12',
          rest: 60,
        },
        {
          id: 'upper-b-db-band-rows',
          exercise: {
            id: 'db-band-rows',
            name: 'Dumbbell / band rows',
            type: 'strength',
          },
          sets: 4,
          reps: '10–12',
          rest: 60,
        },
        {
          id: 'upper-b-tricep-dips',
          exercise: {
            id: 'tricep-dips',
            name: 'Tricep dips',
            type: 'strength',
          },
          sets: 3,
          reps: '10–15',
          rest: 60,
        },
        {
          id: 'upper-b-bicep-curls',
          exercise: {
            id: 'bicep-curls',
            name: 'Bicep curls',
            type: 'strength',
          },
          sets: 3,
          reps: '12–15',
          rest: 45,
        },
      ],
    },

    Sat: {
      id: 'lower-b',
      name: 'Lower B',
      description: 'Glutes · hamstrings · obliques',
      exercises: [
        {
          id: 'lower-b-hip-thrusts',
          exercise: {
            id: 'hip-thrusts',
            name: 'Hip thrusts',
            type: 'strength',
          },
          sets: 4,
          reps: '15',
          rest: 60,
        },
        {
          id: 'lower-b-romanian-deadlift',
          exercise: {
            id: 'romanian-deadlift',
            name: 'Romanian deadlift',
            type: 'strength',
          },
          sets: 3,
          reps: '10–12',
          rest: 60,
        },
        {
          id: 'lower-b-nordic-curls',
          exercise: {
            id: 'nordic-curls',
            name: 'Nordic curls',
            type: 'strength',
          },
          sets: 3,
          reps: '6–8',
          rest: 60,
        },
        {
          id: 'lower-b-side-plank-russian-twist',
          exercise: {
            id: 'side-plank-russian-twist',
            name: 'Side plank + Russian twist',
            type: 'strength',
          },
          sets: 3,
          reps: '30s/side + 15',
          rest: 60,
        },
      ],
    },

    Sun: {
      id: 'rest',
      name: 'Rest',
      description: 'Recovery',
      exercises: [
        {
          id: 'rest-active-recovery',
          exercise: {
            id: 'active-recovery',
            name: 'Active recovery (optional)',
            type: 'rest',
          },
          sets: 1,
          reps: '20–30 min',
          rest: 0,
        },
      ],
    },
  },
};