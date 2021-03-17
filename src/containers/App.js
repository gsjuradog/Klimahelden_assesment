import React, { Component } from "react";
import Nav from "../components/Nav";
import PageChanger from "../components/PageChanger";
import PostContainer from "./PostContainer";


export default class App extends Component {

  render() {
   
      return (
      <>
        <Nav/>
        <div className='content'>
          <PostContainer/>
          <PageChanger/>
        </div>
      </>
    );
  }
}


