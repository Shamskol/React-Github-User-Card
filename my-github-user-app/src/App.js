import React from 'react';
import axios from "axios";
import './App.css';
import GitHubUser from './components/GitHubUser';
import styled from "styled-components";
class App extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
  data: "",
  followers: []

  };
  }
  componentDidMount() {

    axios
      .get("https://api.github.com/users/Shamskol")

      .then(response => {
        this.setState({ data: response.data });
        console.log(this.state.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("https://api.github.com/users/Shamskol/followers")
    .then(res => {
        this.setState({ followers: res.data });
        console.log(this.state.followers);
      })
      .catch(err => {
        alert(err.response.data.message);
      });
  }

  render(){

  return (
  <StyledDiv>
    <div className="App">
      <GitHubUser data={this.state.data}/>
         
    <div>
    {this.state.followers.map(follower => {
      return ( 
        <div>
        <img src={follower.avatar_url} alt="github photo" />
        <h1>
          UserName:
          {follower.login}
        </h1>
        <p>id :{follower.id}</p>
        <p>Following: {follower.following}</p>
        <p>Followers: {follower.followers}</p>
        </div>
      );
    })}
    </div>
    </div>
    </StyledDiv>
  );
}
}
const StyledDiv  = styled.div`
.App {
  background: gray;
  margin: 0 300px;
}

img {
  display: block;
  margin: 0 auto;
}

p {
  text-align: center;
  color: white
}

`;




export default App;
