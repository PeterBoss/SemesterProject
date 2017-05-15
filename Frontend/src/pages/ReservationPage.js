import React, {Component} from 'react';
import fetchHelper from "../stores/fetchHelpers"
import {observable, action, computed} from "mobx";
import {observer} from "mobx-react";

@observer
class ReservationPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reservation: {
                flightID: this.props.flightID,
                numberOfSeats: this.props.numberOfSeats,
                reserveeName: "",
                reserveePhone: "",
                reserveeEmail: "",
                passengers: []
            }
        }

    }

    render() {

        return (
            <div>
                <form onSubmit={}>
                    <input type="text" id="nameInput" defaultValue="Name"/>
                    <input type="text" id="phoneInput" defaultValue="Phone"/>
                    <input type="email" id="emailInput" defaultValue="Email"/>
                    <button type="submit" id="submitButton">Submit</button>
                </form>
            </div>
        )
    }

}
export default ReservationPage;