import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
import hazel from './imgs/hazel.jpg'
import whiskey from './imgs/whiskey.jpg'
import tubby from './imgs/tubby.jpg'
import Navbar from './Navbar/Navbar'
import DogRoute from './Component/DogRoute'

export default class App extends Component {

  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Navbar dogs={this.props.dogs}/>
        <div className="container">
          <DogRoute dogs={this.props.dogs} />
        </div>
      </div>
    );
  }
}
