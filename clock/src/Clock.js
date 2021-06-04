import React from "react"


class Clock extends React.Component{
constructor(){
    super()
    this.state={
       time: new Date().toLocaleTimeString(),
        millis: new Date().getMilliseconds()
    }
}


    



componentDidMount(){
    
    this.intervalID = setInterval(() => this.updateClock(), 1000 - this.state.millis)
 
}


updateClock(){
    this.setState({
    time: new Date().toLocaleTimeString()
    });
    }


render(){

   return(
       <div className="clockWrapper">
           <h1>{this.state.time}</h1>
       </div>
   )
    
}




}

export default Clock 