import React from 'react';
import './sliders.css';

const Sliders = () => <div className="slider_bubble"> 
    <div className="title_box">
        <p className="title">Maximum Distance</p>
            <p className="bubble"><span id="result">0</span><br/><span id="units">km</span></p>
    </div>
    <input type="range" id="slider" name="slider" min="0" max="150" step="1" onChange={showValue}/>

</div>

function showValue() {
    var input = document.getElementById("slider");
    var output = document.getElementById("result");
    output.innerHTML = input.value;

    input.oninput = function() {
        output.innerHTML = this.value;
        

    // Show + after value when value = 10
        if(this.value == 10){
            output.innerHTML = this.value + "+";
        }
    }
}

export default Sliders;