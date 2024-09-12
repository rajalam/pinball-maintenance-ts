import "./ShowDeviceMenuItem.css";

import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type ButtonProps = {
    deviceName: string;
    onClick: () => void;
    children: ReactNode;
  } & ComponentPropsWithoutRef<'button'>;

export default function ShowDeviceMenuItem({
    deviceName, children, ...otherProps}: ButtonProps ) {

        return(
            <button className='device-button-container' {...otherProps}>
                    <div className='device-name-item'>{deviceName}</div>
                    {children}                    
            </button>
        );   
    
}

    



