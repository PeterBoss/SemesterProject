import React, {Component} from 'react';
import fetchHelper from "../stores/fetchHelpers"
import {observable, action, computed} from "mobx";
import {observer} from "mobx-react";

@observer
class ReservationPage extends Component {

    constructor(props) {
        super(props);
        this.sendReservation = this.sendReservation.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        var amount = props.params.seats;

        this.state = {
                flightID: props.params.id,
                numberOfSeats: props.params.seats,
                reserveeName: "",
                reserveePhone: "",
                reserveeEmail: "",
                passengers: []
        }

    }

    handleNameChange(e) {
        this.setState({reserveeName: e.target.value});
    }

    handlePhoneChange(e) {
        this.setState({reserveePhone: e.target.value});
    }

    handleEmailChange(e) {
        this.setState({reserveeEmail: e.target.value});
    }

    sendReservation = (event) => {

        console.log(this.state);


        var flightId = event.target.id;

        var options = fetchHelper.makeOptions("POST", true, this.state);
        var newUrl = URL + 'api/reservation/' + flightId;

        fetch(newUrl, options)
            .then((res) => {
                return res.json();
            })
    }

    render() {
        const passengerField = <div><input type="text" id="passengerNameInput"
                                           placeholder="passenger firstName"/><br/><input type="text"
                                                                                          id="passengerLastNameInput"
                                                                                          placeholder="passenger lastName"/><br/>


            <br/></div>;
        var passengerFields = [];
        for (var i = 0; i < this.state.numberOfSeats; i++) {
            passengerFields.push(passengerField);
        }
        passengerFields.map((line, idx)=>{ <div key={idx}>{line}</div>});
        return (
            //for (var i = 0; i < 3; i++) {

            <div>
                <form>
                    <input type="text" id="nameInput" onChange={this.handleNameChange} placeholder="Reservee Name"/>
                    <br/>
                    <input type="text" id="phoneInput" onChange={this.handlePhoneChange} placeholder="Reservee Phone"/>
                    <br/>
                    <input type="email" id="emailInput" onChange={this.handleEmailChange} placeholder="Reservee Email"/>
                    <br/>
                    <br/>
                    { passengerFields}
                    <button type="submit" onClick={this.sendReservation} id="submitButton">Submit</button>
                </form>
                <p>{JSON.stringify(this.state)}</p>
            </div>

        )
        //}

    }
}
export default ReservationPage;