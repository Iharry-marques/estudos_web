const turnOn = document.getElementById("turn-on");
const turnOff = document.getElementById("turn-off");
const lamp = document.getElementById("lampada");


function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if (!isLampBroken ()){
    lamp.src = './img/ligada.jpg'
    }
}

function lampOff () {
    if (!isLampBroken ()){
    lamp.src = './img/desligada.jpg'
    }
}

function broken () {
    lamp.src = './img/quebrada.jpg'
}




turnOn.addEventListener ('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('dblclick', broken)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)

