import React from "react";
import axios from "axios";
import GitHubUser from "./Components/GitHubUser";


class App extends React.Component {

 constructor(props) {
        super(props);
this.state = {
    data: [], 
    followers: [],
 
};

    }


componentDidMount() {
 axios.get("https://api.github.com/users/Shamskol")

  .then (response => {
 
  this.setState({data:response.data});
  console.log(this.state.data);
  console.log(response.data);
      }) 
      .catch(error => {
          console.log(error);

      });

      axios.get("https://api.github.com/users/Shamskol/followers")

      .then(res => {
        this.setState({ followers: res.data })
        console.log(this.state.followers)
      })
      .catch(err => {
      
        alert(err.response.data.message)
      })

        
        
    }
render(){

  return(
<div>

<GitHubUser

data = {this.state.data}



/>
<div>
  {this.state.followers.map( follower=>{
return (<div>
   <img src={follower.avatar_url} alt="github photo"/>
  <p> UserName: 
    {follower.login  }
  </p>
  <p>
   id :
  {follower.id} 
  
  </p>
 
  <p>
   email: {follower.email} 
  </p>
  <p>
   Following: {follower.following} 
  </p>
  <p>
   Followers: {follower.followers} 
  </p> 
  </div>)

  })}
  
</div>

</div>


  )
}

  }




export default App;

 
 





















