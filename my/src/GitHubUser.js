import React from "react";
import axios from "axios";


class GitHubUser extends React.Component {

 constructor() {
        super();
this.state = {
    data: []
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

      // axios.get("https://api.github.com/users/Shamskol/followers")

      // .then(res => {
      //   this.setState({ followers: res.data })
      // })
      // .catch(err => {
      //   debugger
      // })

        
        
    }
render(){

  return(
<div>

  Hello
</div>


  )
}

  }




export default GitHubUser;

 
 























