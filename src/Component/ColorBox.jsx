import React, { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
  constructor (props) {
    super(props);
    this.state = { copied: false };
    this.copyBackground = this.copyBackground.bind(this);
    this.onCopied = this.onCopied.bind(this);
  }

  copyBackground () {
    navigator.clipboard.writeText(this.props.background);
    this.onCopied();
  }

  onCopied() {
    this.setState({copied:true}, () => {
      setTimeout(() => {
        this.setState({copied: false});
      }, 1500);
    })
  }

  render() {
    const {name, background} = this.props;
    const {copied} = this.state;
    return (
      <div
          className="ColorBox" style={{background}}
          onClick={this.copyBackground}>
        <div className={`copy-overlay ${copied && "show"}`} style={{ background }} />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>copied!</h1>
          <p>{this.props.background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className='copy-button'> Copy </button>
        </div>
        <span className='see-more'>More..</span>
      </div>
    );
  }
}

export default ColorBox;