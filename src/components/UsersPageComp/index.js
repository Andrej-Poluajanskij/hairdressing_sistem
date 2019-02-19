import React, {Component} from 'react'; 

import CalendarComponent from '../calendarComp/calendar'

class UserPage extends Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div className="bg">
            <div className="main-container">
                <h1 className="title">User page</h1>
            </div>
                <section className="calendar">
                    <CalendarComponent />
                </section> 
            </div>
            
        )
    }

}

export default UserPage;