import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
          error: null,
          isLoaded: false,
          items: [],
          flag:0
        };
  }

MyPOSTAPI=()=>{
  var User_ID = document.getElementById("UserID").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  
  
  //Store into dictionay
  var dict = {User_ID: User_ID , name: 'name', email: 'email'};

  axios.post('https://jsonplaceholder.typicode.com/posts',dict)
  .then(response => {
    console.log(response)
    this.setState({isLoaded:true,
                    flag:1
                  })
  })
  .catch(error => {
    alert(error);
    console.log(error);
  })

}

  render() {

    const { error, isLoaded, items } = this.state;

    if (this.state.flag == 0){

      return(
      <div>
        <label> User_ID: </label>
        <input type="number" min="1" id="UserID" />
        <br/>

        <label> Name: </label>
        <input type="text" id="name" />
        <br/>

        <label> Email: </label>
        <input type="email" id="email" />
        <br/>

        <div>
      <button onClick={this.MyPOSTAPI}>
      Register
      </button>
      </div>

      </div>

      );

    }else{

      return(

      <div>

        <label> User_ID: </label>
        <input type="number" min="1" id="UserID" />
        <br/>

        <label> Name: </label>
        <input type="text" id="name" />
        <br/>

        <label> Email: </label>
        <input type="email" id="email" />
        <br/>

        <div>
      <button onClick={this.MyPOSTAPI}>
      Register
      </button>

      <h1> Anees Post Request Submitted Successfully</h1>
      </div>

      </div>

      );
    }

  }

  componentDidMount() {

    }
}

export default App;