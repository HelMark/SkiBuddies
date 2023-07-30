import React, {createContext, useState, useEffect} from "react";
import AsyncStorge from "@react-native-async-storage/async-storage"
import axios from "axios";

export const AuthContext = createContext();
const API_ENDPOINT  = "";


export const AuthProvider = ({children}) => { 
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null)

    const login = (username, password) => {
        setIsLoading(true);
        axios.post(API_ENDPOINT, {
            username,
            password
        }).then(res => {
            console.log(res.data)
            let userInfo = res.data
            setUserInfo(userInfo)
            //setUserToken(userInfo.data.token)
        }).catch(error => {
            console.log("Login error: ", error)
        });
        setUserToken("Random String");
        //AsyncStorge.setItem("userToken", "Random String")
        //AsyncStorge.setItem("userInfo", JSON.stringify(userInfo))
        //AsyncStorge.setItem("userToken", userInfo.data.token)
        setIsLoading(false);
    }
    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        //AsyncStorge.removeItem("userToken")
        //AsyncStorge.removeItem("userInfo")
        setIsLoading(false)
    }

    const isLoggedIn = async() => {
    //    try {
    //       setIsLoading(true);
    //        let userToken = await AsyncStorge.getItem("userToken");
    //        let userInfo = await AsyncStorge.getItem("userInfo")
    //        userInfo = JSON.parse("userInfo"):
    //         if(userInfo) {
    //           setUserToken("Random String") //Switch to userToken when ready
    //           setUserInfo(userInfo)
    //          }
    //        setIsLoading(false)
    //    } catch(error) {
    //        console.error("isLogged error in: " , error)
    //    }
    }
    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
    <AuthContext.Provider value={{login, logout, isLoading, userToken, userInfo}}> 
        {children}
    </AuthContext.Provider>
    )
}   
//Use userInfo to display info about the current logged in user in for example ProfileScreen

