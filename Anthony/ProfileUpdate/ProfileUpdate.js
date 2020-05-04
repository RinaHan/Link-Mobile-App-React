// const Sliders = ({ text1, text2 }) =>
//     <div><div class="slider_bubble">
//         <div class="title_box">
//             <p class="title1">{text1}</p>
//             <p class="bubble">
//                 <span id="result">0</span><br />
//                 <span id="units">km</span></p>
//         </div>
<input type="range" id="slider" name="slider" min="0" max="150" step="1" onChange={showValue} />
{/* </div>
<div class="slider_bubble">
    <div class="title_box">
        <p class="title2">{text2}</p>
        <p class="bubble">
            <span id="result">18-34</span><br />
</p>
    </div> */}
    <input type="range" id="slider" name="slider" min="0" max="150" step="1" onChange={showValue} />
{/* </div>
</div> */}


function showValue() {
var input = document.getElementById("slider");
var output = document.getElementById("result");
output.innerHTML = input.value;

input.oninput = function () {
    output.innerHTML = this.value;


    // Show + after value when value = 10
    if (this.value == 10) {
        output.innerHTML = this.value + "+";
    }
}
}



