import React, { Component } from "react";
import Counter from "../components/Counter";
import Nav from "../components/Nav";
import PostContainer from "./PostContainer";


export default class App extends Component {

  render() {
   
      return (
      <>
        <Nav/>
        <div className='content'>
          
          <PostContainer/>
          <Counter/>
          {/* <div className="content">
          </div> */}
        </div>
      </>
    );
  }
}


