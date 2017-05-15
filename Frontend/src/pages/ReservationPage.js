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
                flightID: "",
                numberOfSeats: "",
                reserveeName: "",
                reserveePhone: "",
                reserveeEmail: "",
                passengers: []
            }
        }

    }


    updateReservation = (event) => {
        console.log(event.target.value);
    }


    render() {

        return (
            <div>
                <form>
                    <input type="text" id="nameInput" placeholder="Name"/>
                    <br/>
                    <input type="text" id="phoneInput" placeholder="Phone"/>
                    <br/>
                    <input type="email" onChange={this.updateReservation} id="emailInput" placeholder="Email"/>
                    <br/>
                    <button type="submit" id="submitButton">Submit</button>
                </form>
                <p>{JSON.stringify(this.state.reservation)}</p>
            </div>
        )
    }

}
export default ReservationPage;