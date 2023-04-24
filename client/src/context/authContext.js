import { createContext, useReducer,useEffect } from 'react'



export const AuthContext = createContext()


export const AppReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload }
        case "LOGOUT":

            return { user: null }

        default:
            return state

    }
}



export const AuthContextProvider = ({ children }) => {


    const [state, dispatch] = useReducer(AppReducer,  {
        user: null
    })


    useEffect(() => {
     const user= JSON.parse(localStorage.getItem("user"))

     if (user) {
        dispatch({type:"LOGIN",payload:user})
     }
    }, []);



    return <AuthContext.Provider value={{ ...state, dispatch }}>
        {children}
    </AuthContext.Provider>
}

