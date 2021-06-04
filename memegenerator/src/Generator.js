import React from "react"

class Generator extends React.Component{
    constructor(){
        super()
        this.state = {
            collection: [],
            topText: "",
            bottomText: "",
            url: "https://i.imgflip.com/1bij.jpg",
            altText:"",
            isLoading: false,
            length: ''
        }
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)

    }

    onChangeHandler(event){
       
        this.setState({
            [event.target.name]: event.target.value
        })



    }



    onSubmitHandler(event){
    event.preventDefault()
   let randNum = Math.floor((Math.random()*this.state.collection.length-1)+1)
   let ranImg = this.state.collection[randNum]
        if(ranImg.name === "" || ranImg.name === undefined){
            this.setState({ altText: "altImg"})
            let urlImg = ranImg.url
            this.setState({
                url: urlImg,
            })
        } else {

            let altImg = ranImg.name
            let urlImg = ranImg.url

          this.setState({
            url: urlImg,
            altText: altImg
        })


        }
    
    }



 
componentDidMount(){
    this.setState({isLoading: true})
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response => {
        const {memes} = response.data
         this.setState({collection: memes,
                        isLoading: false})
    })

} 


    render(){
     
        return(

            this.state.isLoading === true ? <div className="preloader">download</div> :             
            <div className="row generatorWrapper">
          
            <div className="col-lg-3">
            <form onSubmit = {this.onSubmitHandler}>
                    <div className="row form-group">

                        <div className="col">
                       <label>Input top text <input type="text" id="tT" name="topText" value={this.state.topText} onChange={this.onChangeHandler}/> </label>
                       </div>
                        <div className="col">
                        <label>Input bottom text <input type="text" id="bT" name="bottomText" value={this.state.bottomText} onChange={this.onChangeHandler}/></label>
                        </div>
                        <div className="col">
                        <button id="gB" className="btn btn-secondary">Generate</button>
                        </div>

                        
                    </div>
             </form>

            </div>

            <div className="col-lg-9 d-flex justify-content-center imgWrapper">
            <div className="box">          
                    <div className="topText">{this.state.topText}</div>
                    <img src={this.state.url} alt={this.state.altText}/>
                    <div className="bottomText">{this.state.bottomText}</div>
            </div>
            </div>

            </div>
        )
    }


}


export default Generator