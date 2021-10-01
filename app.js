function changeBg(obj) {
    obj.parentNode.style.transition= 'all 0.5s';
    obj.style.transition= 'all 0.2s';
    obj.parentNode.style.backgroundColor = 'rgba(255, 161, 0)';
    obj.style.color='white';
}

function changeBgAgain(obj) {
    obj.parentNode.style.backgroundColor = 'rgba(245, 158, 11)';
    obj.style.color='rgba(17, 24, 39)';
}

function changeBgButton2(obj){
    obj.style.transition= 'all 0.2s';
    obj.style.color='rgb(156, 163, 175)';
}

function changeBgButton2Again(obj){
    obj.style.transition= 'all 0.2s';
    obj.style.color='rgb(55, 65, 81)';
}