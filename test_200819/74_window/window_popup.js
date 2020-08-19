function open_new(){
    //  새창 띄우기
    window.open('window_popup.html');
}

function open_pop(){
    // 클릭할때마다 새로 열리는 팝업창
    window.open('window_popup.html','', "width = 600, height=600, scrollbars=no, toolbar=no, menubar=no, status=no, location=no");
}

function open_parameter(url){
    // 파라미터로 전달받은 팝업창
    // 한번 생성된 팝업창을 지속적으로 재사용
    window.open(url,'mywin','width=600, height=600, scrollbars=no, toolbar=no, menubar=no, status=no, location=no');
}