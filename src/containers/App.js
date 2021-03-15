import React, { Component } from "react";
import Nav from "../components/Nav";
import PostContainer from "./PostContainer";


export default class App extends Component {

  render() {
   
      return (
      <>
       
        <Nav/>
       
        
          
        
          <PostContainer/>
        {/* <div className="content">
        </div> */}
      </>
    );
  }
}


