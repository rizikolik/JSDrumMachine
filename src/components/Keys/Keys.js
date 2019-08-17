import React from "react";
import "./Keys.css";
 
class Keys extends React.Component{ 
    constructor(props){
        super(props);
        this.state={
            active:false,
            play:""
        }
        this.handlePlay=this.handlePlay.bind(this);
        this.keydownColorize=this.keydownColorize.bind(this);
    }

componentDidMount(){
    document.addEventListener("keydown",this.handlePlay);
    document.addEventListener("keyup",this.keydownColorize);
   
  }

keydownColorize(e){
   
  let source=document.getElementById(e.key.toUpperCase());
    if(source){
        source.parentElement.classList.remove("active1")
        document.getElementById("display").innerHTML="JS";
    }
    }
   


handlePlay(e){
  
    if(e.key){
        let source=document.getElementById(e.key.toUpperCase());
    
        if(source){
            source.play();
           document.getElementById("display").innerHTML=e.key.toUpperCase();
           source.parentElement.classList.add("active1");
           
      
          

        }
    }else {
        document.getElementById("display").innerHTML=e.target.firstChild.id;
        let audio=e.target.firstChild;
        audio.play();
        let active=document.querySelectorAll(".active2");
        
        for(let i=0;i<active.length;i++){
            active[i].classList.remove("active2");
            
           
        }
      
        e.target.classList.add("active2")
        
    }
     
}
    
render(){
        return(
            <div className="keys">
                
                <div onClick={this.handlePlay} id="audio-q" className="drum-pad"><audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>Q</div>
                <div onClick={this.handlePlay} id="audio-w" className="drum-pad"><audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>W</div>
                <div onClick={this.handlePlay} id="audio-e" className="drum-pad"><audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>E</div>
                <div onClick={this.handlePlay} id="audio-a" className="drum-pad"><audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>A</div>
                <div onClick={this.handlePlay} id="audio-s" className="drum-pad"><audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>S</div>
                <div onClick={this.handlePlay} id="audio-d" className="drum-pad"><audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>D</div>
                <div onClick={this.handlePlay} id="audio-z" className="drum-pad"><audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>Z</div>
                <div onClick={this.handlePlay} id="audio-x" className="drum-pad"><audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>X</div>
                <div onClick={this.handlePlay} id="audio-c" className="drum-pad"><audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>C</div>
            </div>
        )
    }

}
export default Keys;
