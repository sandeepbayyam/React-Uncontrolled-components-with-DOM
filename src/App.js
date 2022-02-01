import React from "react";
import "./style.css";

class App extends React.Component{
  shwoText=()=>{
    var name = document.getElementById('d1').value;
    document.getElementById('d2').innerHTML = name;
  }
  render(){
    return(
      <div>
        <h2>Uncontrolled Component with DOM</h2>
        <label> NAME : </label>
        <input type='text' id='d1'/>
        <button onClick={this.shwoText}>Show</button>
        <h3 id='d2'></h3>
      </div>
    )
  }
}

export default  App;
 
