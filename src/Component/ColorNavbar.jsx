import React, { Component } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./ColorNavbar.css";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


class ColorNavbar extends Component {

  constructor(props) {
    super(props);
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onSelectChange(event) {
    this.props.handleChange(event);
  };

  render() {
    let {level, changeLevel} = this.props;
    return (
      <div>
        <header className="Navbar">
          <div className="logo">
            <a href="#">color picker</a>
          </div>
          <div className="slider-container">
            <span>Level: {level}</span>
            <div className="slider">
              <Slider
                defaultValue={level}
                min={100}
                max={500}
                step={100}
                onAfterChange={changeLevel}
                trackStyle={[{ backgroundColor: "transparent" }]}
                handleStyle={[
                  {
                    backgroundColor: "green",
                    outline: "none",
                    border: "2px solid green",
                    boxShadow: "none",
                    width: "13px",
                    height: "13px",
                    marginLeft: "-7px",
                    marginTop: "-3px",
                  },
                ]}
                railStyle={{height: "8"}}
              />
            </div>
          </div>
          <div className="select-container">
            <Select
              onChange={this.onSelectChange}
              value="hex"
            >
              <MenuItem value='hex'>
                HEX
              </MenuItem>
              <MenuItem value='max'>
                MAX
              </MenuItem>
            </Select>
          </div>
        </header>
      </div>
    );
  }
}

export default ColorNavbar;
