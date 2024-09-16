import './PinballMain.css';
import ShowDeviceMenu from './components/ShowDeviceMenu';
import { useReducer, useEffect } from 'react';
import axios from 'axios'; // npm install axios , jos ei ole jo ladattu

type Device = {
    deviceId: number;
    name:string;
};

type AppState = {

    isError:boolean;
    errorMessage:string;
    fetchDeviceListData:boolean;
    deviceListFetchCommenced:boolean;
    deviceListData:Device[];

};

const initAppState:AppState = {
    isError: false,
    errorMessage:'',
    fetchDeviceListData: true,
    deviceListFetchCommenced: false,
    deviceListData: []
};


function PinballMain() {
    
    type StartDeviceListFetchAction = {
        type: 'START_DEVICE_LIST_FETCH';
    };
      
    type Action = StartDeviceListFetchAction;

    //reducer alustus
    const [appState, dispatch] = useReducer(appReducer, initAppState);

    function appReducer(state: AppState, action: Action ): AppState {
        
        switch( action.type ) {
           case 'START_DEVICE_LIST_FETCH':
            console.log("START_DEVICE_LIST_FETCH", action)
            return {
                ...state, 
                deviceListFetchCommenced: true
            } 
        }


        
        

        
            

        // return state;
    }

    return(
        <div className='background'>
            <div className='app-workspace-background'>

            <ShowDeviceMenu />
            
            </div>            
        </div>
    );
}

export default PinballMain;