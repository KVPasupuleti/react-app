import React from 'react';
import Car from './Car';
import './Carslist.css';

let carId = 0;
class CarsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carsList: []
        };
    }

    startOrStopCar = (event) => {
        const { carsList } = this.state;
        const selectedCarId = Number(event.target.id);
        const duplicateCarsList = carsList.slice(0);
        duplicateCarsList.forEach(eachCar => {
            if (eachCar.carId === selectedCarId) {
                console.log(1);
                eachCar.status = (eachCar.status === "STOPPED") ? "RUNNING" : "STOPPED";
            }
        });
        this.setState({ carsList: duplicateCarsList });
    }

    onAccelerate = (event) => {
        const { carsList } = this.state;
        const selectedCarId = Number(event.target.id);
        const duplicateCarsList = carsList.slice(0);
        duplicateCarsList.forEach(eachCar => {
            if (eachCar.carId === selectedCarId) {
                eachCar.speed += 10;
            }
        });
        this.setState({ carsList: duplicateCarsList });
    }

    onDecelerate = (event) => {
        const { carsList } = this.state;
        const selectedCarId = Number(event.target.id);
        const duplicateCarsList = carsList.slice(0);
        duplicateCarsList.forEach(eachCar => {
            if (eachCar.carId === selectedCarId && eachCar.speed > 0) {
                eachCar.speed -= 10;
            }
        });
        this.setState({ carsList: duplicateCarsList });
    }

    addCar = () => {
        const { carsList } = this.state;
        const duplicateCarsList = carsList.slice(0);
        carId += 1;
        const newCar = {
            carId: carId,
            status: "STOPPED",
            speed: 0
        };
        duplicateCarsList.push(newCar);
        this.setState({ carsList: duplicateCarsList });
    }

    renderCarsList = () => {
        const { carsList } = this.state;
        const displayCarsList = carsList.map(eachCar => {
            return <Car key={eachCar.carId} eachCar={eachCar} startOrStopCar={this.startOrStopCar}/>;
        });
        return displayCarsList;
    }

    render() {
        return (
            <div className="container">
            <button onClick={this.addCar}>Add Car</button>
            <div className="garage">
            {this.renderCarsList()}
            </div>
            </div>
        );
    }
}

export default CarsList;
