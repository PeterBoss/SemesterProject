/**
 * Created by mahnaz on 04-05-2017.
 */
import React, {Component} from 'react';
import { Link } from "react-router";
import fetchHelper from "../stores/fetchHelpers"
import {observable, action, computed} from "mobx";
import {observer} from "mobx-react";

                                const URL = require("../../package.json").serverURL;

@observer
class SearchPage extends Component {

    constructor() {
        super();


        this.setData = this.setData.bind(this);
        this.mySearch = this.mySearch.bind(this);

    }

    @action
    mySearch(e) {
        e.preventDefault();
        var from = document.getElementById("from").value;
        var to = document.getElementById("to").value;
        var date = new Date(document.getElementById("date").value);
        var seat = document.getElementById("seat").value;
        var dateString = JSON.stringify(date);

        var newUrl = URL + 'api/flights/' + from + '/' + JSON.parse(dateString) + '/' + seat;
        console.log("newUrl: " + newUrl);

        fetch(newUrl, fetchHelper.makeOptions("GET", false))

            .then((res) => {
                return res.json();
            })
            .then((res) => {
                this.setData(res);
                console.log(res);
            })
    }

    @observable _flights = [];

    @computed
    get flights() {
        return this._flights;
    }

    @action
    setData(res) {

        this._flights.replace(res)
    }



    render() {
        var flightInfo = this.flights;
        var lines = flightInfo.map((airline) => {
            return airline.flights.map((flight, index) => <tr key={index}>
                <td>{flight.flightID}</td>
                <td>{flight.numberOfSeats}</td>
                <td>{flight.date}</td>
                <td>{flight.totalPrice}</td>
                <td>
                    <Link to={"reservation/"+flight.flightID+"/"+flight.numberOfSeats} id={flight.flightID}>Reserve</Link>
                </td>
            </tr>);
        });
        return (
            <div>
                <h1>Find billige rejser på tværs af tusindvis af flyselskaber og rejsesider</h1>
                <form>

                    <select id="from">
                        <option value="" disabled>Select origin</option>
                        <option value="SXF">Berlin</option>
                        <option value="CPH">Copenhagen</option>
                        <option value="STN">London</option>
                        <option value="CDG">Paris</option>
                        <option value="BCN">Barcelona</option>
                    </select>

                    <select id="to">
                        <option value="" disabled>Select destination</option>
                        <option value="SXF">Berlin</option>
                        <option value="CPH">Copenhagen</option>
                        <option value="STN">London</option>
                        <option value="CDG">Paris</option>
                        <option value="BCN">Barcelona</option>
                    </select>

                    <input id="date" type="date"/>

                    <select id="seat">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <input type="submit" value="Search" onClick={this.mySearch}/>
                </form>

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>flightID</th>
                        <th>numberOfSeats</th>
                        <th>date</th>
                        <th>totalPrice</th>

                    </tr>
                    </thead>
                    <tbody id="userTable">
                    {lines}

                    </tbody>
                </table>

            </div>

        )
    }
}
export default SearchPage;