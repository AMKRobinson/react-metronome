import React, { Component } from 'react'
import moan1 from './audio/moan1.wav';
import moan2 from './audio/moan2.wav';
import bark1 from './audio/bark1.wav';
import bark2 from './audio/bark2.wav';

class AudioOption {
    constructor(name, file) {
        this.name = name;
        this.audioObject = new Audio(file);
    }
}

export class AudioSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {

            selectedPrimary: new AudioOption('moan1', moan1),
            selectedSecondary: new AudioOption('moan2', moan2),

            audio: [
                new AudioOption('moan1', moan1),
                new AudioOption('moan2', moan2),
                new AudioOption('bark1', bark1),
                new AudioOption('bark2', bark2)
            ]
        };

        this.getClicks();
    }

    getClicks = () => {
        this.props.getClicks(this.state.selectedPrimary, this.state.selectedSecondary);
    }

    handleSelectPrimary = (e) => {
        console.log(e.target.value);
        const targetItem = this.state.audio.find((audio, i) => {
            return audio.name === e.target.value
        });
        this.setState({
            selectedPrimary: targetItem
        }, this.getClicks);
    }

    handleSelectSecondary = (e) => {
        console.log(e.target.value);
        const targetItem = this.state.audio.find((audio, i) => {
            return audio.name === e.target.value
        });
        this.setState({
            selectedSecondary: targetItem
        }, this.getClicks);
    }



    render() {
        return (
            <div>
                <select onChange={this.handleSelectPrimary}>
                    {this.state.audio.map((audio, i) => {
                        return <option key={i} value={audio.name}>{audio.name}</option>
                    })}
                </select>
                <select onChange={this.handleSelectSecondary}>
                    {this.state.audio.map((audio, i) => {
                        return <option key={i} value={audio.name}>{audio.name}</option>
                    })}
                </select>           
            </div>
        )
    }
}

export default AudioSelect
