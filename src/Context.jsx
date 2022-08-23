import { useContext, useReducer, useEffect } from "react";
import { createContext } from "react";
import reducer from "./reducer";

const AppContext = createContext();

const API = './ServiceData.JSON'
const AppProvider = ({ children }) => {

    const initailState = {
        name: '',
        image: '',
        services: []
    }

    const updateHomePage = () => {
        return (
            dispatch({
                type: "HOME_UPDATE",
                payload: {
                    name: "MEHEDI IRFAN",
                    image: "./images/hero.svg"
                }
            })
        )
    }

    const updateAboutPage = () => {
        return (
            dispatch({
                type: "ABOUT_UPDATE",
                payload: {
                    name: "MEHEDI HASAN",
                    image: './images/about1.svg'
                }
            })
        )
    }


    const [state, dispatch] = useReducer(reducer, initailState);

    const getServices = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json();
            dispatch({
                type: "GET_SERVICES",
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getServices(API)
    }, [])

    return (
        <AppContext.Provider value={{ ...state, updateAboutPage, updateHomePage }}>
            {children}
        </AppContext.Provider>
    )
}

const useGloabalContext = () => {
    return (
        useContext(AppContext)
    )
}

export { AppProvider, useGloabalContext, AppContext }