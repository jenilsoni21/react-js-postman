import React from "react";
function HookDemo(){
    const [counter, setCounter] = React.useState(0);
    const [color, setColor] = React.useState("Red");
    const [name, setName] = React.useState("Chandler Bing");
    return(<>
        <h1>Exaple of Counter</h1>
        counter {counter}
        <input type="button" value="+" onClick={()=>setCounter(100)}/>
        <hr/>
        Color is {color}
        <input type="button" value="Update" onClick={()=>setColor("Blue")}/>
        <hr/>
        Name: <input type="text" onChange={(e)=>setName(e.target.value)}/><br/>
        Name is {name}
    </>)
}

export default HookDemo