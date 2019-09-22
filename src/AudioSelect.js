import React, { Component } from 'react'
import moan1 from './audio/moan1.wav';
import moan2 from './audio/moan2.wav';
import bark1 from './audio/bark1.wav';
import bark2 from './audio/bark2.wav';
import deepmoan1 from './audio/deepmoan1.wav';
import deepmoan2 from './audio/deepmoan2.wav';
import fart1 from './audio/fart1.wav';
import fart2 from './audio/fart2.wav';

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
                new AudioOption('bark2', bark2),
                new AudioOption('deepmoan1', deepmoan1),
                new AudioOption('deepmoan2', deepmoan2),
                new AudioOption('fart1', fart1),
                new AudioOption('fart2', fart2)
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
        const selectedPrimary = this.state.selectedPrimary.name;
        const selectedSecondary = this.state.selectedSecondary.name;
        return (
            <div>
                <div>
                    <p>Primary</p>
                <select value={selectedPrimary} onChange={this.handleSelectPrimary}>
                    {this.state.audio.map((audio, i) => {
                        return <option key={i} value={audio.name}>{audio.name}</option>
                    })}
                </select>
                </div>
                <div>
                    <p>Secondary</p>
                <select value={selectedSecondary} onChange={this.handleSelectSecondary}>
                    {this.state.audio.map((audio, i) => {
                        return <option key={i} value={audio.name}>{audio.name}</option>
                    })}
                </select>
                </div>

            </div>
        )
    }
}

export default AudioSelect
