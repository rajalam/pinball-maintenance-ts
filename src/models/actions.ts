import { Device } from "../PinballMain";

export type StartDeviceListFetchAction = {
    type: 'START_DEVICE_LIST_FETCH';
};

export type DeviceListFetchSuccessfulAction = {
    type: 'DEVICE_LIST_FETCH_OK';
    payload: {
        deviceListData: Device[];
    }
};

export type ErrorAction = {
    type: 'ERROR_ACTION';
    payload: {
        errorMessage: string;
        deviceListFetchCommenced: boolean;
    }
};

export type DeviceSelectedSuccessfulAction = {
    type: 'DEVICE_SELECTED_OK_ACTION';

}
  
export type Action = StartDeviceListFetchAction | 
     DeviceListFetchSuccessfulAction | 
     ErrorAction |
     DeviceSelectedSuccessfulAction;
