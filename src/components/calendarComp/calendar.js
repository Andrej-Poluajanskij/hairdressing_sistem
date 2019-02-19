import React, { Component } from 'react';
import Calendar from 'react-calendar'


export default class CalendarComponent  extends Component{
    constructor(){
        super()
            this.state = { date: new Date(), chooseHour: '',
            client: {monthDay: '' , mainTime: '', clientName: '', } }
                                                   
    }
    onChange = date => this.setState({date})

    onClickDay1 = (day) => {

        let editDate = day
        let dateString = new Date(editDate.getTime() -
             (editDate.getTimezoneOffset() * 60000 ))
            .toISOString().split("T")[0];
        
        this.setState({client: {...this.state.client,
                monthDay: dateString
                }
            })
        console.log(this.state.client.monthDay);
    }

    chooseHour = (hour) => {
        this.setState({
            chooseHour: hour
        })
    }
    mainTime = (min) => {
        this.setState({client: {...this.state.client,
            mainTime: this.state.chooseHour + ':' + min
            }
        })
        console.log(this.state.client.mainTime );
        
    }
    handleClientName = (e) =>{
        this.setState({client: {...this.state.client,
            clientName: e.target.value
            }
        })
    }
    saveClient = (e) =>{
        e.preventDefault();
        let clientsRegs = [];
        if(localStorage.getItem('clients') != undefined){
            clientsRegs = JSON.parse(localStorage.getItem('clients'));
        };
        
        clientsRegs.push(this.state.client);
        console.log(this.state.client);

        let myObject = JSON.stringify(clientsRegs)
        localStorage.setItem('clients', myObject )
        
    }
 
render(){
    return(
        <div className="main-container container-flex">
            <div className="choose-day">
                <h3>Pasirinkti diena</h3>
                <Calendar onClickDay={(day) => this.onClickDay1(day)}
                onChange={() => this.onChange} value={this.state.date}/>   
             </div>
             <div className="choose-time">
                <h3>Pasirinkti Laika</h3>
                <div className="time-container">
                    <div className="houres">
                        <button className="time" onClick={() => this.chooseHour(10)}>10:00</button>
                        <button className="time" onClick={() => this.chooseHour(11)}>11:00</button>
                        <button className="time" onClick={() => this.chooseHour(12)}>12:00</button>
                        <button className="time" onClick={() => this.chooseHour(13)}>13:00</button>
                        <button className="time" onClick={() => this.chooseHour(14)}>14:00</button>
                        <button className="time" onClick={() => this.chooseHour(15)}>15:00</button>
                        <button className="time" onClick={() => this.chooseHour(16)}>16:00</button>
                        <button className="time" onClick={() => this.chooseHour(17)}>17:00</button>
                        <button className="time" onClick={() => this.chooseHour(18)}>18:00</button>
                        <button className="time" onClick={() => this.chooseHour(19)}>19:00</button>
                    </div>    
                    <div className="minutes">
                        <button onClick={() => this.mainTime('00')}>{this.state.chooseHour}:00</button>
                        <button onClick={() => this.mainTime('15')}>{this.state.chooseHour}:15</button>
                        <button onClick={() => this.mainTime('30')}>{this.state.chooseHour}:30</button>
                        <button onClick={() => this.mainTime('45')}>{this.state.chooseHour}:45</button>
                    </div>
                </div>
             </div>
             <div className="confirm">
                 <h3>Patvirtinti rezervacija</h3>
                 <div className="confirm-container">
                    <form onSubmit={(e) => this.saveClient(e)}>
                        <label htmlFor="date"> Data: <br/>
                            <input type="text" name="date"  value={this.state.client.monthDay} />
                        </label><br/>

                        <label htmlFor="time" > Laikas: <br/>
                            <input type="text" name="time" value={this.state.client.mainTime}/>
                        </label><br/>

                        <label>Kliento vardas: <br/>
                            <input type="text" name="clientName" required="required" placeholder="Jusu vardas:"
                             value={this.state.clientName} onChange={this.handleClientName}/>
                        </label><br/>

                        <button type="submit">Rezervuoti</button>
                    </form>
                 </div>
             </div>
        </div>
     
    )
}

}