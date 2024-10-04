import React, { Dispatch } from 'react';
import './ShowDeviceMenu.css';
import ShowDeviceMenuItem from './ShowDeviceMenuItem';
import { Device, ErrorContainer } from '../PinballMain';
import {DeviceSelectedSuccessfulAction} from '../action/actions'

interface DeviceListProps{
    deviceList: Device[];
    dispatch: Dispatch<DeviceSelectedSuccessfulAction>;
};


const ShowDeviceMenu: React.FC<DeviceListProps> = ( props ) => {
    
    let hasItems:boolean = false;
    if( props.deviceList.length > 0 ) {
        hasItems = true;
    }
    
    const errorBag:ErrorContainer = {
        NO_DEVICES_FOUND: "Laitteita ei löytynyt, lisää uusi laite"
    };

    
    return (
        
        <div className="device-list-container">


            {!hasItems &&
            <p>{errorBag.NO_DEVICES_FOUND}</p>}


             {hasItems && props.deviceList.map(device => (
                <ShowDeviceMenuItem key={device.deviceId}  />
                                    
            ))}
 
            {/* 
            <ShowDeviceMenuItem deviceName='Star Wars(Pena)'
                onClick={() => console.log('Button clicked!')}>
                <div>jlfasjlfsjfslkda</div>
                <div>jlfasjlfsjfslkda</div>
                <div>jlfasjlfsjfslkda</div>
            </ShowDeviceMenuItem>
            
            <ShowDeviceMenuItem deviceName='Star Wars(Mika)'
                onClick={() => console.log('Button clicked!')}>
                <div>jlfasjlfsjfslkda</div>
                <div>jlfasjlfsjfslkda</div>
                <div>jlfasjlfsjfslkda</div>
            </ShowDeviceMenuItem>
            */}

        </div>
    );
}

export default ShowDeviceMenu;