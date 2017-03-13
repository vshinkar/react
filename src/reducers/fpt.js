import { combineReducers } from 'redux'
        import { REQUEST_FPT, RECEIVE_FPT } from '../constants/Global';

function fpt(state = {
isFetching: false,
        items: []
        }, action) {
    switch (action.type) {
        case REQUEST_FPT:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_FPT:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.fpt,
                lastUpdated: action.receivedAt
            })
        default:
            return state
}
}


function fptByReference(state = { }, action) {
    switch (action.type) {
        case RECEIVE_FPT:
        case REQUEST_FPT:

            return Object.assign({}, state, {
                [action.reference + '_cached']: fpt(state[action.reference], action),
                [action.reference]: fpt(state[action.reference], action)
            })
        default:
            return state
}
}

const fptReducer = combineReducers({
    fpt,
    fptByReference
})

export default fptReducer