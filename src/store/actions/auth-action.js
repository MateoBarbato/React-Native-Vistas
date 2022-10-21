import { URL_AUTH_SIGN_UP } from "../../constants/firebase";
import { AuthTypes } from "../types";

const {SING_UP } = AuthTypes

export const singUp = (email,password) => {
    return async (dispatch) => {
        try {
            const response = await fetch(URL_AUTH_SIGN_UP,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    email,
                    password,
                    returnSecureToken:true
                })
            });
            
            if(!response.ok){
            throw new Error('Algo salio mal')
            }
            
            const data = await response.json()

            dispatch({
                type: SING_UP,
                token:data.idToken,
                userId:data.localId
            })
       
        }catch(error){
            console.log(error)
        }
    }
};