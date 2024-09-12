import './ShowDeviceMenu.css';
import ShowDeviceMenuItem from './ShowDeviceMenuItem';

function ShowDeviceMenu () {
    return(

        <div className="device-list-container">

            <ShowDeviceMenuItem deviceName='Star Wars(Pena)' 
                onClick={ () => console.log('Button clicked!')}>
                <div>jlfasjlfsjfslkda</div> 
                <div>jlfasjlfsjfslkda</div>
                <div>jlfasjlfsjfslkda</div>
            </ShowDeviceMenuItem>

            <ShowDeviceMenuItem deviceName='Star Wars(Mika)' 
                onClick={ () => console.log('Button clicked!')}>
                <div>jlfasjlfsjfslkda</div> 
                <div>jlfasjlfsjfslkda</div>
                <div>jlfasjlfsjfslkda</div>
            </ShowDeviceMenuItem>

        </div>
    );
}

export default ShowDeviceMenu;