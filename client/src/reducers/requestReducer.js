import { ADD_PENDING_REQUEST,ADD_APPROVED_REQUEST,REMOVE_PENDING_REQUEST,
         ADD_INCOMING_REQUEST,REMOVE_INCOMING_REQUEST, SET_PENDING_REQUESTS,
         SET_APPROVED_REQUESTS, SET_INCOMING_REQUESTS } from '../actions/types';


const initialState = {
    pending:[],
    approved:[],
    forApproval:[],
    incomingRequests:[]
};


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PENDING_REQUESTS:
            return {
                ...state,
                pending:action.requests
            };
        case SET_APPROVED_REQUESTS:
            return {
                ...state,
                approved:action.requests
            };
        case ADD_APPROVED_REQUEST:
            return {
                ...state,
                approved:[action.request, ...state.approved]
            };
        case REMOVE_INCOMING_REQUEST:
            const updatedIncomingRequests = state.incomingRequests.filter(request => request._id != action.id)
             return{
                 ...state,
                 incomingRequests:updatedIncomingRequests
             }
       case ADD_INCOMING_REQUEST:
              return{
                  ...state,
                  incomingRequests:[action.request,...state.incomingRequests]
              }
        case SET_INCOMING_REQUESTS:
            return {
                ...state,
                incomingRequests:action.requests
            };
        case ADD_PENDING_REQUEST:
            return {
                ...state,
                pending:[action.request, ...state.pending]
            };
        case REMOVE_PENDING_REQUEST:
           const pendingRequests = state.pending.filter(request => request._id != action.id)
            return{
                ...state,
                pending:pendingRequests
            }
        default:
            return state
    }
}
