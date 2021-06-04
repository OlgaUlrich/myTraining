import React from "react"

import QuoteDatas from "./QuoteDatas"


class QuoteApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
            backgroundColor: '#E4E5C0',
            datas: QuoteDatas
            
        }

        this.OnClickHandler = this.OnClickHandler.bind(this)
    }

OnClickHandler(){
    this.setState({backgroundColor: "#" + Math.floor(Math.random()*16777215).toString(16)})
    document.getElementById("root").style.backgroundColor = this.state.backgroundColor
    document.getElementById("quotSighn").style.color=this.state.backgroundColor
    document.getElementById("twitterBt").style.backgroundColor=this.state.backgroundColor
    document.getElementById("tumblBt").style.backgroundColor=this.state.backgroundColor
    document.getElementById("QuotBt").style.backgroundColor=this.state.backgroundColor


    }





render(){
let randNum = Math.floor((Math.random() * this.state.datas.length) + 0)
let newArr = this.state.datas.slice(randNum, randNum+1)
// let arr = newArr.map(item => (<div key={item.id} style={{marginBottom:40}}> <div> {item.quote} </div>{item.autor}</div>))

    return(
<div classname="container">        
          
    <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-6 ListingWrapper">
          
            {newArr.map(item => (
            <div key={item.id} style={{marginBottom:40}}> 
            <div className="row">
                <div className="col-md-12"> <i id="quotSighn" className="fa fa-quote-right" style={{color: "dimgrey", fontSize:40}}></i> 
               <span id="quote">{item.quote}</span></div>
            </div>
            <div className="row">
                <div className="col-md-12 autor-wrapper">
                <span className="autor"> {item.autor}</span>  
                </div>
                </div>
            </div>))}



        <div className="row">
            <div className="col-md-4">
             <button id="twitterBt" className="btn socials" style={{backgroundColor: "dimgrey", color:"#ffffff"}}><i className="fa fa-twitter" style={{fontSize:30}}></i></button>

             <button id="tumblBt" className="btn socials" style={{backgroundColor: "dimgrey", color:"#ffffff"}}><i className="fa fa-tumblr" style={{fontSize:30}}></i></button>
             </div>
             <div className="col-md-8">
            <button id="QuotBt" className="btn generator" onClick={this.OnClickHandler} style={{backgroundColor: "dimgrey", color:"#ffffff"}}>New Quote</button>
            </div>
        </div>


            
            </div> 
                   
            
    </div>

            
 </div>

      


           

       

  


    )

}





}


export default QuoteApp