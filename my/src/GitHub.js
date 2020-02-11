import React from "react";
import axios from "axios";


const gitHubUser = axios
  .get("https://api.github.com/users/Shamskol")

  .then (response => {
  console.log(response);
  const user = reponse.data;
      }) 
      .catch(error => {
          console.log(error)
      });


























class GitHub extends React.Component {

    constructor() {
        super();

    }
}


export default GitHub;