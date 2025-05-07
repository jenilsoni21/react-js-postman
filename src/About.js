
function About(){
    var a = 10
    var b =20
    var x = a+b
    var msg = ""
    if(x==30){
        msg = "Value of x is >> "+x
    }else{
        msg = "value of x is not 30"
    }

    var color = {
        backgroundColor:'blue',
        color:'white'
    }
    return(<div style={(color)}>
        <h1>About Component</h1>
        Sum Of {a} and {b} is {a+b}
    </div>)
}
export default About