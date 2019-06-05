import { ADD_PENDING_REQUEST,ADD_APPROVED_REQUEST,REMOVE_PENDING_REQUEST,
         ADD_INCOMING_REQUEST,REMOVE_INCOMING_REQUEST, SET_PENDING_REQUESTS,
         SET_APPROVED_REQUESTS, SET_APPROVAL_REQUESTS } from '../actions/types';


const initialState = {
    pending:[],
    approved:[],
    forApproval:[]
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
        case SET_APPROVAL_REQUESTS:
            return {
                ...state,
                forApproval:action.requests
            };
        case ADD_PENDING_REQUEST:
            return {
                ...state,
                pending:[action.request, ...state.pending]
            };
        default:
            return state
    }
}
