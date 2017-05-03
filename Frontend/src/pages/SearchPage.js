import React, {Component} from 'react'
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

class SearchPage extends Component {



    constructor() {
        super();
        this.state = {value: "1"};
    }


    change(event) {
        alert(event.target.value);
        this.setState({value: event.target.value});
    }

    render() {
        return (



            <div>
                <InfiniteCalendar
                    width={200}
                    height={300}
                />
                <form>
                    <select id="month" onChange={this.change} value={this.state.value}>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                    <select>
                        <option></option>
                    </select>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }

}
export default SearchPage;