import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { GET_ERRORS, CLEAR_ERRORS, SET_CURRENT_USER } from './types'
import setAuthToken from '../utils/setAuthToken'

interface User {
   login: string
   email: string
   password: string
}
interface DispatchArgs {
   type: string
   payload?: any
}

export const registerUser = (userData: User) => (dispatch: (arg: DispatchArgs) => void) => {
   axios
      .post('/api/users/register', userData)
      .then(() => dispatch({ type: CLEAR_ERRORS }))
      .catch(err =>
         dispatch({
            type: GET_ERRORS,
            payload: err.response.data,
         })
      )
}
export const loginUser = (userData: User) => (dispatch: (arg: DispatchArgs) => void) => {
   axios
      .post('/api/users/login', userData)
      .then(res => {
         const token: string = res.data.token
         const decoded: string = jwtDecode(token)

         localStorage.setItem('jwtToken', token)
         setAuthToken(token)

         dispatch({
            type: SET_CURRENT_USER,
            payload: decoded,
         })
      })
      .then(() => dispatch({ type: CLEAR_ERRORS }))
      .catch(err =>
         dispatch({
            type: GET_ERRORS,
            payload: err.response.data,
         })
      )
}
