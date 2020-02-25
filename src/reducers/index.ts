import { useReducer } from 'react';

enum actioType {
    aaa = 'aaa',
    ccc = 'ccc'
}

interface Action {
    type: actioType
}

interface State {
    isSpreaded: boolean
}

function reduce(state: State, action: Action): State {
    switch(action.type) {
        case 'aaa': return state;
        case 'ccc': return state;
        default: throw Error('error')
    }
}

export default useReducer(reduce, {isSpreaded: false})