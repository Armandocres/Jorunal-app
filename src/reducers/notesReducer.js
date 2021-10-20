import { types } from "../types/types"


const initialSate = {
  notes: [],
  active: null,
  // active: {
  //   id: '1',
  //   title: '',
  //   body: '',
  //   imageUrl: '',
  //   date: 12345
  // }
}

export const notesReducer = (state = initialSate , action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload
        }
      }
    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload]
      }
    default:
      return state
  }
}