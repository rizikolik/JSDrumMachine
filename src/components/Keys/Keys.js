import React from "react";
import "./Keys.css";
 
class Keys extends React.Component{ 
    constructor(props){
        super(props);
        this.state={
            active:false
        }
        this.handlePlay=this.handlePlay.bind(this);
        this.keydownColorize=this.keydownColorize.bind(this);
    }

componentDidMount(){
    document.addEventListener("keydown",this.handlePlay);
    document.addEventListener("keyup",this.keydownColorize);
   
  }

keydownColorize(e){
  let source=document.getElementById(e.key);
    if(source){
        source.parentElement.classList.remove("active1")
    }
    }
   


handlePlay(e){
    
    let audio;
    if(e.key){
        let source=document.getElementById(e.key);
    
        if(source){
           document.getElementById("display").innerHTML=e.key;
           source.parentElement.classList.add("active1");
           audio= new Audio(source.src);
           audio.play();
        }
    }else {
        document.getElementById("display").innerHTML=e.target.firstChild.id;
        audio=new Audio(e.target.firstChild.src);
        audio.play();
        let active=document.querySelectorAll(".active2");
        
        for(let i=0;i<active.length;i++){
            
            active[i].classList.remove("active2");
        }
        e.target.classList.add("active2")
        console.log(e.target)
        
    }
     
}
    
render(){
        return(
            <div className="keys">
                
                <button onClick={this.handlePlay}    className="drum-pad"><audio className="clip" id="q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>    Q</button>
                <button onClick={this.handlePlay}    className="drum-pad"><audio className="clip" id="w" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>    W</button>
                <button onClick={this.handlePlay}    className="drum-pad"><audio className="clip" id="e" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>    E</button>
                <button onClick={this.handlePlay}    className="drum-pad"><audio className="clip" id="a" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>    A</button>
                <button onClick={this.handlePlay}    className="drum-pad"><audio className="clip" id="s" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>    S</button>
                <button onClick={this.handlePlay}    className="drum-pad"><audio className="clip" id="d" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>    D</button>
                <button onClick={this.handlePlay}    className="drum-pad"><audio className="clip" id="z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>    Z</button>
                <button onClick={this.handlePlay}    className="drum-pad"><audio className="clip" id="x" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>    X</button>
                <button onClick={this.handlePlay}    className="drum-pad"><audio className="clip" id="c" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>    C</button>
            </div>
        )
    }

}
export default Keys;
