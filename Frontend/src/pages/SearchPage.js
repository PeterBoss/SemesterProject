/**
 * Created by mahnaz on 04-05-2017.
 */
import React, {Component} from 'react'

class SearchPage extends Component{
   render(){
       return(
           <div>
               <form>


                   <select id ="from">
                       <option value ="SXF">Berlin</option>
                       <option value ="CPH">Copenhagen</option>
                       <option value ="STN">London</option>
                       <option value ="CDG">Paris</option>
                       <option value ="BCN">Barcelona</option>
                   </select>

                   <select id ="to">
                       <option value ="SXF">Berlin</option>
                       <option value ="CPH">Copenhagen</option>
                       <option value ="STN">London</option>
                       <option value ="CDG">Paris</option>
                       <option value ="BCN">Barcelona</option>
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
                   <input type="submit" value="Submit" onChange=""/>
               </form>
           </div>

       )
   }
}
export default SearchPage