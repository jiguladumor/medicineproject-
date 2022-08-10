import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { alert } from "../Redux/Action/alertAction";

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
                            reject({ payload: "invalid email id"})
                        }
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode, "errorcode");
                    const errorMessage = error.message;
                    if(errorCode.localeCompare("auth/email-already-in-use") === 0 ){
                        reject({payload:"email id already registared"});
                    }
                    else{
                        reject({payload:errorCode});
                    }
                    // ..
                    
                });
        }  
     )
}

export const LoginApi = (values)  => { 
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, values.email, values.password) 
            .then((user) => {
                console.log(user);
                if(user.user.emailVerified){
                    resolve({payload :user.user})
                }
                else{
                    reject({payload:"plz verifired email"})
                }
        
            }).catch((error) => {
                console.log(error);  

                if(error.code.localeCompare("auth/user-not-found") === 0 ) {
                    reject({payload:"plz  email registred"})
                }  
                else if (error.code.localeCompare("auth/wrong-password")===0){
                            reject({payload:" wrong email or password"})
                }
                else{
                    reject({payload:error.code});
                }
                     
                
            })
       
      
        })
 
}