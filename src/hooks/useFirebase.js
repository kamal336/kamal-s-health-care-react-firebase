import { useEffect, useState } from "react"
import initialAuthentication from "../Firebase/inializeFirebase";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,GithubAuthProvider  } from "firebase/auth";

initialAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider ();

const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [error,setError] = useState("");
    
    // signing by google 
    const signingGoogle = ()=>{
      return  signInWithPopup(auth,googleProvider)
      
    }

    // stay user/find user 
    useEffect(()=>{
        onAuthStateChanged(auth,(user=>{
            if(user){
                console.log('successfully added',user);
                setUser(user)
            }

        })
        )
    },[])
     
    // logout 
    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            console.log('successfully logout');
            setUser({})
        }).catch(error=>{
            setError(error.message)
        })
    }
     
    // github login 
    const githubLogin = () =>{
        signInWithPopup(auth,githubProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setUser(user)
        }).catch(error=>{
            setError(error.message)
        })
    }

    return {
        error,
        user,
        signingGoogle,
        logOut,
        githubLogin
    }
}

export default useFirebase;