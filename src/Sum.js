import React from "react";
class sum extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const {txt1,txt2} = this.props
        var c = parseInt(txt1) + parseInt(txt2)
        return (<>
            <h1>Sum component</h1>
            A : {txt1}<br/>
        </>)
    }
}