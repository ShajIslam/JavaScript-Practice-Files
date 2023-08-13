// add event using function

function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}

//add event using getElementById
const click = document.getElementById('make-red');
click.onclick = function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// add eventListener

const clickPink = document.getElementById('make-pink');
clickPink.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

