import { db } from "../firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }

    try {
      const docRef = await addDoc(collection(db, `${uid}/journal/notes`), newNote)
      console.log(docRef);
    } catch (e) {
      console.log(e)
    }
  }
}