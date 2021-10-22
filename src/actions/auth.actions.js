import { types } from "../types/types"
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebase-config';
import { finishLoading, startLoading } from "./ui.actions";
import { noteLogout } from './notes.action';
import Swal from 'sweetalert2'


export const startLoginEmailPassword = (email, password) =>{
  return (dispatch) => {
    const auth = getAuth();
    dispatch(startLoading());
      signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          dispatch(login(user.uid, user.displayName))
          dispatch(finishLoading());
        }).catch((err) => {
          dispatch(finishLoading());
          Swal.fire('Fail', err.message, 'error');
        })
    }
}

export const startGoogleLogin = () =>{
  return (dispatch) =>{
    const auth = getAuth();
      signInWithPopup(auth, googleAuthProvider)
        .then(({user}) =>{
            dispatch(login(user.uid, user.displayName))
        }).catch(err => {
          console.log(err);
        })
    }
}

export const login = (uid, displayName) =>(
  {
    type:types.login,
      payload: {
        uid,
        displayName
      }
  }
)


export const startLoginEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(async ({ user }) => {

          await updateProfile(user, { displayName: name });

            dispatch(login(user.uid, user.displayName));
        }).catch(e => {
          Swal.fire('Fail', e.message, 'error');
        })
    }
}

export const startLogout = () => {
  return async (dispatch) => {
    const auth = getAuth();
    await signOut(auth);
    dispatch(logout());
    dispatch(noteLogout());
  }
}

export const logout = () => ({
  type: types.logout
})