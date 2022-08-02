import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase";

export const SignUpAPI = (data) => {
    // fire base exention  
   console.log(data);

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)

            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        sendEmailVerification(user)
                        const uid = user.uid;
                    } else {
                        
                    }
                });
            })
            .then((dataEmailVerification) => {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        if(user.emailVerified){
                            console.log("Email Successfully");
                        }
                        else{
                            console.log("Plese Email Veryfied");
                        }
                    } else {
                        
                    }
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    })







}