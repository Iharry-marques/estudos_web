const turnOnOff = document.getElementById("turn-on-off");
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

function lampOnOff () {
    if (turnOnOff.textContent =='Ligar') {
        lampOn ();
        turnOnOff.textContent = 'Desligar'
    } else{
        lampOff ();
        turnOnOff.textContent = 'Ligar'
    }
}




turnOnOff.addEventListener ('click', lampOnOff)
lamp.addEventListener('dblclick', broken)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)

