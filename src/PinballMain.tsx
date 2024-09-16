import './PinballMain.css';
import ShowDeviceMenu from './components/ShowDeviceMenu';

type Device = {
    deviceId: number,
    name:string    
};

type AppState = {

    isError:boolean,
    errorMessage: string,
    fetchDeviceListData:boolean,
    deviceListFetchCommenced:boolean,
    deviceListData:[Device]

};

function PinballMain() {

    return(
        <div className='background'>
            <div className='app-workspace-background'>

            <ShowDeviceMenu />
            
            </div>            
        </div>
    );
}

export default PinballMain;