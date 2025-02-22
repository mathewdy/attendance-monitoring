function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    
    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;

    $('#clock').text(timeString);
}

setInterval(updateClock, 1000);

updateClock();