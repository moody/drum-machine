import React, { Component } from 'react';
import DrumPad from '../DrumPad/DrumPad';
import q_sample from '../../samples/q_sample.mp3';
import w_sample from '../../samples/w_sample.mp3';
import e_sample from '../../samples/e_sample.mp3';
import a_sample from '../../samples/a_sample.mp3';
import s_sample from '../../samples/s_sample.mp3';
import d_sample from '../../samples/d_sample.mp3';
import z_sample from '../../samples/z_sample.mp3';
import x_sample from '../../samples/x_sample.mp3';
import c_sample from '../../samples/c_sample.mp3';
import './DrumMachine.css';

const DRUM_PADS = [
  [ // Row 1
    { key: "Q", desc: "Synth I", sample: q_sample },
    { key: "W", desc: "Synth II", sample: w_sample },
    { key: "E", desc: "Synth III", sample: e_sample }
  ],
  [ // Row 2
    { key: "A", desc: "Crash", sample: a_sample },
    { key: "S", desc: "Snare", sample: s_sample },
    { key: "D", desc: "Hi-hat", sample: d_sample }
  ],
  [ // Row 3
    { key: "Z", desc: "Clap", sample: z_sample },
    { key: "X", desc: "Kick", sample: x_sample },
    { key: "C", desc: "Click", sample: c_sample }
  ]
]

class DrumMachine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayText: '-----',
      volume: 50
    }

    this.playSound = this.playSound.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

  getDrumPadRows() {
    const drumPadRows = [];
    for (let i = 0; i < DRUM_PADS.length; i++) {
      let row = [];
      let rowArr = DRUM_PADS[i];
      for (let j = 0; j < rowArr.length; j++) {
        let obj = rowArr[j];
        row.push(<DrumPad data={obj} playSound={this.playSound} />);
      }
      drumPadRows.push(<div className="drum-pad-row">{row}</div>);
    }
    return drumPadRows;
  }

  playSound(text, audio) {
    this.setState({ displayText: (text || 'ERROR') });
    audio.volume = this.state.volume / 100;
    audio.currentTime = 0;
    audio.play();
  }

  handleVolumeChange(event) {
    this.setState({ volume: event.target.value });
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="drum-machine-controls">
          <div id="display">{this.state.displayText}</div>
          <input id="volume" type="range" min="0" max="100" step="1" value={this.state.volume} onChange={this.handleVolumeChange}/>
        </div>

        <div className="drum-pad-container">
          {this.getDrumPadRows()}
        </div>
      </div>
    );
  }
}

export default DrumMachine;
