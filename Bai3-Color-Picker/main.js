const color = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const arrayColor = [
    ['#FFE031', '#F04579'],
    ['#00FFED', '#9D00C6'],
    ['#E5F230', '#54DB63'],
    ['#F237EF', '#FC5252'],
    ['#1EADF0', '#0AFB60'],
    ['#0100EC', '#FB36F4']
];

var button = document.getElementsByClassName("button");
var span = document.getElementsByTagName('span');
var colorHex = document.getElementById("colorHex");

//Create color
function createColor(array){
    let string = '#';
    for (let i = 0;i<6;i++){
        string += array[Math.floor(Math.random() * array.length)];
    }
    return string;
}

//Random
function randomColor() {
    document.body.style.backgroundImage = '';
    for (let j = 0; j < span.length; j++) {
        span[j].innerHTML = '';
    }
    colorHex.innerHTML = createColor(color);
    document.body.style.backgroundColor = colorHex.innerHTML;
}

//Background + gradient
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", clickButton);
    function clickButton() {
        colorHex.innerHTML = '';
        for (let j = 0; j < span.length; j++) {
            span[j].innerHTML = '';
        }
        span[i].innerHTML = arrayColor[button[i].value][0] + ' - ' + arrayColor[button[i].value][1];
        document.body.style.backgroundImage = 'linear-gradient(' + arrayColor[button[i].value][0] + ',' + arrayColor[button[i].value][1] + ')';
    }
};