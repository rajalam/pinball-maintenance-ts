import {AppState} from '../PinballMain';
import { Action } from '../action/actions';

export default function appReducer(state: AppState, action: Action ): AppState {
        
    switch( action.type ) {
       case 'START_DEVICE_LIST_FETCH':
            console.log("START_DEVICE_LIST_FETCH", action)
            return {
                ...state, 
                deviceListFetchCommenced: true
            }
        
        case 'DEVICE_LIST_FETCH_OK':
            console.log("DEVICE_LIST_FETCH_OK", action)
            return {
                ...state,
                deviceListFetchCommenced: false,
                deviceListData: [...action.payload.deviceListData],
                fetchDeviceListData: false,
                isError: false,
                errorMessage: ''
            }
        case 'ERROR_ACTION':
            console.log("ERROR_ACTION", action)
            return {
                ...state,
                isError: true,
                errorMessage: action.payload.errorMessage,
                deviceListFetchCommenced: false
            }
        case 'DEVICE_SELECTED_OK_ACTION':
            console.log("DEVICE_SELECTED_OK_ACTION", action)
            return {
                ...state
                //TODO
            }
    }


    
    

    
        

    // return state;
}