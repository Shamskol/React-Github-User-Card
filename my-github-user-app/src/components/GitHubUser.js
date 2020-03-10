import React from "react";


class GitHubUser extends React.Component {



    render() {

    return(
 
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



    



    )




    }
}



export default GitHubUser;