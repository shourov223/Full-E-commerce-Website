import { createContext, useContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from 'react-toastify';

const UserContext = createContext()
const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const Pasword_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/
    const Email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


    const addUser = (email, password) => {
        if (Email_regex.test(email)) {

            if (Pasword_regex.test(password)) {
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;

                        toast('🦄 Wow so easy!', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        });
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                    });
            } else {
                alert("password not match")
            }

        } else {
            alert('email not match')
        }
    }
    const [color, setColor] = useState(false)
    const handleColor = () => {
        setColor(!color)
    }
    const [value, setValue] = useState("")
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, addUser, color, setColor, handleColor, value, handleChange }}>
            {children}
        </UserContext.Provider>
    )
}
export const useUser = () => useContext(UserContext)
export default UserProvider