import React, { Component } from "react";
import ColorBox from "./ColorBox";
import ColorNavbar from "./ColorNavbar";

import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 300 };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
    // console.log(level);
  }

  changeFormat (evt) {
    console.log(evt);
    alert("test");
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color.hex} name={color.name} key={color.name} />
    ));

    return (
      <div className="Palette">
        {/* Navbar goes here */}
        {/* bunch of color boxes */}
        <ColorNavbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
