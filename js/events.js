//define functions here
function getIt() {
    $("p").on("click", () => {
        alert("Hey!");
        return;
    });
};

function frameIt() {
    $("img").on("load", () => {
        $("img").addClass("tasty");
        return;
    });
};

function pressIt() {

}

function submitIt() {

}

$(document).ready(function(){

// call functions here
    getit()
});
