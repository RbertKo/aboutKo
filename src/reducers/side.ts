import { useReducer, createContext, Dispatch } from 'react';

export enum sideActionType {
    toggleSideNav = 'toggleSideNav'
}

export interface sideAction {
    type: sideActionType
}

export interface sideState {
    isSpreaded: boolean
}

export type IHeaderContext = [
    sideState,
    Dispatch<sideAction>?
];

export function sideReduce(state: sideState, action: sideAction): sideState {
    switch(action.type) {
        case sideActionType.toggleSideNav: {
            return {
                isSpreaded: !state.isSpreaded
            };
        }
        default: throw Error('error')
    }
}

const HeaderContext = createContext<IHeaderContext>([{isSpreaded: false}])

export default HeaderContext;