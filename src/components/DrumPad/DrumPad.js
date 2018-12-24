import React, { Component } from 'react';
import './DrumPad.css';

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.trigger = this.trigger.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillMount() {
    document.addEventListener("keypress", this.handleKeyPress);
  }

  trigger() {
    this.props.playSound(this.props.data.desc, this.audioRef.current);
  }

  handleKeyPress(event) {
    switch(event.key) {
      case this.props.data.key.toLowerCase():
      case this.props.data.key.toUpperCase():
        this.trigger();
        break;
      default:
        break;
    }
  }
  
  render() {
    return (
      <div id={this.props.data.desc} className="drum-pad" onClick={this.trigger}>
        <audio id={this.props.data.key} className="clip" ref={this.audioRef} src={this.props.data.sample} />
        <p>{this.props.data.key}</p>
      </div>
    );
  }
}

export default DrumPad;
