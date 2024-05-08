import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const provider = new GoogleAuthProvider();
    const [User, setUser] = useState(null);
    const [loading,setLoading]=useState(true);
    const [Reload,setReload]=useState(false)

    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    function LogOut(){
        signOut(auth)
        .then(()=>{
            alert('sing out successful')
        }) 
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            const userEmail=user?.email||User.email;
            const logedUser={email:userEmail};
            setUser(user)
            setLoading(false)
            console.log(user)
            if(user){
                axios.post('https://review-server-mdafsars-projects.vercel.app/jwt',logedUser,{withCredentials:true})
                .then(data=>{
                    console.log(data.data)
                })
                .catch(error=>{
                    console.log(error)
                })
            }
            else{
                axios.post('https://review-server-mdafsars-projects.vercel.app/logout',logedUser,{withCredentials:true})
                .then(data=>console.log(data.data))
                .catch(error=>console.log(error))
            }

        })
    })

    return (
        <AuthContext.Provider value={{ googleLogin, User, setUser , LogOut , loading , Reload,setReload}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;