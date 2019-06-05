import { SET_CURRENT_USER,SET_USERS, SET_USER } from './types';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { decode } from 'punycode';

export const setCurrentUser = decoded => ({
    type:SET_CURRENT_USER,
    payload: decoded
})

export const setUsers = users =>({
    type:SET_USERS,
    users
})



export const registerUser =  (userData) =>  dispatch => {
    return   axios.post('/api/users/register', userData)
        .then(res => {
            console.log(res);
            if (res.data.success) {
                console.log("User Registered successfully");
            }
            return res;
        });
}

export const loginUser = (data) => dispatch => {
 return  axios.post('/api/users/login', data)
        .then(res => {
            console.log("res : ", res);
            console.log(res.data.success);
            if (res.data.success) {
                const { token } = res.data;
                //set token to local storage
                console.log("token ", token);
                localStorage.setItem('jwtToken', token);

                //set token to Auth Header
                setAuthToken(token);

                //Decode token to get user data
                const decoded = jwt_decode(token);
                console.log("decoded ", decoded);

                //set Current User
                dispatch(setCurrentUser(decoded));
            }
            console.log(res);
            return res;
        }).catch(err => console.log(err));
};



export const logout = () => dispatch =>{
    localStorage.removeItem('jwtToken')
    dispatch(setCurrentUser({}))
}


// export const getCurrentUser = () => dispatch =>{
//     return axios.get('/api/users/currentUser').then(res =>{
//         if(res.data.success){
//             dispatch(setCurrentUser(res.data.user));

//         }
//         return res;
//     })
// }

export const getDepartmentUsers = (department_id) => dispatch =>{
   return axios.get(`/api/users/${department_id}`).then(res =>{
       if(res.data.success){
           dispatch(setUsers(res.data.users))
       }
       return res;
   })
}
