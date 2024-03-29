import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    console.log(app);
    const provider = new GoogleAuthProvider();

    const handelGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const loggedInUser = result.user;
                setUser(loggedInUser)
                console.log(user);
            })
            .catch((error) => {
                console.log('error', error.message);
            })
    }

    const handelGoogleSignOut = () => {

        signOut(auth).then((result) => {
            console.log(result);
            setUser(null);
        }).catch((error) => {
            console.log(error)
        });
    }
    return (

        <div>
            {/* user thakle signout dekhabe & na thakle signin dekhabe*/}
            
            {
                user ?
                <button onClick={() => handelGoogleSignOut()} className="btn btn-secondary mt-4">
                Signout</button> :
            <button onClick={() => handelGoogleSignIn()} className="btn btn-primary mt-4">
                Signin</button>
            }


            {
                user && <div className="flex justify-center flex-col gap-4 mt-4 bg-yellow-100 p-4 rounded-2xl">
                    <h1>User: {user.displayName}</h1>
                    <h1>Email: {user.email}</h1>
                    <div className="flex justify-center">
                        <img className="h-[100px] w-[100px] bg-green-200" src={user.photoURL} alt="" />
                    </div>
                </div>
            }
        </div>
    );
};

export default Login;