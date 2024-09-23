import Home from "../components/screens/home/Home"
import Auth from "../components/screens/auth/Auth"
import Profile from "../components/screens/profile/Profile"
import NewWorkout from "../components/screens/new-workout/NewWorkout"

export const routes = [
    {
        path: '/',       
        component: Home,
        isAuth: false
    },
    {
        path: '/auth',        
        component: Auth,
        isAuth: false
    },
    {
        path: '/profile',        
        component: Profile,
        isAuth: false
    },
    {
        path: '/new-workout',        
        component: NewWorkout,
        isAuth: true
    },
    // {
    //     path: '/new-exercise',   
    //     component: NewExercise,
    //     isAuth: true
    // },    
    // {
    //     path: '/workout/:id',   
    //     component: SingleWorkout,
    //     isAuth: true
    // },
    // {
    //     path: '/workouts',
    //     component: ListWorkouts,
    //     isAuth: true
    // }   ,
    // {
    //     path: '/exercise-:id',
    //     component: SingleExercise,
    //     isAuth: true
    // }   
]