window.onload = function(){
    var startTime = document.getElementById('startTime');
    var endTime = document.getElementById('endTime');
    var term = document.getElementById('term');
}

function calc_term(){
    var start = new Date(startTime.value);
    var end = new Date(endTime.value);

    var cnt = end.getTime() - start.getTime();

    term.value = Math.floor(cnt / (24 * 60 * 60 *1000));
}