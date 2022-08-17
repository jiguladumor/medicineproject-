import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { alert } from "../Redux/Action/alertAction";
import { GoogleAuthProvider } from "firebase/auth";



// sign in process
export const SignUpAPI = (values) => {
    // fire base exention  

    console.log(values);



    return new Promise((resolve, reject) => {

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
                        reject({ payload: "invalid email id" })
                    }
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode, "errorcode");
                const errorMessage = error.message;
                if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                    reject({ payload: "email id already registared" });
                }
                else {
                    reject({ payload: errorCode });
                }
                // ..

            });
    }
    )
}

// login process

export const LoginApi = (values) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((user) => {
                console.log(user);
                if (user.user.emailVerified) {
                    resolve({ payload: user.user })
                }
                else {
                    reject({ payload: "plz verifired email" })
                }

            }).catch((error) => {
                console.log(error);

                if (error.code.localeCompare("auth/user-not-found") === 0) {
                    reject({ payload: "plz  email registred" })
                }
                else if (error.code.localeCompare("auth/wrong-password") === 0) {
                    reject({ payload: " wrong email or password" })
                }
                else {
                    reject({ payload: error.code });
                }


            })


    })

}
// loggouut pprocess
export const LogoutApi = (values) => {
    return new Promise((resolve, reject) => {
        signOut(auth)
            .then((user) => {
                console.log(user);
                resolve({ payload: "logout suceesfull" })
            })
            .catch((error) => {
                console.log(error);
                reject({ payload: "something went wrong " })
            })
    })
}

// sign in google api process 

export const SigninGoogleApi = () => {

    return new Promise((resolve, reject) => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                resolve({ payload: user })
                console.log(user);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                reject({ payload: error.code })
            });

    })
}


export const ResetApi = (values) => {
    return new Promise((resolve, reject) => {

        sendPasswordResetEmail(auth, values.email)
            .then((user) => {
                 
                resolve({  payload: "plzenter check  email"})
                
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                console.log(error);
                reject({ payload: "something went wrong " })
                
                // ..
            });
    })
}