/**
 * Created by mahnaz on 04-05-2017.
 */
import React, {Component} from 'react';
import fetchHelper from "../stores/fetchHelpers"

const URL = require("../../package.json").serverURL;


class SearchPage extends Component{

    mySearch(){
        var from = document.getElementById("from").value;
        var to = document.getElementById("to").value;
        var date = new Date(document.getElementById("date").value);
        var seat = document.getElementById("seat").value;
        var dateString = JSON.stringify(date);



     var newUrl = URL + 'api/flights/' + from + '/'+ JSON.parse(dateString) +'/'+ seat;
    console.log("newUrl: "+newUrl);



    fetch(newUrl, fetchHelper.makeOptions("GET", false))
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            //this.setData(res);
            console.log(res);
        })



}




  
   render(){
       return(
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
           </div>

       )
   }
}
export default SearchPage;