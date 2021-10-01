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
