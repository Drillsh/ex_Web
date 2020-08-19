window.onload = function(){
    var year = document.getElementById('year');
    var month = document.getElementById('month');
    var date = document.getElementById('date');
    var day = document.getElementById('day');
    var time = document.getElementById('time');

    setInterval(getDateInfo, 1000);
}

function getDateInfo(){
    var currentTime = new Date();
    var daysArray = ["일", "월", "화", "수", "목", "금", "토"];

    year.value = currentTime.getFullYear();
    month.value = currentTime.getMonth() + 1;
    date.value = currentTime.getDate();
    day.value = daysArray[currentTime.getDay()];
    time.value = currentTime.getHours() + " : " + currentTime.getMinutes() + " : " + currentTime.getSeconds();
}