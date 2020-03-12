import React from "react";


class GitHubUser extends React.Component {


    render() {

    return(
 
        <div>
    <img src={this.props.data.avatar_url} alt="github photo"/>
<h1> UserName: 
  {this.props.data.login  }
</h1>
<p>
 id :
{this.props.data.id} 

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