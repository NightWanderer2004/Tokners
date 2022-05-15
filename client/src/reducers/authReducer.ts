import { SET_CURRENT_USER } from '../actions/types'
import isEmpty from '../validation/isEmpty'

const initialState = {
   isAuthenticated: false,
   user: {},
}

interface Action {
   type: string
   payload: any
}

export const authReducer = (state = initialState, action: Action) => {
   switch (action.type) {
      case SET_CURRENT_USER:
         return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            user: action.payload,
         }
      default:
         return state
   }
}
