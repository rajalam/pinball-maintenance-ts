import './PinballMain.css';
import ShowDeviceMenu from './components/ShowDeviceMenu';
import { useReducer, useEffect } from 'react';
import axios from 'axios'; // npm install axios , jos ei ole jo ladattu
import { getServer, getTokendata } from './utils/ServerConfig';
// import {Action} from './action/actions';
import appReducer from './reducers/appReducer';

export type Device = {
    readonly deviceId: number;
    name:string;
};

//type GetDeviceListResponse = {
//    devices: Device[];
//}

export interface ErrorContainer { //e.g. { email: 'Not a valid email!'}
    [prop: string]: string;
}



export type AppState = {

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
    
    
    //reducer alustus
    const [appState, dispatch] = useReducer(appReducer, initAppState);

    

    useEffect(() => {

        //fetch all devices
        const fetchDeviceList = async () => {

            const errorBag:ErrorContainer = {
                ERROR_MESSAGE_DEVICE_LIST_FETCH_FAILED: "Laitteiden haku epäonnistui!"
            };

            try {
                
                dispatch({
                    type: 'START_DEVICE_LIST_FETCH'   
                })

                const fetchResult = 
                    await axios.get<Device[]>(getServer() + '/devices');
                //    await axios.get<GetDeviceListResponse>(getServer() + '/devices', getTokendata());
                
                if (fetchResult.status === 200 ) { //fetch ok
                    
                        dispatch({
                            type: 'DEVICE_LIST_FETCH_OK',
                            payload: {
                                deviceListData: fetchResult.data
                            }
                            
                        })
                    
                }
                else { //other error
                    throw new Error("Error status!");
                }
            }
            catch( error ) {
                
                console.log("Error result: ", error)
                dispatch({
                    type: 'ERROR_ACTION',
                    payload:
                    {                        
                        errorMessage: errorBag.ERROR_MESSAGE_DEVICE_LIST_FETCH_FAILED,
                        deviceListFetchCommenced: false
                    }
                })
            }            
        }
        if( appState.fetchDeviceListData ) {
            fetchDeviceList();
        }
    }, [appState.fetchDeviceListData])

    return(
        <div className='background'>
            <div className='app-workspace-background'>

            <ShowDeviceMenu deviceList={appState.deviceListData}
                dispatch={dispatch}
                  />
            
            </div>            
        </div>
    );
}

export default PinballMain;