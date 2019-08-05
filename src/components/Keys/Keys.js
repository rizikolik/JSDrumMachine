import React from "react";
import "./Keys.css";
 
class Keys extends React.Component{ 
    constructor(props){
        super(props);
        this.handlePlay=this.handlePlay.bind(this)
    }

componentDidMount(){
    document.addEventListener("keydown",this.handlePlay)
}
handlePlay(e){
    let audio;
    let source=document.getElementById(e.key);
    if(source){
        audio= new Audio(source.src);
        audio.play()
    }
  



}
    





    render(){
        return(
            <div className="keys">
                
                <button onClick={this.handlePlay}   className="drum-pad"><audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>    Q</button>
                <button onClick={this.handlePlay}   className="drum-pad"><audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>    W</button>
                <button onClick={this.handlePlay}   className="drum-pad"><audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>    E</button>
                <button onClick={this.handlePlay}   className="drum-pad"><audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>    A</button>
                <button onClick={this.handlePlay}   className="drum-pad"><audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>    S</button>
                <button onClick={this.handlePlay}   className="drum-pad"><audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>    D</button>
                <button onClick={this.handlePlay}   className="drum-pad"><audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>    Z</button>
                <button onClick={this.handlePlay}   className="drum-pad"><audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>    X</button>
                <button onClick={this.handlePlay}   className="drum-pad"><audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>    C</button>
            </div>
        )
    }

}
export default Keys;
