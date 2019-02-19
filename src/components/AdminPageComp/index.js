import React, {Component} from 'react'; 

import CalendarComponent from '../calendarComp/calendar'




class AdminPage extends Component{
    constructor(){
        super()
            this.state = {clients: [], date: 'start' }
    }

    componentDidMount(){
        this.showClients()
    }

    showClients = () => {
        let clientsRegs = [];
        if(localStorage.getItem('clients') != undefined){
            clientsRegs = JSON.parse(localStorage.getItem('clients'));
        };
        
        this.setState({clients: clientsRegs})
    }

    searchDay = (date) => {
        this.setState({date: date})      
    }

    delClient = (a) => {
 
        let myArray = JSON.parse(localStorage.getItem('clients'));
        
        myArray.forEach((element, i) => {
            if(element.mainTime.includes(a) && element.monthDay.includes(this.state.date)){
                myArray.splice(i, 1)

                let editMyArray = JSON.stringify(myArray)
                localStorage.setItem('clients', editMyArray)

                this.setState({clients: myArray})
            }
        })
        
    }

    render(){
        let clients = []
        let day = this.state.date;
        if(day == ''){
            day = 'start'
        }
        
         clients =[].concat( this.state.clients).sort( (a, b) =>
         { return  a.mainTime > b.mainTime })
        .map(( client, n ) => {
      
            if(client.monthDay.includes(day)){ 
                return (   
                    <li key={n} className="clients-list">
                       <span>{client.monthDay }</span> 
                       <span>{client.mainTime }</span>
                       <span>{client.clientName}</span> 
                       <span className="last-span"><p onClick={() => this.delClient(client.mainTime)}>&#10006;Del</p></span>
                    </li>
                    )
                }
        })
    
        return(
            <div className="bg">
                <div className="main-container">
                    <h1 className="title ">Administracijos puslapis</h1>
                </div>
                <section className="calendar">
                <CalendarComponent />
            </section>       
            <section className="main-container reservation-filter"> 
                <h1>Dienos rezervacjos:</h1>
                 <input  ref="date" type="date"/>
                 <button type="button" onClick={() => this.searchDay(this.refs.date.value)}>Search</button>
                 <ul>
                     <div className="reservation-list">
                        <span>Apsilankymo diena</span>
                        <span>Apsilankymo laikas</span>
                        <span>Kliento vardas</span>
                        <span>Trinti rezervacija</span>
                     </div>
                    {clients}

                 </ul>
            </section>
        </div>
    )
    }
}


export default AdminPage;