import React, { Component } from "react";

/* Create a `Login` component that has two text inputs, 
one for a `username` and one for a `password`, and a button to login the user. 
When the login button is clicked, an alert should be showed to the user 
that displays what the user typed in for the `username` and `password`.
*/



class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: 'd',
      password: ''
    }
  }

  displayLogin = () => {
    console.log(this.state.username)
    return (
      
      alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`)
    )
  }

  setUsername = input => {
    this.setState({username: input})
  }
  
  setPassword = input => {
    this.setState({password: input})
  }


  
  render() {
    return(
      <div id="div-input">
        <label htmlFor="input-username">Username</label>
        <input type="text" className="login" id="input-username" onChange={(e) => this.setUsername(e.target.value)}/>
        <label htmlFor="input-password">Password</label>
        <input type="text" className="login" id="input-password" onChange={(e) => this.setPassword(e.target.value)}/>
        <button id="button-login" onClick={() => this.displayLogin()}>Login</button>
      </div>
    )
  }
}





export default Login