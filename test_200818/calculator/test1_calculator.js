var calculator = function () {
    var value1 = document.getElementById('value1');
    var value2 = document.getElementById('value2');
    var result = document.getElementById('result');

    var radio = document.getElementsByName('radio_answer');
    var radio_checked = '';

    for (var i = 0; i < radio.length; ++i) {
        if (radio[i].checked == true) {
            radio_checked = radio[i].value;
        }
    }

    switch (radio_checked) {
        case '+':
            result.value = parseInt(value1.value) + parseInt(value2.value);
            break;
        case '-':
            result.value = parseInt(value1.value) - parseInt(value2.value);
            break;
        case '*':
            result.value = parseInt(value1.value) * parseInt(value2.value);
            break;
        case '/':
            result.value = parseInt(value1.value) / parseInt(value2.value);
            break;
    }

}

var init = function(){
    var value1 = document.getElementById('value1');
    var value2 = document.getElementById('value2');
    var result = document.getElementById('result');
    var radio = document.getElementsByName('radio_answer');

    value1.value = '';
    value2.value = '';
    result.value = '';

    for (var i = 0; i < radio.length; ++i) {
        if (radio[i].checked == true) {
            radio[i].checked = false;
        }
    }
}