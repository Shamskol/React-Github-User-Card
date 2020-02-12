import React from "react";
import axios from "axios";
import styled from 'styled-components'

class GitHubUser extends React.Component {

 
render(){
 {console.log(this.props.data)}
  return(
<StyledDiv>
<div>
<img src={this.props.data.avatar_url} alt="github photo"/>
<p> UserName: 
  {this.props.data.login  }
</p>
<p>
 id :
{this.props.data.id} 

</p>

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
</StyledDiv>

  )
}

  }


const StyledDiv  = styled.div`
img {
  display: block;
  margin: 0 auto;
}

p {
  text-align: center;
}

`;






export default GitHubUser;

 
 























