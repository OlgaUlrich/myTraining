import React from "react"

class Header extends React.Component{
    constructor(){
        super()
        this.state = {

        }
   }


   render(){

        return(
        <header className>
            <div className="row">
            <div className="col-lg-12">
                <h1>  <i className="fa fa-bomb"></i> MemeGenerator</h1>
            </div>
            </div>

        </header>

        )

   }





}

export default Header