import React from 'react';

class Car extends React.Component {
    render() {
        const { eachCar } = this.props;
        return (
            <div id={eachCar.carId} className="new-car">
                <span id={eachCar.carId}>Car: {eachCar.carId}</span>
                <button id={eachCar.carId} onClick={this.props.startOrStopCar}>{(eachCar.status ==="STOPPED")?"Start":"Stop"}</button>
                <span>Status : {(eachCar.status==="STOPPED")?"Stopped": (eachCar.speed)}</span>
                <button id={eachCar.carId}>Accelerate</button>
                <button id={eachCar.carId}>Apply Break</button>
            </div>
        );
    }
}

export default Car;
