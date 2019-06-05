import {SET_REQUEST,ADD_PENDING_REQUEST,ADD_APPROVED_REQUEST,REMOVE_PENDING_REQUEST,
        ADD_INCOMING_REQUEST,REMOVE_INCOMING_REQUEST,SET_PENDING_REQUESTS,SET_APPROVED_REQUESTS,
        SET_APPROVAL_REQUESTS} 
        from './types'
import axios from 'axios';



export const setRequest = (request) =>({
    type:SET_REQUEST,
     request
})

export const addPendingRequest = (request) =>({
   type: ADD_PENDING_REQUEST,
    request
})

export const addApprovedRequest = (request) =>({
    type:ADD_APPROVED_REQUEST,
    request
})

export const removePendingRequest = (request) =>({
    type: REMOVE_PENDING_REQUEST,
    request
})

export const addIncomingRequest = (request) =>({
    type:ADD_INCOMING_REQUEST,
    request
})

export const removeIncomingRequest = (request) =>({
    type: REMOVE_INCOMING_REQUEST,
    request
})


export const setPendingRequests = (requests) =>({
    type: SET_PENDING_REQUESTS,
    requests
})

export const setApprovedRequests = (requests) =>({
    type: SET_APPROVED_REQUESTS,
    requests
})

export const setApprovalRequests = (requests) =>({
    type: SET_APPROVAL_REQUESTS,
    requests
})


export const createRequest = (data) => dispatch =>{
    return axios.post('/api/request',data).then(res =>{
        if(res.data.success){
            dispatch(addPendingRequest(res.data.request))
        }
        return res;
    })
}

export const updateRequest = (id,data) => dispatch =>{
    return axios.put(`/api/request/${id}`,data).then(res =>{
        if(res.data.success){
            dispatch(setRequest(res.data.request))
        }
        return res;
    })
}

export const deleteRequest = (id) => dispatch =>{
    return axios.delete(`/api/request/${id}`).then(res =>{
        if(res.data.success){
            dispatch(removePendingRequest(res.data.departments))
        }
        return res;
    })
}



export const getPendingRequests = () => dispatch =>{
    return axios.get(`/api/request/pending`).then(res =>{
        if(res.data.success){
            dispatch(setPendingRequests(res.data.requests))
        }
        return res;
    })
}


export const getApprovedRequests = () => dispatch =>{
    return axios.get(`/api/request/approved`).then(res =>{
        if(res.data.success){
            dispatch(setApprovedRequests(res.data.requests))
        }
        return res;
    })
}


export const getApprovalRequests = (departmentId) => dispatch =>{
    return axios.get(`/api/request/${departmentId}/forApproval`).then(res =>{
        if(res.data.success){
            dispatch(setApprovalRequests(res.data.requests))
        }
        return res;
    })
}
