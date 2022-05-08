import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types'

const initialState = {}

interface Action {
   type: string
   payload: any
}

export const errorReducer = (state = initialState, action: Action) => {
   switch (action.type) {
      case GET_ERRORS:
         return action.payload
      case CLEAR_ERRORS:
         return {}
      default:
         return state
   }
}
