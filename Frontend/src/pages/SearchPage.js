import React, {Component} from 'react'
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

class SearchPage extends Component {

    render() {
        return (



            <div>
                <form>
                    <InfiniteCalendar
                        width={200}
                        height={300}
                        min={new Date()}
                        max= {new Date(2020, 11, 31)}
                    />

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }

}
export default SearchPage;