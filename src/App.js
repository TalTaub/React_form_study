import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      firstName: "",
      lastName:"",
      age:"",
      gender:"",
      destination:"",
      color:"black",
      elergics:{
        astma:false,
        dead:false,
        heartIssues:false,
        otherStuff:false
      }

    }
    this.handleChange=this.handleChange.bind(this)
  }
  
  handleChange(event){
    const {name, value, type, checked} = event.target; 
    let boby=this.state.elergics
    if (type === "checkbox") {
      boby[name]=checked
      this.setState({boby}) 
     }
    else {
    this.setState({
      [name]:value
    })
      }
  }
 
  render(){
    return (
      <div className='container'> 
        <form onSubmit={this.onSubmit} className="mainDiv">
          <input type="text" 
          name="firstName"
          value={this.state.firstName}
          placeholder="please enter your name"
          onChange={this.handleChange}
          ></input><br/> 

          <input 
            type="text" 
            name="lastName"
            value={this.state.lastName}
            placeholder="please enter your last name"
            onChange={this.handleChange}
          ></input><br/> 
          <input 
            type="number" 
            name="age" 
            placeholder="please enter your age"
            value={this.state.age}
            onChange={this.handleChange}
          ></input> <br/>

          <label for="male">
          <input type="radio" name="gender" value="male" checked={this.state.gender==="male"} onChange={this.handleChange}
          ></input>
          male</label>
          <label for="female">
          <input type="radio" name="gender" value="female" checked={this.state.gender==="female"} onChange={this.handleChange}
          ></input>
          female</label><br/> <br/>
         

          <select name="destination" value={this.state.destination} onChange={this.handleChange}>
          <option name="destination" value="">Select destination</option>
          <option name="destination" value="Italy">Italy</option>
          <option name="destination" value="Usa">Usa</option>
          <option name="destination" value="Japan">Japan</option>
          <option name="destination" value="Israel">Israel</option>
          </select>

          <br/>
          <br/>

          <label> astma?
          <input 
            type="checkbox" 
            name="astma"
            value={this.state.elergics.astma}
            checked={this.state.elergics.astma}
            onChange={this.handleChange}
          ></input>
          </label><br/>
          
          <label> dead?
          <input 
            type="checkbox" 
            name="dead"
            value={this.state.elergics.dead} 
            checked={this.state.elergics.dead}
            onChange={this.handleChange}
          ></input>
          </label><br/>

          <label> heartIssues?
          <input 
            type="checkbox" 
            name="heartIssues"
            value={this.state.elergics.heartIssues}
            checked={this.state.elergics.heartIssues}
            onChange={this.handleChange}
          ></input>
          </label><br/>

          <label> otherStuff?
          <input 
            type="checkbox" 
            name="otherStuff" 
            value={this.state.elergics.otherStuff}
            checked={this.state.elergics.otherStuff}
            onChange={this.handleChange}
          ></input>
          </label>
          
          
    <label>what is your fevorite color?</label>
    <select value={this.state.color} onChange={this.handleChange} name="color">
    <option value="black">please select a color</option>
      <option value="red">red</option>
      <option value="green">green</option>
      <option value="yellow">yellow</option>
    </select>
    <br/> <br/>
          <button>submit</button>
          <br/>

    
        </form>

        <hr/>
      <h1>entered information:</h1>
      <p>entered full name: {this.state.firstName} {this.state.lastName}</p>
      <p>entered age: {this.state.age}</p>
      <p>your gender is: {this.state.gender}</p>
      <p>you are planing a trip to {this.state.destination}</p>
      <p style={{color:this.state.color}}>you like {this.state.color} ha?</p>
 
      </div>
    )
  }
}

export default App;
