import React from "react";
import axios from "axios";


class GitHubUser extends React.Component {

 
render(){
 {console.log(this.props.data)}
  return(
<div>
<p> UserName: 
  {this.props.data.login  }
</p>
<p>
 id :
{this.props.data.id} 

</p>
<img src={this.props.data.avatar_url} alt="github photo"/>
<p>
 email: {this.props.data.email} 
</p>
<p>
 Following: {this.props.data.following} 
</p>
<p>
 Followers: {this.props.data.followers} 
</p>
</div>


  )
}

  }




export default GitHubUser;

 
 























