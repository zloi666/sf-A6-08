let width = 0;

function plus1() {
    width = width + 1;
    $("#bar").css("width", width + "%");
    if (width >= 100) {
        width = 100;
    }
}

function plus3() {
    width = width + 3;
    $("#bar").css("width", width + "%");
    if (width >= 100) {
        width = 100;
    }
}

function plus7() {
    width = width + 7;
    $("#bar").css("width", width + "%");
    if (width >= 100) {
        width = 100;
    }
}


function init() {
    $("button#plus1").click(plus1);
    $("button#plus3").click(plus3);
    $("button#plus7").click(plus7);

}

$(document).ready(init);