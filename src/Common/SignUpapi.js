import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase";
import { alert } from "../Redux/Action/alertAction";

export const SignUpAPI = (values) => {
    // fire base exention  

    console.log(values);

    return new Promise((resolve, reject) => {
        try {
            createUserWithEmailAndPassword(auth, values.email, values.password)
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
                            if (user.emailVerified) {
                                // console.log("Email Successfully");
                                resolve({ payload: "sign in successfull" });
                            }
                            else {
                                // console.log("Plese Email Veryfied");
                                resolve({ payload: "plz verified email" });
                            }
                        } else {
                            reject({ payload: "invalid email id"})
                        }
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode, "errorcode");
                    const errorMessage = error.message;
                    // ..
                    reject({ payload: errorCode })
                });
        } catch (error) {

        }

    })
}