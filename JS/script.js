const buttonLamp = document.getElementById('buttonLamp');
const lamp = document.getElementById('lamp');

    


function lampOn (){
    if(!isLampBroken() ) {
       
       lamp.src ='./img/ligada.jpg';
    }
}
function lampOff (){
    if(!isLampBroken()){
        lamp.src ='./img/desligada.jpg'

    }
}
function light_breaking () {
    
    lamp.src='./img/quebrada.jpg'
    buttonLamp.textContent ='Já era hahaha';
}

function lampOnOff(){
    if(buttonLamp.textContent == 'Ligar'){
        lampOn();
        buttonLamp.textContent ='Desligar';
    }else{
        lampOff();
        buttonLamp.textContent = 'Ligar';
    }
}
function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1
    
}

buttonLamp.addEventListener('click',lampOnOff);

lamp.addEventListener('dblclick',light_breaking);
lamp.addEventListener('mouseover',lampOn);
lamp.addEventListener('mouseleave',lampOff);
