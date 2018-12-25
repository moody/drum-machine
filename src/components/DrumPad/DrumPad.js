import React, { Component } from 'react';
import './DrumPad.css';

class DrumPad extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      playing: false
    }

    this.audioRef = React.createRef();
    this.trigger = this.trigger.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillMount() {
    document.addEventListener("keypress", this.handleKeyPress);
  }

  trigger() {
    let audio = this.audioRef.current;
    this.setState({ playing: true });
    audio.onended = () => this.setState({ playing: false });
    this.props.playSound(this.props.data.desc, audio);
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
    let classNames = ["drum-pad"];
    if (this.state.playing) classNames.push("playing");

    return (
      <div id={this.props.data.desc} className={classNames.join(" ")} onClick={this.trigger}>
        <audio id={this.props.data.key} className="clip" ref={this.audioRef} src={this.props.data.sample} />
        <p>{this.props.data.key}</p>
      </div>
    );
  }
}

export default DrumPad;
