import React from "react";
import "./Keys.css";
 
class Keys extends React.Component{ 
    constructor(props){
        super(props);
        this.handlePlay=this.handlePlay.bind(this);
        this.colorize=this.colorize.bind(this);
    }

componentDidMount(){
    document.addEventListener("keydown",this.handlePlay)
}
colorize(){
console.log("colorized")
}
handlePlay(e){
    let audio;
 if(e.key){
   
    let source=document.getElementById(e.key);
    source.parentElement.addEventListener("keydown",this.colorize)
    source.parentElement.addEventListener("keyup",this.colorize)
   
    if(source){
        audio= new Audio(source.src);
        audio.play()
    }


 }else {
    
    audio=new Audio(e.target.firstChild.src);
    audio.play()
 }
}
    
render(){
        return(
            <div className="keys">
                
                <button onClick={this.handlePlay}   className="drum-pad"><audio className="clip" id="q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>    Q</button>
                <button onClick={this.handlePlay}   className="drum-pad"><audio className="clip" id="w" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>    W</button>
                <button onClick={this.handlePlay}   className="drum-pad"><audio className="clip" id="e" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>    E</button>
                <button onClick={this.handlePlay}   className="drum-pad"><audio className="clip" id="a" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>    A</button>
                <button onClick={this.handlePlay}   className="drum-pad"><audio className="clip" id="s" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>    S</button>
                <button onClick={this.handlePlay}   className="drum-pad"><audio className="clip" id="d" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>    D</button>
                <button onClick={this.handlePlay}   className="drum-pad"><audio className="clip" id="z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>    Z</button>
                <button onClick={this.handlePlay}   className="drum-pad"><audio className="clip" id="x" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>    X</button>
                <button onClick={this.handlePlay}   className="drum-pad"><audio className="clip" id="c" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>    C</button>
            </div>
        )
    }

}
export default Keys;
