import React from "react";

class Counter extends React.Component{

    constructor(render,props){
        super(props)
        this.state = {counter:0}
        console.log(render)
    }

    increment(){
        if(this.state.counter >= 5){
            this.setState({msg: "sorry > 5",IsDis:true})
            // document.getElementById('incrementButton').disabled = true;
            this.state.disabled = true;
        }else{
            this.setState({counter:this.state.counter+1,msg:'',IsDis:false})
            localStorage.setItem("Counter", this.state.counter)
        }
        // document.getElementById('incrementButton').disabled = false;
    }
    
    decrement(){ 
        if(this.state.counter <= 0){
            this.setState({msg: "sorry < 0",IsDis:true})
            this.state.disabled = true;
            // document.getElementById('decrementButton').disabled = true;
            
        }else{
            this.setState({counter:this.state.counter-1,msg:'',IsDis:false})
            localStorage.setItem("Counter", this.counter)
            // document.getElementById('decrementButton').disabled = false;
        }
    }

    componentDidMount(){
        console.log("Component Did Update")
    }

    componentDidUpdate(){
        console.log("Component Did Update")
    }

    render(){
        return (<>
        <h1>Counter</h1>
        Value is {this.state.counter}
        <br/>
        <input type="button" id="incrementButton" value="+" onClick={this .increment.bind(this)} disabled={this.state.IsDis}/>

        <input type="button" id="decrementButton" value="-" onClick={this .decrement.bind(this)} disabled={this.state.IsDis}/>

        <input type="button" value="X" onClick={()=>this.setState({counter:0})}/>

        <p style={{color:'red'}}>{this.state.msg}</p>

        </>)
    }
}
export default Counter